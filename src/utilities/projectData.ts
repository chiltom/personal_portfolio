import discloneLogo from '@assets/disclone-logo.jpeg';
import avnWxHubLogo from '@assets/avn-wx-hub-logo.webp';

export interface Project {
  title: string;
  description: string;
  thumbnail?: string;
  repository: string;
  siteLink?: string;
}

export const projects: Project[] = [
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
