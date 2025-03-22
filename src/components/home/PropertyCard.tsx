
import React from 'react';
import { Heart, MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import Badge from '../shared/Badge';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  tags?: string[];
  featured?: boolean;
  aiMatch?: number;
}

const PropertyCard = ({
  id,
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
  tags = [],
  featured = false,
  aiMatch
}: PropertyCardProps) => {
  return (
    <div className="card-hover glass-card overflow-hidden animate-fade-in">
      <div className="relative">
        {/* Image container with aspect ratio */}
        <div className="relative h-0 pb-[65%] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 hover:scale-105"
            loading="lazy"
          />
          
          {/* Favorite button */}
          <button 
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
            aria-label="Add to favorites"
          >
            <Heart className="h-5 w-5 text-navy" />
          </button>
          
          {/* Featured badge */}
          {featured && (
            <Badge 
              variant="gold" 
              className="absolute top-3 left-3"
            >
              Featured
            </Badge>
          )}
          
          {/* AI Match badge */}
          {aiMatch && (
            <div className="absolute bottom-3 left-3 bg-navy/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
              {aiMatch}% Match
            </div>
          )}
        </div>
        
        <div className="p-5">
          {/* Price */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-navy font-serif">
              ${price.toLocaleString()}
            </h3>
            
            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="outline" size="sm">{tag}</Badge>
                ))}
              </div>
            )}
          </div>
          
          {/* Title */}
          <h4 className="text-lg font-medium mb-1 text-navy-light">{title}</h4>
          
          {/* Address */}
          <div className="flex items-center text-gray-500 mb-4">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm truncate">{address}</span>
          </div>
          
          {/* Features */}
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{area.toLocaleString()} sq ft</span>
            </div>
          </div>
          
          {/* View details link */}
          <Link
            to={`/properties/${id}`}
            className="flex items-center text-gold hover:text-gold-dark transition-colors"
          >
            <span className="font-medium">View Details</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
