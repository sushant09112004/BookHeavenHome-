import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, Search } from "lucide-react";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-warm-50 to-brand-50">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          {/* Large 404 */}
          <div className="mb-8">
            <h1 className="text-8xl font-serif font-bold gradient-text mb-4">
              404
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-brand-500" />
              <h2 className="text-2xl font-serif font-semibold">
                Page Not Found
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Sorry, the page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Book Stack Illustration */}
          <div className="mb-8 relative">
            <div className="flex items-end justify-center gap-2">
              <div className="w-12 h-16 bg-brand-400 rounded-sm rotate-6 book-shadow" />
              <div className="w-12 h-20 bg-brand-500 rounded-sm -rotate-3 book-shadow" />
              <div className="w-12 h-18 bg-brand-600 rounded-sm rotate-2 book-shadow" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full animate-bounce">
              <span className="block w-full h-full text-center text-xs leading-6">
                ?
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button
              asChild
              size="lg"
              className="w-full bg-brand-500 hover:bg-brand-600"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full">
              <Link to="/books">
                <Search className="w-4 h-4 mr-2" />
                Browse Books
              </Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-8 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              You might find these helpful:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                to="/bestsellers"
                className="text-sm text-brand-600 hover:text-brand-700 underline"
              >
                Bestsellers
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                to="/categories"
                className="text-sm text-brand-600 hover:text-brand-700 underline"
              >
                Categories
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                to="/new-releases"
                className="text-sm text-brand-600 hover:text-brand-700 underline"
              >
                New Releases
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                to="/help"
                className="text-sm text-brand-600 hover:text-brand-700 underline"
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
