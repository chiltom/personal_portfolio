import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = (): ReactNode => {
  return (
    <>
      <Navbar
        expand="lg"
        className="flex flex-row items-center navbar navbar-dark bg-dark"
      >
        <Navbar.Brand
          as={Link}
          to={"/"}
          className="ml-6 inline-flex items-center text-white"
        >
          Not Tom From MySpace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="me-auto ml-6">
            <Nav.Link
              className="hover:drop-shadow text-white"
              as={Link}
              to={"/about/"}
              id="about-link"
            >
              About
            </Nav.Link>
            <Nav.Link
              className="hover:drop-shadow text-white"
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
