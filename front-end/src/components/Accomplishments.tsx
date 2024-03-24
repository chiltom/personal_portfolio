import { ReactNode } from "react";

const Accomplishments = (): ReactNode => {
  return (
    <>
      <h1 className="text-3xl">Accomplishments</h1>
      <br />
      <div>
        <ul className="ml-4">
          <li className="m-2">
            Developed and maintained the top non-destructive inspection program
            in my brigade; received an achievement medal and evaluated a team of
            5 Soldiers that performed over 800 hours of inspections and ensured
            the safety of over $4M of parts.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Accomplishments;
