import React from 'react';
import styles from './Navbar.module.css';
import { Navbar as NavBar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
const Navbar: React.FC = () => (
  <div className={styles.Navbar} data-testid="Navbar">
   <NavBar bg="dark" data-bs-theme="dark">
        <Container>
          <NavBar.Brand href="#home">Home</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Thumbnail</Nav.Link>
            <Nav.Link href="#pricing">New</Nav.Link>
            <Nav.Link href="#pricing">Edit</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
  </div>
);

export default Navbar;
