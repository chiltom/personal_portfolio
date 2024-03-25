import { ReactNode } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import img1 from "../assets/1704.jpg";
import img2 from "../assets/1753.jpg";
import img3 from "../assets/2973.jpeg";

const HomeCarousel = (): ReactNode => {
  return (
    <>
      <Carousel className="mt-2">
        <Carousel.Item>
          <Container
            style={{ width: "800px", height: "400px" }}
            className="flex flex-col items-center"
          >
            <img
              src={img1}
              alt="Christmas Market Picture"
              style={{ width: "400px", height: "300px" }}
            />
          </Container>
          <Carousel.Caption>
            <h3>Kinderweinacht</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container
            style={{ width: "800px", height: "400px" }}
            className="flex flex-col items-center"
          >
            <img
              src={img2}
              alt="The Swiss Alps"
              style={{ width: "400px", height: "300px" }}
            />
          </Container>
          <Carousel.Caption>
            <h3>The Swiss Alps</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container
            style={{ width: "800px", height: "400px" }}
            className="flex flex-col items-center"
          >
            <img
              src={img3}
              alt="Southern Germany"
              style={{ width: "400px", height: "300px" }}
            />
          </Container>
          <Carousel.Caption>
            <h3>Military Time</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
