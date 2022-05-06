import { CSSProperties } from 'react';

export interface ProductCardProps {
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: (args: onChangeArg) => void;
  value?: number;
  initialValues?: InitialValues;
}

export interface Product {
  id: number;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export interface onChangeArg {
  product: Product;
  count: number;
}

export interface useProductArgs {
  product: Product;
  onChange?: (arg: onChangeArg) => void;
  value?: number;
  initialValues?: InitialValues;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
