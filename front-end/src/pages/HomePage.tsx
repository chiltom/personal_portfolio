import { ReactNode } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/IMG_0439.jpg";
import image2 from "../assets/IMG_0672.jpg.jpeg";

const HomePage = (): ReactNode => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src={image1}
            alt="Picture of me and Bailey"
            style={{ width: "400px", height: "400px" }}
          />
          <Carousel.Caption>
            <h3>My Wonderful Family</h3>
            <p>My wife, Bailey</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image2}
            alt="Me"
            style={{ width: "400px", height: "400px" }}
          />
          <Carousel.Caption>
            <h3>Me</h3>
            <p>A little bit about me</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomePage;
