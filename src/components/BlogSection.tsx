
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowUp } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "How SwachhSaathi is Transforming Rural Employment",
      excerpt: "Discover how our platform is creating sustainable livelihoods for rural youth while addressing urban waste challenges across 25+ cities in India.",
      author: "Team SwachhSaathi",
      date: "December 15, 2024",
      category: "Impact Story",
      readTime: "5 min read"
    },
    {
      title: "The Science Behind Effective Waste Segregation",
      excerpt: "Learn about the latest techniques and technologies we use to ensure proper waste segregation and maximize recycling efficiency.",
      author: "Dr. Priya Sharma",
      date: "December 12, 2024",
      category: "Environment",
      readTime: "7 min read"
    },
    {
      title: "Digital Innovation in Waste Management",
      excerpt: "Exploring how mobile technology, AI, and digital payments are revolutionizing the waste management industry in India.",
      author: "Rajesh Kumar",
      date: "December 10, 2024",
      category: "Technology",
      readTime: "6 min read"
    },
    {
      title: "Community Engagement: Building Cleaner Cities Together",
      excerpt: "Stories from our partner cities showcasing how citizen participation and community involvement drive successful cleanup initiatives.",
      author: "Anjali Mehta",
      date: "December 8, 2024",
      category: "Community",
      readTime: "4 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Impact Story": return "bg-green-100 text-green-800";
      case "Environment": return "bg-blue-100 text-blue-800";
      case "Technology": return "bg-purple-100 text-purple-800";
      case "Community": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Latest Updates & Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest impact stories, environmental insights, and community achievements in building a cleaner India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={`text-xs ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-green-200 text-green-600 hover:bg-green-50 hover:border-green-300 group-hover:shadow-md transition-all"
                >
                  Read More
                  <ArrowUp className="w-4 h-4 ml-2 transform rotate-45 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-green-600 to-emerald-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with SwachhSaathi</h3>
            <p className="text-green-100 mb-6">
              Get the latest updates on our impact, new features, and environmental insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold px-6 py-2 rounded-lg">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-green-200 mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlogSection;
