import { useEffect, useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Testimonials.css'


const Home = () => {
  useAnimateOnScroll(); // Custom hook for scroll animations

  const [testimonials, setTestimonials] = useState([]); // state for testimonials
  const [loading, setLoading] = useState(true); // state for loading

  useEffect(() => {
    // Fetch testimonials from the backend API
    fetch(`${process.env.REACT_APP_API_URL}/api/testimonials`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Testimonials data:", data); // Log the fetched data
        setTestimonials(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []);
  return (
    <section id="home" className="home">
      {/* Hero Section */}
      <div className="hero" style={{ backgroundImage: "url('/images/heroImage.jpg')" }}>
        <div className="hero-content">
          <h1>Growth360: Cultivating Mental Wellness, Empowering Businesses.</h1>
          <Link to="/services" className="cta-button">
            Explore Services
          </Link>
        </div>
      </div>

      {/* Home Text Section */}
      <div className="home-text" data-animate="fade-slide-up">
        <p>
          At Growth Full Circle Agencies, we believe that <span className="highlight">mental well-being</span> is the <span className="highlight">cornerstone</span> 
          of <span className="highlight">business success</span> and <span className="highlight">community flourishing</span>. 
          Our <span className="highlight">comprehensive mental health</span> and 
          <span className="highlight">corporate wellness solutions</span> are designed to <span className="highlight">empower your employees</span> and 
          <span className="highlight">elevate your business</span>. Beyond our corporate focus, we are <span className="highlight">deeply committed</span> 
          to giving back to society through <span className="highlight">pro bono services</span>, 
          <span className="highlight">mental health awareness initiatives</span>, and <span className="highlight">community outreach</span>.
        </p>
      </div>

      {/* Stats Marquee Section */}
      <div className="marquee-container">
        <div className="marquee">
          <div className="home-stats">
            <div className="stats1">
              <span>80%</span>
              <p>USERS SIGNIFICANT</p>
            </div>
            <div className="stats2">
              <span>60+</span>
              <p>ORGANIZATION TRUST</p>
            </div>
            <div className="stats2">
              <span>2000</span>
              <p>USER SATISFACTION</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Services Section */}
      <div className="key-services" data-animate="fade-slide-up">
        <h2>Key Services</h2>
        <div className="services-grid">
          <div className="service-card" data-animate="fade-slide-up">
            <img width="80" height="80" src="/images/package1.svg" alt="illustration" />
            <h3>Corporate Wellness Packages</h3>
            <p>Tailored programs designed to meet the unique needs of your business.</p>
          </div>
          <div className="service-card" data-animate="fade-slide-up">
            <img width="80" height="80" src="/images/service1.svg" alt="illustration" />
            <h3>Client Engagement Strategies</h3>
            <p>Innovative approaches to understanding and engaging your clients.</p>
          </div>
          <div className="service-card" data-animate="fade-slide-up">
            <img width="80" height="80" src="/images/support.svg" alt="illustration" />
            <h3>SME Mental Health Support</h3>
            <p>Subsidized services that enhance productivity and business resilience.</p>
          </div>
          <div className="service-card" data-animate="fade-slide-up">
            <img width="100" height="100" src="/images/social1.svg" alt="illustration" />
            <h3>Social Impact Initiatives</h3>
            <p>Pro bono mental health services and free awareness content on our platforms.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="footer-section testimonials" data-animate="fade-slide-up">
        <h3>What Our Clients Say</h3>
        <div className="testimonial-container">
      {loading ? (
        <p>Loading testimonials...</p>
      ) : testimonials.length === 0 ? (
        <p>No testimonials available at the moment.</p>
      ) :(
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-author">- {testimonial.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      )}
        </div>
      </div>
    </section>
  );
};

export default Home;
