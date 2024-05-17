import { TabTitle } from "@src/utilities/documentUtilities";
import { ReactElement } from "react";

const About: React.FC = (): ReactElement => {
  TabTitle("Tom Childress - About");

  return <h1>About</h1>;
};

export default About;
