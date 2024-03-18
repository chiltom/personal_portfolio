import { ReactNode } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const About = (): ReactNode => {
  return (
    <>
      <Container>
        <Row className="my-8">
          <h1 className="text-4xl">About the Author</h1>
          <br />
        </Row>
        <Row>
          <p>
            Hey! I'm Tom, an Army veteran transitioning back to the real world
            and working towards my first software engineering role. I started my
            coding journey when I first went to college at the University of
            Connecticut, but found myself quickly running out of funds. I saw
            the military had a great tuition assistance program to help pay for
            school while I was in, as well as that sweet GI Bill at the end of
            service. I couldn't foresee what the Army had planned for me, but
            that's a story for another time.
          </p>
        </Row>
        <br />
        <Row>
          <p>
            The Army didn't instantly aid my coding journey, and I spent a lot
            of my free time researching as much as I could about software
            development, as well as slowly working towards my Computer Science
            degree. Now, transitioning out of the military after 6 years with 90
            credits towards my Bachelor's degree completed, and attending an
            amazing boot camp, Code Platoon, that is rounding all of the edges
            and honing my development skills better than I could've imagined, I
            find one detail surprisingly important to my growth that both realms
            shared: problem-solving.
          </p>
        </Row>
      </Container>
    </>
  );
};

export default About;
