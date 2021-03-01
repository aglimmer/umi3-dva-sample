import React from 'react';
import { connect } from 'dva';
import ProductList from './productList';
import { Dispatch } from 'umi';
// import ProductProps from "./product"

const Products=({dispatch,products})=>{
// const Products:ProductProps = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);