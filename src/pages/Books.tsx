import Navigation from "@/components/Navigation";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Grid, List } from "lucide-react";

// Mock data for demonstration
const books = Array.from({ length: 12 }, (_, i) => ({
  id: `book-${i + 1}`,
  title: `Sample Book Title ${i + 1}`,
  author: `Author Name ${i + 1}`,
  price: 12.99 + i * 2,
  originalPrice: i % 3 === 0 ? 19.99 + i * 2 : undefined,
  rating: 4.2 + (i % 8) * 0.1,
  reviewCount: 150 + i * 50,
  coverImage: "/placeholder.svg",
  category: ["Fiction", "Non-Fiction", "Romance", "Sci-Fi"][i % 4],
  isBestseller: i % 5 === 0,
  isNew: i % 7 === 0,
}));

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold mb-2">Browse Books</h1>
          <p className="text-muted-foreground">
            Discover your next favorite read from our extensive collection
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search books, authors, ISBN..."
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="fiction">Fiction</SelectItem>
                  <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort Filter */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-muted-foreground">Filters:</span>
              <Badge variant="secondary" className="cursor-pointer">
                Fiction
                <button className="ml-1 text-xs">×</button>
              </Badge>
              <Badge variant="secondary" className="cursor-pointer">
                Under $20
                <button className="ml-1 text-xs">×</button>
              </Badge>
              <Button variant="ghost" size="sm" className="text-xs">
                Clear all
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold">1-12</span> of{" "}
              <span className="font-semibold">2,847</span> results
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline" className="bg-brand-500 text-white">
            1
          </Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <span className="px-2">...</span>
          <Button variant="outline">23</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Books;
