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
            and working towards my first software engineering role. I started on
            this expedition when I first went to college at the University of
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
            The Army didn't instantly aid my developer journey, and I spent the
            little free time I had researching as much as I could about software
            development, as well as slowly working towards my Computer Science
            degree. Now, transitioning out of the military with a family, 90
            credits towards my Bachelor's degree completed, and attending an
            amazing boot camp, Code Platoon, I find myself very appreciative of
            everything I have gained over the past 6 years.
          </p>
        </Row>
        <br />
        <Row>
          <p>
            Problem-solving is the backbone of what I have done and will
            continue to do every day. Whether it was engineering a way to repair
            a critical helicopter component, or now studying and implementing
            complex algorithms and data structures, my work has always involved
            a great deal of critical thinking. I take great pride and joy in
            considering myself a life-long learner because of this, and continue
            to study and implement the highest-quality, most efficient solutions
            in everything I do.
          </p>
        </Row>
        <br />
        <Row>
          <h1 className="text-3xl">Notable Accomplishments</h1>
          <ul>
            <li></li>
          </ul>
        </Row>
      </Container>
    </>
  );
};

export default About;
