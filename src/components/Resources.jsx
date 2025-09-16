import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import "../styles/Resources.css";
import { Link } from "react-router-dom";
import mentalHealthImage from "../assets/design3.png";
import clientEngagementImage from "../assets/survey.jpg";
import wellnessProgramImage from "../assets/implement1.jpg";
import socialResponsibilityImage from "../assets/socialresponsb.png";

const Resources = () => {
  useAnimateOnScroll();

  const blogPosts = [
    {
      title: "The Importance of Mental Health in the Workplace",
      image: mentalHealthImage,
      url: "https://www.bain.com/insights/talk-mental-health-workplace?",
    },
    {
      title: "How to Enhance Client Engagement through Strategic Surveys",
      image: clientEngagementImage,
      url: "",
    },
    {
      title: "5 Tips for Implementing a Successful Wellness Program",
      image: wellnessProgramImage,
      url: "",
    },
    {
      title: "Our Commitment to Social Responsibility: The Impact of Pro Bono Mental Health Services",
      image: socialResponsibilityImage,
      url: "",
    },
  ];
  return (
    <section id="resources" className="resources">
      <div className="container">
        <h2 data-animate="fade-slide-up">Resources</h2>
        <div className="resource-section" data-animate="fade-slide-up">
        <img width="30" height="30" src="https://img.icons8.com/material-outlined/24/download--v1.png" alt="download--v1"/>
          <h3>Downloadable Guides </h3>
          <p>
            Offer free, valuable resources such as mental health checklists, wellness program templates, and employee engagement tools.
          </p>
          <a href="#" className="resource-link">
            Download Now
          </a>
        </div>
        <div className="resource-section" data-animate="fade-slide-up">
        <img width="58" height="58" src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/external-teaching-online-course-wanicon-lineal-wanicon.png" alt="external-teaching-online-course-wanicon-lineal-wanicon"/>
          <h3>Webinars and Workshops</h3>
          <p>
            Provide information about upcoming events, including dates, topics, and registration links. Highlight the availability of free webinars focused on mental health awareness and education.
          </p>
          <a href="#" className="resource-link">
            Register for Upcoming Webinar
          </a>
        </div>
        <div className="resource-section" data-animate="fade-slide-up">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/signing-a-document.png" alt="signing-a-document"/>
          <h3>White Papers</h3>
          <p>
            Share in-depth research on topics like the importance of mental health in the workplace, the impact of corporate wellness programs, and strategies for effective client engagement.
          </p>
          <a href="#" className="resource-link">
            Read White Papers
          </a>
        </div>
        <div className="resource-section" data-animate="fade-slide-up">
          <h3>Blog Content</h3>
          <h4>Latest Posts</h4>
          <div className="blog-posts-grid">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card" data-animate="fade-slide-up">
                <img src={post.image} alt={post.title} className="blog-image" />
                <h5>{post.title}</h5>
                <a href={post.url} className="read-more-btn" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            ))}
          </div>
          {/*button to direct to blog page */}
          <div className="see-more-blogs">
            <Link to="/blog" className="btn btn-primary">
              See More Blogs
            </Link>
          </div>
          <h4>Categories</h4>
          <ul>
            <li>Corporate Wellness</li>
            <li>Mental Health</li>
            <li>Client Engagement</li>
            <li>Social Impact</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resources;