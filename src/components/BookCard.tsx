import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  coverImage: string;
  category: string;
  isBestseller?: boolean;
  isNew?: boolean;
  className?: string;
}

const BookCard = ({
  id,
  title,
  author,
  price,
  originalPrice,
  rating,
  reviewCount,
  coverImage,
  category,
  isBestseller,
  isNew,
  className,
}: BookCardProps) => {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Card
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:book-shadow-hover overflow-hidden bg-card/50 backdrop-blur",
        className,
      )}
    >
      <CardContent className="p-0">
        <div className="relative">
          {/* Book Cover */}
          <Link to={`/book/${id}`}>
            <div className="aspect-[3/4] overflow-hidden bg-muted rounded-t-lg">
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && (
              <Badge className="bg-brand-500 hover:bg-brand-600 text-white text-xs">
                New
              </Badge>
            )}
            {isBestseller && (
              <Badge
                variant="secondary"
                className="bg-amber-100 text-amber-800 text-xs"
              >
                Bestseller
              </Badge>
            )}
            {discount > 0 && (
              <Badge variant="destructive" className="text-xs">
                -{discount}%
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 w-8 h-8 bg-white/80 hover:bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Heart className="w-4 h-4" />
          </Button>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              className="w-full bg-brand-500 hover:bg-brand-600 text-white"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Book Details */}
        <div className="p-4 space-y-2">
          {/* Category */}
          <Badge variant="outline" className="text-xs text-muted-foreground">
            {category}
          </Badge>

          {/* Title */}
          <Link to={`/book/${id}`}>
            <h3 className="font-serif font-semibold text-sm leading-tight line-clamp-2 hover:text-brand-600 transition-colors">
              {title}
            </h3>
          </Link>

          {/* Author */}
          <p className="text-sm text-muted-foreground">by {author}</p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-3 h-3",
                    i < Math.floor(rating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-muted-foreground/30",
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {rating} ({reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg text-brand-600">
                ${price.toFixed(2)}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
