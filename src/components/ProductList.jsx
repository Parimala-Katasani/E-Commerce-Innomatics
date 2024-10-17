import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectFilteredProducts } from '../redux/productSlice';
import ProductCard from './ProductCard';
import Search from './Search';
import '../App.css'

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
    <Search />
    <div className="product-list">  
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default ProductList;
