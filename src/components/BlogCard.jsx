import { Calendar, Clock, User } from "lucide-react";
import "../styles/BlogCard.css"; // We'll create this for styling

function BlogCard({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image,
  featured = false,
  onClick,
}) {
  return (
    <div
      className={`blog-card ${featured ? "featured" : ""}`}
      onClick={onClick}
    >
      <div className={`blog-card-image ${featured ? "featured-image" : ""}`}>
        <img src={image} alt={title} />
      </div>

      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="badge">{category}</span>
          <div className="meta-info">
            <span className="meta-item">
              <Calendar size={14} /> {date}
            </span>
            <span className="meta-item">
              <Clock size={14} /> {readTime}
            </span>
          </div>
        </div>

        <h3 className={`blog-card-title ${featured ? "large-title" : ""}`}>
          {title}
        </h3>

        <p className={`blog-card-excerpt ${featured ? "large-excerpt" : ""}`}>
          {excerpt}
        </p>

        <div className="blog-card-author">
          <User size={14} /> By {author}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
