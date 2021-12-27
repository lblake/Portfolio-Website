import React from 'react';
import styles from './productList.module.css';
import Product from '../ProductComponent/Product';
import { products } from '../../data';

export default function ProductList() {
  return (
    <div className={styles.product}>
      <div className={styles.productListText}>
        <h1 className={styles.productListTitle}>Create & inspire. {/*It's Lama*/}</h1>
        <p className={styles.productListDescription}>
          Below are some of the projects that I have completed.
          {/* Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside. */}
        </p>
      </div>
      <div className={styles.productList}>
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.description}
          />
        ))}
      </div>
      
    </div>
  );
}
