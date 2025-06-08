import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const NEWS_API_KEY = "870cc4b1b75c401eaed757635ccd614d";
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=real%20estate&language=en&sortBy=publishedAt&pageSize=12&apiKey=${NEWS_API_KEY}`;

const NewsPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(NEWS_API_URL)
            .then(res => res.json())
            .then(data => {
                if (data.status === "ok") setArticles(data.articles);
                else setError("Failed to fetch news.");
            })
            .catch(() => setError("Failed to fetch news."))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
            <Navbar />
            <main className="flex-grow py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">Real Estate News</h1>
                    {loading && <div className="text-center text-navy">Loading news...</div>}
                    {error && <div className="text-center text-red-600">{error}</div>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {articles.map((article: any, idx) => (
                            <a
                                key={idx}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 group"
                            >
                                {article.urlToImage && (
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="w-full h-48 object-cover rounded mb-4 group-hover:scale-105 transition-transform duration-300"
                                    />
                                )}
                                <h2 className="text-xl font-semibold text-navy mb-2 group-hover:text-gold">
                                    {article.title}
                                </h2>
                                <p className="text-gray-600 mb-2 line-clamp-3">{article.description}</p>
                                <div className="text-xs text-gray-400 mb-1">
                                    {article.source?.name} &middot; {new Date(article.publishedAt).toLocaleString()}
                                </div>
                                <span className="inline-block text-gold font-medium mt-2">Read More &rarr;</span>
                            </a>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NewsPage;
