import { useState } from "react";
import { Search } from "lucide-react";
import BlogCard from "../components/BlogCard";
import "../styles/Blog.css";

const categories = [
  "All Articles",
  "Anxiety & Stress", 
  "Depression",
  "Self-Care",
  "Therapy & Treatment",
  "Workplace Wellness",
  "Relationships",
  "Mindfulness"
];

// sample of blog data (later to be fetched from the backend)
const blogArticles = [
  {
    id: 1,
    title: "Understanding Anxiety: A Comprehensive Guide to Managing Daily Stress",
    excerpt: "Learn practical strategies for managing anxiety and stress in your daily life...",
    author: "Dr. Sarah Kimani",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Anxiety & Stress",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Building Resilience Through Mindfulness Practices",
    excerpt: "Explore how mindfulness meditation can strengthen your mental resilience...",
    author: "Michael Wafula",
    date: "Dec 12, 2024", 
    readTime: "6 min read",
    category: "Mindfulness",
    image: "/images/mindfulness.jpeg"
  },
  {
    id: 3,
    title: "Recognizing Signs of Depression in Yourself and Others",
    excerpt: "Understanding the symptoms and signs of depression is the first step toward help...",
    author: "Dr. Emma Mwende",
    date: "Dec 10, 2024",
    readTime: "10 min read", 
    category: "Depression",
    image: "/images/depression.jpeg"
  },
  {
    id: 4,
    title: "Self-Care Strategies That Actually Work",
    excerpt: "Practical, evidence-based self-care techniques you can implement today...",
    author: "Lisa Wakio",
    date: "Dec 8, 2024",
    readTime: "5 min read",
    category: "Self-Care", 
    image: "/images/selfcare.jpeg"
  },
  {
    id: 5,
    title: "Creating Healthy Boundaries in Relationships",
    excerpt: "Learn how to set and maintain healthy boundaries that protect your mental wellbeing...",
    author: "Dr. James Odinga",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    category: "Relationships",
    image: "/images/boundary.jpeg"
  },
  {
    id: 6,
    title: "Mental Health in the Workplace: A Manager's Guide", 
    excerpt: "Essential strategies for creating a mentally healthy workplace environment...",
    author: "Rachel Bosibori",
    date: "Dec 3, 2024",
    readTime: "9 min read",
    category: "Workplace Wellness",
    image: "/images/blogcontent.jpeg"
  }
]

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");

  const filteredArticles = selectedCategory === "All Articles"
  ? blogArticles
  : blogArticles.filter(article => article.category === selectedCategory);
  return (
    <main>
    <section className="blog-hero">
      {/* Background Image with Overlay */}
      <div className="blog-hero__background">
        <img
          src="/images/blogheroimage2.jpeg"
          alt="Mental health awareness - peaceful and calming imagery"
          className="blog-hero__image"
        />
        <div className="blog-hero__overlay" />
      </div>

      {/* Content */}
      <div className="blog-hero__content">
        <h1 className="blog-hero__title">
          Mental Health
          <span className="blog-hero__highlight">Awareness & Support</span>
        </h1>

        <p className="blog-hero__subtitle">
          Discover resources, insights, and stories to support your mental wellbeing journey. 
          You are not alone.
        </p>

        {/* Search Bar */}
        <div className="blog-hero__search">
          <div className="search-input">
            <Search className="search-icon" />
            <input 
              type="text"
              placeholder="Search articles, topics..."
              className="search-field"
            />
          </div>
        </div>

        <div className="blog-hero__buttons">
          <button className="btn btn-primary">Explore Articles</button>
          <button className="btn btn-outline">Get Support</button>
        </div>
      </div>
    </section>
    {/* Blog filters section */}
      <section className="blog-filters">
        <div className="filters-container">
          <h2 className="filters-title">Browse by Topic</h2>
          <div className="filters-buttons">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="filters-badge">
            <span>
              {selectedCategory === "All Articles"
                ? "Showing all articles"
                : `Filtered by: ${selectedCategory}`}
            </span>
          </div>
        </div>
      </section>
      {/*blog grid */}
      <section className="blog-grid">
        <div className="grid-container">
          {filteredArticles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="no-results">
            <p>No articles found in this category. Try selecting a different topic.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Blog;
