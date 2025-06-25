import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Heart, Quote } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for demonstration
const featuredBooks = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 12.99,
    originalPrice: 16.99,
    rating: 4.8,
    reviewCount: 2847,
    coverImage: "/placeholder.svg",
    category: "Fiction",
    isBestseller: true,
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    price: 15.99,
    originalPrice: 19.99,
    rating: 4.9,
    reviewCount: 5623,
    coverImage: "/placeholder.svg",
    category: "Self-Help",
    isNew: true,
  },
  {
    id: "3",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: 13.99,
    rating: 4.7,
    reviewCount: 8934,
    coverImage: "/placeholder.svg",
    category: "Romance",
    isBestseller: true,
  },
  {
    id: "4",
    title: "Dune",
    author: "Frank Herbert",
    price: 14.99,
    originalPrice: 18.99,
    rating: 4.6,
    reviewCount: 3421,
    coverImage: "/placeholder.svg",
    category: "Sci-Fi",
  },
];

const categories = [
  { name: "Fiction", count: "2,340 books", color: "bg-blue-500" },
  { name: "Non-Fiction", count: "1,870 books", color: "bg-green-500" },
  { name: "Romance", count: "1,560 books", color: "bg-pink-500" },
  { name: "Mystery", count: "980 books", color: "bg-purple-500" },
  { name: "Sci-Fi", count: "750 books", color: "bg-cyan-500" },
  { name: "Biography", count: "650 books", color: "bg-orange-500" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Book Enthusiast",
    content:
      "BookHaven has completely transformed my reading habits. The vast selection and instant access make it my go-to platform for discovering new authors.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Academic Researcher",
    content:
      "The academic collection is impressive. I've found rare texts and research materials that would have taken weeks to source otherwise.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Casual Reader",
    content:
      "Love the reading experience on all my devices. The sync feature means I can start reading on my tablet and continue on my phone seamlessly.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Featured Books Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-2">
                Featured Books
              </h2>
              <p className="text-muted-foreground">
                Handpicked selections from our editorial team
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/books">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Browse by Category
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our extensive collection organized by your favorite genres
              and topics
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`}
              >
                <Card className="group cursor-pointer transition-all duration-300 hover:book-shadow-hover hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1 group-hover:text-brand-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-brand-500" />
            <h2 className="text-3xl font-serif font-bold">Trending Now</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-brand-500 text-white">
                  Most Popular This Week
                </Badge>
                <h3 className="text-2xl font-serif font-bold">
                  "The Psychology of Money" by Morgan Housel
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A fascinating exploration of how psychology influences our
                  financial decisions. This bestseller combines compelling
                  stories with practical insights about wealth, greed, and
                  happiness.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-brand-600">
                    $18.99
                  </span>
                  <span className="text-muted-foreground line-through">
                    $24.99
                  </span>
                  <Badge variant="destructive">25% OFF</Badge>
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="bg-brand-500 hover:bg-brand-600">
                  Read Preview
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="w-4 h-4 mr-2" />
                  Add to Wishlist
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] max-w-xs mx-auto book-shadow-hover rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="The Psychology of Money"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-500 text-white px-4 py-2 rounded-lg font-semibold">
                #1 Bestseller
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-brand-50 to-warm-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              What Our Readers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied readers who have made BookHaven their
              digital library
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur border-0 book-shadow"
              >
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-brand-400 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Never Miss a Great Book
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for personalized book recommendations,
            exclusive deals, and early access to new releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <span className="font-serif text-lg font-bold">BookHaven</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your premier destination for digital books. Discover, read, and
                enjoy thousands of titles across every genre.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/books"
                    className="text-muted-foreground hover:text-brand-600"
                  >
                    Browse Books
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories"
                    className="text-muted-foreground hover:text-brand-600"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bestsellers"
                    className="text-muted-foreground hover:text-brand-600"
                  >
                    Bestsellers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/new-releases"
                    className="text-muted-foreground hover:text-brand-600"
                  >
                    New Releases
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Account</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/auth"
                    className="text-muted-foreground hover:text-brand-600"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-muted-foreground hover:text-brand-600"
                  >
                    My Library
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wishlist"
                    className="text-muted-foreground hover:text-brand-600"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="text-muted-foreground hover:text-brand-600"
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/help"
                    className="text-muted-foreground hover:text-brand-600"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-brand-600"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-muted-foreground hover:text-brand-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-muted-foreground hover:text-brand-600"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 BookHaven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
