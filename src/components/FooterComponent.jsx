import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <p>&copy; 2025 BarberShop. All Rights Reserved.</p>
        <div>
          <a href="#" className="text-white mx-2">Facebook</a>
          <a href="#" className="text-white mx-2">Instagram</a>
          <a href="#" className="text-white mx-2">Twitter</a>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;