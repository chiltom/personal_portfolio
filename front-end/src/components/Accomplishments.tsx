import { ReactNode } from "react";

const Accomplishments = (): ReactNode => {
  return (
    <>
      <h1 className="text-3xl">Accomplishments</h1>
      <br />
      <div>
        <ul className="ml-4">
          <li className="m-2">
            Attended the Code Platoon 15-Week Full-Stack Immersive Program;
            studied Django, DRF and Object-Relational Mapping, React.js, SQL,
            PostgreSQL, Agile Methodologies, Test-Driven Development, Git,
            GitHub.
          </li>
          <li className="m-2">
            Developed and maintained the top non-destructive inspection program
            in my brigade; received an achievement medal and evaluated a team of
            5 Soldiers that performed over 800 hours of inspections and ensured
            the safety of over $4M of parts.
          </li>
          <li className="m-2">
            Served 6 years in the Army as an aircraft technician supervisor; led
            and mentored a team of 5 Soldiers, performed over 2560 hours of
            preventative maintenance, and completed over 600 different work
            orders for a fleet of 38 aircraft.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Accomplishments;
