import React from 'react';
import styles from './productList.module.css';
import Product from '../ProductComponent/Product';
import { products } from '../../data';

export default function ProductList() {
  return (
    <div id="projects" className={styles.product}>
      <div className={styles.productListText}>
        <h1 className={styles.productListTitle}>Create & Inspire</h1>
        <p className={styles.productListDescription}>
          Below includes Shopify stores & websites I've built{' '}
          <span>(click to "Learn More")</span>
        </p>
      </div>
      <div className={styles.productList}>
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
