import React, { useEffect, useRef } from 'react';
import { Button, Container } from 'react-bootstrap';
import { gsap } from 'gsap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroComponent = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.5, ease: 'elastic.out(1, 0.3)' }
    );
  }, []);

  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        height: '100vh',
        background: 'url(https://plus.unsplash.com/premium_photo-1677444546739-21b8aad351d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHx8MA%3D%3D) center/cover no-repeat',
      }}
    >
      <Container className="text-center text-white">
        <h1 ref={textRef} className="display-3 fw-bold">
          Fama Barber Shop & Beauty Salon
        </h1>
        <p ref={textRef} className="lead">Premier Barber Shop in Denton, TX</p>
        <Button
          ref={buttonRef}
          variant="primary"
          size="lg"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Book Now
        </Button>
      </Container>
    </section>
  );
};

export default HeroComponent;