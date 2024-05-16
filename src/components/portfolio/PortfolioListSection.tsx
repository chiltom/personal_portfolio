import { ReactElement } from "react";
import discloneLogo from "@assets/disclone-logo.jpeg";
import avnWxHubLogo from "@assets/avn-wx-hub-logo.webp";

interface Project {
  title: string;
  description: string;
  thumbnail?: string;
  repository: string;
  siteLink?: string;
}

const projects: Project[] = [
  {
    title: "Disclone",
    description: "An Educational Discord Clone",
    thumbnail: discloneLogo,
    repository: "https://github.com/CP-DISCLONE/disclone",
    siteLink: "https://disclone.duckdns.org/",
  },
  {
    title: "The Aviation Weather Hub",
    description: "A Forecaster Workflow Service",
    thumbnail: avnWxHubLogo,
    repository: "https://github.com/chiltom/aviation-weather-hub",
    siteLink: "https://avnwxhub.duckdns.org/",
  },
];

const PortfolioListSection: React.FC = (): ReactElement => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio List</h2>
        {projects.map((project, index) => (
          <a
            href={project.repository}
            key={index}
            className="block p-4 bg-white rounded-lg hover:shadow-xl transition-shadow mb-4"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a
                href={project.siteLink}
                className="block p-4 mt-4 bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center text-white"
              >
                Deployed Site
              </a>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PortfolioListSection;
