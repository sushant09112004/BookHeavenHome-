import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, BookOpen, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-warm-50 to-brand-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                Your Digital Library Awaits
              </div>

              <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
                Discover Your Next
                <span className="gradient-text block">Great Read</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Explore thousands of eBooks across every genre. From bestselling
                novels to academic texts, find your perfect book and start
                reading instantly.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search books, authors, genres..."
                  className="pl-11 h-12 bg-white/80 backdrop-blur border-brand-200 focus:border-brand-400"
                />
              </div>
              <Button
                size="lg"
                className="bg-brand-500 hover:bg-brand-600 h-12"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90"
              >
                <Link to="/books">
                  Start Reading Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/categories">Browse Categories</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <BookOpen className="w-5 h-5 text-brand-500" />
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Books Available</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <Users className="w-5 h-5 text-brand-500" />
                  <span className="text-2xl font-bold">50K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Readers</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <Award className="w-5 h-5 text-brand-500" />
                  <span className="text-2xl font-bold">5★</span>
                </div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column - Book Display */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Main Book */}
              <div className="relative z-10 max-w-xs mx-auto lg:max-w-sm">
                <div className="aspect-[3/4] book-shadow-hover rounded-lg overflow-hidden bg-gradient-to-br from-white to-gray-50">
                  <img
                    src="/placeholder.svg"
                    alt="Featured Book"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif font-bold text-white text-lg mb-1">
                      The Digital Age
                    </h3>
                    <p className="text-white/80 text-sm">by Sarah Johnson</p>
                  </div>
                </div>
              </div>

              {/* Floating Books */}
              <div className="absolute -top-4 -right-4 w-20 h-28 lg:w-24 lg:h-32 book-shadow rounded-md bg-gradient-to-br from-brand-400 to-brand-600 opacity-80 rotate-12 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-24 lg:w-20 lg:h-28 book-shadow rounded-md bg-gradient-to-br from-warm-400 to-warm-600 opacity-60 -rotate-12 animate-pulse delay-500" />

              {/* Reading Progress Indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Reading Progress</p>
                  <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
                    <div className="w-16 h-2 bg-brand-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
