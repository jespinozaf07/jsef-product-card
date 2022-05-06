import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ className }: { className?: string }) => {
  const { product } = useContext(ProductContext);

  const { img, title } = product;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={img ? img : noImage}
      alt={title}
    />
  );
};
