import "../styles/Resources.css";

const Resources = () => {
  return (
    <section id="resources" className="resources">
      <div className="container">
        <h2>Resources</h2>
        <div className="resource-section">
          <h3>Downloadable Guides</h3>
          <p>
            Offer free, valuable resources such as mental health checklists, wellness program templates, and employee engagement tools.
          </p>
          <a href="#" className="resource-link">
            Download Now
          </a>
        </div>
        <div className="resource-section">
          <h3>Webinars and Workshops</h3>
          <p>
            Provide information about upcoming events, including dates, topics, and registration links. Highlight the availability of free webinars focused on mental health awareness and education.
          </p>
          <a href="#" className="resource-link">
            Register for Upcoming Webinar
          </a>
        </div>
        <div className="resource-section">
          <h3>White Papers</h3>
          <p>
            Share in-depth research on topics like the importance of mental health in the workplace, the impact of corporate wellness programs, and strategies for effective client engagement.
          </p>
          <a href="#" className="resource-link">
            Read White Papers
          </a>
        </div>
        <div className="resource-section">
          <h3>Blog Content</h3>
          <h4>Latest Posts</h4>
          <ul>
            <li>The Importance of Mental Health in the Workplace.</li>
            <li>How to Enhance Client Engagement through Strategic Surveys.</li>
            <li>5 Tips for Implementing a Successful Wellness Program.</li>
            <li>Our Commitment to Social Responsibility: The Impact of Pro Bono Mental Health Services.</li>
          </ul>
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