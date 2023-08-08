import React from 'react';
import styles from './services.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.servicesTitle}>Shopify Services</h1>
      <div data-tooltip-id='store-tooltip' className={styles.services} data-event='mouseenter'>
        {' '}
        Complete Store Setup{'  '}&#9432;{' '}
      </div>
      <div data-tooltip-id='migration-tooltip' className={styles.services} data-event='mouseenter'>
        Store Migrations{'  '}&#9432;
      </div>
      <div data-tooltip-id='app-tooltip' className={styles.services} data-event='mouseenter'>
        App Integrations{'  '}&#9432;
      </div>
      <div data-tooltip-id='theme-tooltip' className={styles.services} data-event='mouseenter'>
        Custom Themes{'  '}&#9432;
      </div>

      <ReactTooltip
        id='store-tooltip'
        delayShow={300}
        style={{
          backgroundColor: 'rgb(67,125,203)',
          borderRadius: '5px',
        }}
      >
        <div>
          <ul className={styles.tooltip}>
            <li>Store Design</li>
            <li>Adding Products</li>
            <li>Store Development</li>
            <li>Setting Up Payments etc</li>
          </ul>
        </div>
      </ReactTooltip>

      <ReactTooltip
        id='migration-tooltip'
        delayShow={300}
        style={{
          backgroundColor: 'rgb(67,125,203)',
          borderRadius: '5px',
        }}
      >
        <div>
          <ul className={styles.tooltip}>
            <li>Migrate Orders</li>
            <li>Migrate Products</li>
            <li>Migrate Customers</li>
            <li>Migrate WooCommerce Stores etc</li>
          </ul>
        </div>
      </ReactTooltip>

      <ReactTooltip
        id='app-tooltip'
        delayShow={300}
        style={{
          backgroundColor: 'rgb(67,125,203)',
          borderRadius: '5px',
        }}
      >
        <div>
          <ul className={styles.tooltip}>
            <li>Trust Badges</li>
            <li>Product Reviews</li>
            <li>Cart Modification</li>
            <li>Inventory Management etc</li>
            
            
          </ul>
        </div>
      </ReactTooltip>

      <ReactTooltip
        id='theme-tooltip'
        delayShow={500}
        style={{
          backgroundColor: 'rgb(67,125,203)',
          borderRadius: '5px',
        }}
      >
        <div>
          <ul className={styles.tooltip}>
            <li>Custom Coding of Sections</li>
            <li>Theme Installation & Setup</li>
            <li>Product Page Customization</li>
            <li>Collection Page Customization etc</li>
          </ul>
        </div>
      </ReactTooltip>
    </div>
  );
}

export default Services;
