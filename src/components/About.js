// About.js
// import React from 'react';
// import './About.css'; // Ensure you have the correct path to your CSS file

// const About = () => {
//   return (
//     <div className="about-bg App-header">
//       <div className="about-container">
//         <h2>About Our School Management System</h2>
//         <p>
//           Welcome to our School Management System. Our system is designed to help manage and streamline the
//           day-to-day operations of schools, colleges, and educational institutions. Here is a brief history
//           of how our system came to be:
//         </p>
//         <p>
//           Our journey began in 2010 when a group of educators and software developers recognized the need for
//           a comprehensive tool to manage school activities more effectively. Over the years, we have developed
//           and refined our system to include a wide range of features, from student enrollment to grading and
//           reporting.
//         </p>
//         <p>
//           Today, our School Management System is used by hundreds of institutions worldwide, helping them to
//           provide better educational experiences for their students and staff. We are committed to continuous
//           improvement and innovation, ensuring that our users have access to the latest tools and technologies
//           in educational management.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;


// About.js
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './About.css'; // Ensure you have the correct path to your CSS file

const About = () => {
  return (
    <div className="about-bg App-header">
      <Container className="about-container">
        <h2>About Namma Kudla</h2>
        <p>
        Welcome to Namma Kudla, your ultimate gateway to exploring the rich cultural heritage, stunning natural beauty, and unique attractions of Kudla.We aim to foster a vibrant community where travelers can share their experiences, connect with local guides for personalized advice, and access essential resources for a memorable journey.
        </p>
        <p>
        The vision of Namma Kudla is to become the foremost online destination for travelers seeking to uncover the hidden gems, cultural treasures, and natural wonders of Kudla. We envision a platform that seamlessly connects travelers with local insights, fosters meaningful connections between visitors and the community, and promotes sustainable tourism practices that preserve Kudla's authenticity and beauty for future generations.
        </p>
        <p>
        Our interactive maps and insightful reviews offer valuable tips and recommendations to help you plan your next adventure. Join our vibrant community, contribute your own travel stories, and connect with fellow travelers. Whether you're seeking inspiration or practical advice, our platform is designed to make your travel planning as enjoyable and seamless as your journey itself.
        </p>
        <Carousel className="about-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://myholidayhappiness.com/uploads/250e217749d55f40b79866187b26bcfb.jpg" // Update with your image path
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Bejai Museum</h3>
              <p>Bejai Museum in Mangalore showcases artifacts and art reflecting the region's heritage..</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Sultan_Battery_2163.JPG/1200px-Sultan_Battery_2163.JPG" // Update with your image path
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Sultan Battery</h3>
              <p>Sultan Battery in Mangalore, built by Tipu Sultan in 1784, is a historic watchtower.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://c8.alamy.com/comp/2P0FYKF/st-aloysius-college-church-in-mangaluru-or-mangalore-karnataka-india-asia-2P0FYKF.jpg" // Update with your image path
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>St. Aloysius Chapel</h3>
              <p>St. Aloysius Chapel in Mangalore is famed for its stunning frescoes.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default About;

// App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavigationBar from './components/Navbar';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import Home from './components/Home';
// import About from './components/About';
// import Guide from './components/Guide';
// import './App.css';

// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   return (
//     <div className={darkMode ? 'dark-mode' : 'light-mode'}>
//       <Router>
//         <NavigationBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/guide" element={<Guide />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;

