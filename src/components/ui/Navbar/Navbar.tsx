import React from "react";
import styles from "./Navbar.module.css";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
interface INavbarProps {
  parentStyle?: React.CSSProperties;
}

const Navbar: React.FC<INavbarProps> = ({
  parentStyle,
}) => {
  return (
    <div className={styles.Navbar} style={parentStyle} data-testid="Navbar">
      <NavBar bg="dark" data-bs-theme="dark">
        <Container>
          <NavBar.Brand href="#home">Home</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Thumbnail</Nav.Link>
            <Nav.Link href="#features">new</Nav.Link>
            <Nav.Link href="#pricing">Edit:1</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
