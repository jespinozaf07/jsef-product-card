import React from 'react';
import renderer from 'react-test-renderer';
import {
  ProductTitle,
  ProductImage,
  ProductButtons,
  ProductCard,
} from '../../src/components';
import { product2 } from '../data/products';

describe('ProductCard', () => {
  test('debe de mostrar el componente correctamente', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {({ count, increaseBy }) => (
          <>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
      (tree as any).children[1].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[0].children[0]).toBe('1');
  });
});
