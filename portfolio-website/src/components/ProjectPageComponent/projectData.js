import pricingImage from './images/Pricing.jpg';
import weatherImage from './images/Weather.jpeg';
import columnImage from './images/Blocks.jpg';
import filterImage from './images/Filter.jpg';


export const projects = {
  pricing: {
    title: 'CSS HTML with Toggle',
    description:
      'Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei',
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
      'Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei',
    image: filterImage,
    link: 'https://react-users-api.netlify.app/',
    github: 'https://github.com/lblake/react-api-users',
  },

  column: {
    title: 'CSS HTML Card Component',
    description:
      'This project was one of the Frontendmentor newbie challenges. I choose this challenge after completing Kevin Powells Conquering Responsive Layouts and CSS Demystified course.  This project was completed using the following frontend skills: Translation of Figma design into website, Flexbox, HTML, CSS custom properties and Mobile-first workflow. ',
    image: columnImage,
    link: 'https://frontend-mentor-3-column-preview-component.netlify.app/',
    github:
      'https://github.com/lblake/Front-End-Projects/tree/main/3-column-preview-card-component',
  },
};
