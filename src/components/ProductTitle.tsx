import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export const ProductTitle = ({ className }: { className?: string }) => {
  const { product } = useContext(ProductContext);
  const { title } = product;

  return (
    <span className={`${styles.productDescription} ${className}`}>{title}</span>
  );
};
