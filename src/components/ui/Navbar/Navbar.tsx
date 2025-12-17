import React from "react";
import styles from "./Navbar.module.css";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router";
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
          <Link className="navbar-brand" to="/">Home</Link>
          <Nav className="me-auto">
            <Link className="nav-link" to="/thumbnail">Thumbnail</Link>
            <Link  className="nav-link" to="/editor">new</Link>
            <Link  className="nav-link" to="/editor/1">Edit:1</Link>
            <Link  className="nav-link" to="/editor/2">Edit:2</Link>
            <Link  className="nav-link" to="/editor/123">Edit:123</Link>
            <Link  className="nav-link" to="/editor/1a">Edit:1a</Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
