import pricingImage from './images/Pricing.jpg';
import weatherImage from './images/Weather.jpeg';
import columnImage from './images/Blocks.jpg';
import filterImage from './images/Filter.jpg';

export const projects = {
  pricing: {
    title: 'CSS HTML with Toggle Component',
    description:
      'This project was  one of <a href="https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC">Frontend Mentor\'s</a> junior challenges. I completed this challenge after finishing  Kevin Powell\'s <a href="https://courses.kevinpowell.co/conquering-responsive-layouts">Conquering Responsive Layouts </a> and <a href="https://cssdemystified.com/">CSS Demystified</a> courses.  This project used the following frontend skills: Translation of Figma design into website, Flexbox, HTML, CSS custom properties and Mobile-first workflow.',
    image: pricingImage,
    link: 'https://frontend-mentor-pricing-component-with-toggle.netlify.app/',
    github:
      'https://github.com/lblake/Front-End-Projects/tree/main/pricing-component-with-toggle',
  },

  weather: {
    title: 'React Weather API',
    description:
      'Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei',
    image: weatherImage,
    link: 'https://api-react-weather.netlify.app/',
    github: 'https://github.com/lblake/react-weather-api',
  },

  users: {
    title: 'React API Users App',
    description:
      'This was a self study project on how-to use an API to display user information. I used JSON Placeholder website <a href="https://jsonplaceholder.typicode.com/">users</a>  endpoint and <a href="https://github.com/axios/axios">axios</a>  .'+
      ' To fetch a list of users data and display their information using React Hooks (useState, useEffect, useContex) and  <a href="https://www.npmjs.com/package/react-paginate">React-Paginate</a> to display X number of users per page. ',
    image: filterImage,
    link: 'https://react-users-api.netlify.app/',
    github: 'https://github.com/lblake/react-api-users',
  },

  column: {
    title: 'CSS HTML Card Component',
    description:
      'This project was one of <a href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-">Frontend Mentor\'s</a> newbie challenges. I completed this challenge after finishing  Kevin Powell\'s <a href="https://courses.kevinpowell.co/conquering-responsive-layouts">Conquering Responsive Layouts </a> and <a href="https://cssdemystified.com/">CSS Demystified</a> courses.  This project used the following frontend skills: Translation of Figma design into website, Flexbox, HTML, CSS custom properties and Mobile-first workflow. ',
    image: columnImage,
    link: 'https://frontend-mentor-3-column-preview-component.netlify.app/',
    github:
      'https://github.com/lblake/Front-End-Projects/tree/main/3-column-preview-card-component',
  },
};
