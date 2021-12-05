import React from 'react';
import styles from './productList.module.css';
import Product from '../ProductComponent/Product';
import { products } from '../../data';

export default function ProductList() {
  return (
    <div className={styles.productList}>
      <div className={styles.productListText}>
        <h1 className={styles.productListTitle}>Create & inspire. It's Lama</h1>
        <p className={styles.productListDescription}>
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className={styles.productList}>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}
