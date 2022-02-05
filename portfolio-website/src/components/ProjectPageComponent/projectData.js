import pricingImage from './images/Pricing.jpg';
import weatherImage from './images/Weather.jpeg';
import columnImage from './images/Blocks.jpg';
import filterImage from './images/Filter.jpg';
import topPricingImage from './images/pricing-component-annually-screenshot.png'

export const projects = {
  pricing: {
    title: 'CSS, HTML, JavaScript Component with Toggle',
    description: '',
    topPricingImage:topPricingImage,
    image: pricingImage,
  },
  weather: {
    description: 'React API Weather App',
    image: weatherImage,
  },
  users: {
    description: 'React API Users App',
    image:filterImage,
  },
  column:{
    description: 'CSS, HTML 3 Column Preview Component',
    image:columnImage
  }
};

