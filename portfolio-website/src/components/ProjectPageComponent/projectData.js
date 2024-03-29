import pricingImage from './images/Pricing.avif';
import weatherImage from './images/Weather.jpeg';
import columnImage from './images/Blocks.avif';
import filterImage from './images/Filter.avif';
import slateImage from './images/Slate.avif';
import galaxyImage from './images/Galaxy.avif';
import zayImage from './images/Zay.avif';

export const projects = {
  pricing: {
    title: 'CSS HTML with Toggle Component',
    description:
      'This project was  one of <a href="https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC" target="_blank">Frontend Mentor\'s</a> challenges. I completed this challenge after finishing  Kevin Powell\'s <a href="https://courses.kevinpowell.co/conquering-responsive-layouts" target="_blank">Conquering Responsive Layouts </a> and <a href="https://cssdemystified.com/" target="_blank">CSS Demystified</a> courses.  This project used the following frontend skills: Translation of Figma design into website, Flexbox, HTML, Javascript, CSS custom properties & a mobile-first workflow.',
    image: pricingImage,
    link: 'https://frontend-mentor-pricing-component-with-toggle.netlify.app/',
    github:
      'https://github.com/lblake/Front-End-Projects/tree/main/pricing-component-with-toggle',
  },

  weather: {
    title: 'React Weather API',
    description:
      'This was a self study project on how-to use an API to display weather information. I used OpenWeather <a href="https://openweathermap.org/api/one-call-api" target="_blank">One Call API</a>  endpoint .' +
      ' To display daily and 7 day weather forecast for a users location, using React Hooks (useState, useEffect). ',

    image: weatherImage,
    link: 'https://api-react-weather.netlify.app/',
    github: 'https://github.com/lblake/react-weather-api',
  },

  users: {
    title: 'React API Users App',
    description:
      'This was an app I created to learn how-to use an API to display user information. I used the JSON Placeholder website <a href="https://jsonplaceholder.typicode.com/" target="_blank">users</a>  endpoint and <a href="https://github.com/axios/axios" target="_blank">axios</a>  .' +
      ' To fetch a list of users data and display their information using React Hooks (useState, useEffect, useContex) and  <a href="https://www.npmjs.com/package/react-paginate" target="_blank">React-Paginate</a> to display X number of users per page. You can also use the search bar to filter which user details is displayed. ',
    image: filterImage,
    link: 'https://react-users-api.netlify.app/',
    github: 'https://github.com/lblake/react-api-users',
  },

  column: {
    title: 'CSS HTML Card Component',
    description:
      'This project was one of <a href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-" target="_blank">Frontend Mentor\'s </a> challenges. I completed this challenge after finishing  Kevin Powell\'s <a href="https://courses.kevinpowell.co/conquering-responsive-layouts" target="_blank">Conquering Responsive Layouts </a> and <a href="https://cssdemystified.com/" target="_blank">CSS Demystified</a> courses.  This project used the following frontend skills: Translation of Figma design into website, Flexbox, HTML, CSS custom properties & a mobile-first workflow. ',
    image: columnImage,
    link: 'https://frontend-mentor-3-column-preview-component.netlify.app/',
    github:
      'https://github.com/lblake/Front-End-Projects/tree/main/3-column-preview-card-component',
  },
  slate: {
    title: 'Slate Coffee Beverage Brand Shopify Store',
    description:
      'This store was created using the <a href="https://tinyurl.com/dawn-shopify" target="_blank">Dawn</a> Shopify theme, this theme has a clean & minimalist design. The store was built to include the following features: a "Coffee of the Month" page where customers can purchase the current promoted coffee, shipping and coffee information e.g strength, taste per coffee brand. This theme also has other built-in features such as "Mega menu", "Sticky Headers" & built-in Check-out-cart support. ',
    image: slateImage,
    link: 'https://lloydblake.dev/slate',
    github:
      'https://github.com/lblake/FreeMote-Projects/tree/main/slate-coffee',
  },
  zay: {
    title: 'Zay Yo Fashion Brand Shopify Store',
    description:
      'This fashion store was created using the  <a href="https://tinyurl.com/prestige-shopify" target="_blank">Prestige</a> Shopify theme, this theme has a clean & beautiful design. The store was built to include the following features: a Mega menu for easy browsing of items, "Shop The Look" for top selling items, Collections with advanced filtering. This theme also has other built-in features such as a "Countdown timer", "Colour swatches" & "Stock counter". ',
    image: zayImage,
    link: 'https://lloydblake.dev/zay',
    github: 'https://github.com/lblake/FreeMote-Projects/tree/main/zay-yo',
  },
  galaxy: {
    title: 'Galaxy Box Stars Single Product Shopify Store',
    description:
      'This store was created using the <a href="https://tinyurl.com/dawn-shopify" target="_blank">Dawn </a> Shopify theme, this theme has a clean & minimalist design. The store was built to include the following features: a Wholesale page for customers to enquire about B2B opportunities, affiliate product page to allow the client to add affiliate items as required, an enhanced contact page with a "order number" field.  This theme also has other built-in features such as "Mega menu" & "Sticky Headers". ',
    image: galaxyImage,
    link: 'https://lloydblake.dev/galaxy',
    github: 'https://github.com/lblake/FreeMote-Projects/tree/main/galaxy-box',
  },
};
