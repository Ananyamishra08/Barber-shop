
import  { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {gsap} from 'gsap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfolioComponent = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  const portfolioItems = [
    'https://pmcbarber.devfrend.com/images/pmcbarber/hero.webp',
    'https://images.unsplash.com/photo-1678356164573-9a534fe43958?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1633121050918-ab208f1508b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D',
  ];

  return (
    <section id="portfolio" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Portfolio</h2>
        <Row>
          {portfolioItems.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card ref={(el) => (imageRefs.current[index] = el)}>
                <Card.Img variant="top" src={item} style={{ height: '200px', objectFit: 'cover' }} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioComponent;