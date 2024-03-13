import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = (): ReactNode => {
  return (
    <>
      <Navbar expand="lg" className="bg-gray-400 flex flex-row items-center">
        <Navbar.Brand
          as={Link}
          to={"/"}
          className="ml-6 inline-flex items-center"
        >
          Not Tom From MySpace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ml-6">
            <Nav.Link
              className="hover:drop-shadow"
              as={Link}
              to={"/about/"}
              id="about-link"
            >
              About
            </Nav.Link>
            <Nav.Link
              className="hover:drop-shadow"
              as={Link}
              to={"/projects/"}
              id="projects-link"
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
