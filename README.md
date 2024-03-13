# My Personal Site

My personal portfolio site to link specific projects, display skills, and give contact information and my resume.

## Homepage

- Hero image/text, hook for attention (Carousel w/ bootstrap?)

## About Page

- Contact Information (Incoming)
- Social Links (Incoming)
  - Email
  - LinkedIn
  - GitHub

## Projects Page

- Project Links to deployed and not deployed projects (cards?)

## Dependencies

- Install tailwindcss, postcss, autoprefixer
  - Setup config file by running command npx tailwind init -p in shell
  - Specify in config file the files that will have tailwind applied
  - Add required media lines in index.css
- Install axios
- Install cypress
  - Setup config files with npx cypress open and accepting defaults
  - Add baseUrl and supportFile values to e2e object
  - Set viewport width and height and video to false if you wish
- Install react-bootstrap and bootstrap
  - Import minified css file into main.tsx
- Install react-router-dom
  - Configure a router file to specify all children under App.tsx
  - Configure main.tsx to render the RouterProvider
  - Configure App.tsx to render the Outlet component
