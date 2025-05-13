import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const reviews = [
  {
    name: "Arjun Patel",
    role: "Software Engineer",
    review: "Impressed by the attention to detail. Clean lines, great fade, and chill atmosphere!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Neha Verma",
    role: "Graphic Designer",
    review: "Very professional! Loved how they took their time to perfect the cut.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Rohit Sharma",
    role: "Photographer",
    review: "Super stylish and great vibe. Feels more like a lounge than a barber shop!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sana Khan",
    role: "Fashion Blogger",
    review: "The team is lovely and so skilled! I’ve recommended them to all my friends.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  }
];

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  return (
    <div className="py-5" style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
      <h2 className="text-center" style={{ color: '#f5a623' }}>Client Feedback</h2>
      <p className="text-center mb-5">Real voices from our trusted customers</p>
      <Row className="justify-content-center">
        {getVisibleReviews().map((review, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card
              style={{
                backgroundColor: '#2a2a2a',
                border: 'none',
                borderRadius: '15px',
                animation: 'slideIn 1s ease-in-out',
                color: '#fff'
              }}
            >
              <Card.Body className="text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="rounded-circle mb-3"
                  style={{ width: '80px', height: '80px' }}
                />
                <Card.Title>{review.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{review.role}</Card.Subtitle>
                <div className="mb-2">
                  {Array(review.rating).fill().map((_, i) => (
                    <span key={i} style={{ color: '#f5a623' }}>★</span>
                  ))}
                </div>
                <Card.Text>{review.review}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <style>
        {`
          @keyframes slideIn {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default CustomerReview;