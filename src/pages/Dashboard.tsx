import Navigation from "@/components/Navigation";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Download,
  Heart,
  History,
  Settings,
  TrendingUp,
  Calendar,
  Clock,
  Star,
} from "lucide-react";

// Mock data
const myBooks = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 12.99,
    rating: 4.8,
    reviewCount: 2847,
    coverImage: "/placeholder.svg",
    category: "Fiction",
    progress: 65,
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    price: 15.99,
    rating: 4.9,
    reviewCount: 5623,
    coverImage: "/placeholder.svg",
    category: "Self-Help",
    progress: 30,
  },
];

const wishlistBooks = [
  {
    id: "3",
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

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold mb-2">My Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Continue your reading journey
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-sm text-muted-foreground">Books Owned</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">45h</p>
                  <p className="text-sm text-muted-foreground">Reading Time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">Wishlist</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="library" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="library">My Library</TabsTrigger>
            <TabsTrigger value="reading">Currently Reading</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="history">Reading History</TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">My Library</h2>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download All
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {myBooks.map((book) => (
                  <div key={book.id} className="space-y-3">
                    <BookCard {...book} />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{book.progress}%</span>
                      </div>
                      <Progress value={book.progress} className="h-2" />
                      <Button size="sm" className="w-full">
                        Continue Reading
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reading" className="mt-6">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Currently Reading</h2>

              <div className="grid gap-6">
                {myBooks
                  .filter((book) => book.progress > 0 && book.progress < 100)
                  .map((book) => (
                    <Card key={book.id}>
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <div className="w-24 h-32 flex-shrink-0">
                            <img
                              src={book.coverImage}
                              alt={book.title}
                              className="w-full h-full object-cover rounded-lg book-shadow"
                            />
                          </div>
                          <div className="flex-1 space-y-3">
                            <div>
                              <h3 className="font-serif font-semibold text-lg">
                                {book.title}
                              </h3>
                              <p className="text-muted-foreground">
                                by {book.author}
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">
                                  Reading Progress
                                </span>
                                <span className="font-medium">
                                  {book.progress}% complete
                                </span>
                              </div>
                              <Progress value={book.progress} className="h-3" />
                            </div>
                            <div className="flex gap-3">
                              <Button>Continue Reading</Button>
                              <Button variant="outline">
                                <BookOpen className="w-4 h-4 mr-2" />
                                Table of Contents
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="wishlist" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">My Wishlist</h2>
                <Badge variant="secondary">{wishlistBooks.length} books</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlistBooks.map((book) => (
                  <BookCard key={book.id} {...book} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Reading History</h2>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">
                          Completed "The Psychology of Money"
                        </p>
                        <p className="text-sm text-muted-foreground">
                          by Morgan Housel • Finished 3 days ago
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-medium">5.0</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <History className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">
                          Started reading "Atomic Habits"
                        </p>
                        <p className="text-sm text-muted-foreground">
                          by James Clear • Started 1 week ago
                        </p>
                      </div>
                      <Badge variant="outline">In Progress</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
