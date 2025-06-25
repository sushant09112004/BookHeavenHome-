import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Heart,
  Share2,
  Star,
  ShoppingCart,
  Download,
  Eye,
  Calendar,
  BookOpen,
  User,
} from "lucide-react";

const BookDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Book Cover and Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="aspect-[3/4] book-shadow-hover rounded-lg overflow-hidden mb-6">
                <img
                  src="/placeholder.svg"
                  alt="Book Cover"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-brand-500 hover:bg-brand-600"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart - $15.99
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Book
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Heart className="w-4 h-4 mr-2" />
                    Wishlist
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Book Info Card */}
              <Card className="mt-6">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Format:
                    </span>
                    <Badge>eBook (PDF, EPUB)</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Pages:
                    </span>
                    <span className="text-sm font-medium">324 pages</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Language:
                    </span>
                    <span className="text-sm font-medium">English</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Published:
                    </span>
                    <span className="text-sm font-medium">March 2024</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Book Details */}
          <div className="lg:col-span-2">
            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground mb-4">
              <span>Fiction</span> / <span>Contemporary</span> /{" "}
              <span className="text-foreground">Book Details</span>
            </nav>

            {/* Book Title and Meta */}
            <div className="mb-6">
              <div className="flex items-start gap-2 mb-2">
                <h1 className="text-3xl font-serif font-bold flex-1">
                  The Midnight Library
                </h1>
                <Badge className="bg-amber-100 text-amber-800">
                  Bestseller
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground mb-4">by Matt Haig</p>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-semibold">4.3</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">2,847 reviews</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">15,234 sold</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-brand-600">
                  $15.99
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  $22.99
                </span>
                <Badge variant="destructive">30% OFF</Badge>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <div className="prose max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Between life and death there is a library, and within that
                    library, the shelves go on forever. Every book provides a
                    chance to try another life you could have lived. To see how
                    things would be different if you had made other choices...
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Would you have done anything different, if you had the
                    chance to undo your regrets? This is the story of Nora Seed,
                    who finds herself faced with this decision.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A dazzling novel about all the choices that go into a life
                    well lived, from the internationally bestselling author of
                    Reasons to Stay Alive and How To Stop Time.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="preview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-12">
                      <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">
                        Book Preview
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Preview the first 5 pages of this book
                      </p>
                      <Button>
                        <Eye className="w-4 h-4 mr-2" />
                        Start Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {/* Review Summary */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-4xl font-bold">4.3</span>
                            <div>
                              <div className="flex items-center gap-1 mb-1">
                                {Array.from({ length: 5 }, (_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < 4
                                        ? "fill-amber-400 text-amber-400"
                                        : "text-muted-foreground/30"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Based on 2,847 reviews
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map((stars) => (
                            <div
                              key={stars}
                              className="flex items-center gap-3"
                            >
                              <span className="text-sm w-4">{stars}</span>
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <Progress
                                value={stars === 5 ? 65 : stars === 4 ? 25 : 10}
                                className="flex-1"
                              />
                              <span className="text-sm text-muted-foreground w-8">
                                {stars === 5
                                  ? "65%"
                                  : stars === 4
                                    ? "25%"
                                    : "10%"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Individual Reviews */}
                  <div className="space-y-4">
                    {Array.from({ length: 3 }, (_, i) => (
                      <Card key={i}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                              <User className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-semibold">
                                  Reader {i + 1}
                                </span>
                                <div className="flex items-center gap-1">
                                  {Array.from({ length: 5 }, (_, j) => (
                                    <Star
                                      key={j}
                                      className={`w-3 h-3 ${
                                        j < 4
                                          ? "fill-amber-400 text-amber-400"
                                          : "text-muted-foreground/30"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  3 days ago
                                </span>
                              </div>
                              <p className="text-muted-foreground">
                                A beautifully written exploration of life's
                                infinite possibilities. Matt Haig has created
                                something truly special here.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="details" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">
                            Publication Details
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Publisher:
                              </span>
                              <span>Canongate Books</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Publication Date:
                              </span>
                              <span>March 15, 2024</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                ISBN:
                              </span>
                              <span>978-1-2345-6789-0</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Language:
                              </span>
                              <span>English</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">
                            Technical Specifications
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                File Size:
                              </span>
                              <span>2.4 MB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Formats:
                              </span>
                              <span>PDF, EPUB, MOBI</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Pages:
                              </span>
                              <span>324 pages</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                DRM:
                              </span>
                              <span>DRM-Free</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
