import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    signIn: (email: string, password: string) => Promise<User>;
    signUp: (name: string, email: string, password: string) => Promise<User>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};

// Local database for demo sign in/sign up
const USERS_KEY = 'users_db';

function getUsers() {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
}

function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function findUser(email, password) {
    const users = getUsers();
    return users.find(u => u.email === email && u.password === password);
}

function findUserByEmail(email) {
    const users = getUsers();
    return users.find(u => u.email === email);
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // Optional: persist user in localStorage for demo
    useEffect(() => {
        const stored = localStorage.getItem('user');
        if (stored) setUser(JSON.parse(stored));
    }, []);

    useEffect(() => {
        if (user) localStorage.setItem('user', JSON.stringify(user));
        else localStorage.removeItem('user');
    }, [user]);

    const signIn = async (email: string, password: string) => {
        const found = findUser(email, password);
        if (!found) throw new Error('User not found. Please sign up first.');
        setUser({ name: found.name, email: found.email });
        return { name: found.name, email: found.email };
    };

    const signUp = async (name: string, email: string, password: string) => {
        if (findUserByEmail(email)) throw new Error('User already exists. Please sign in.');
        const newUser = { name, email, password };
        saveUser(newUser);
        setUser({ name, email });
        return { name, email };
    };

    const signOut = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
