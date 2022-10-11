import React from "react";

const ProductItem = ({ product,selectProductDetail,selectProductCart }) => {
  return (
    <div className="col-sm-3 mb-3">
      <div className="card">
        <img
          className="card-img-top"
          src={product.image}
          alt={product.name}
        />
        <div className="card-body">
          <h4 className="card-title">
            {product.name}
          </h4>
          <p className="card-text text-danger">
            {product.price} $
          </p>
          <button className="btn btn-success me-3" onClick={() => selectProductDetail(product)}>Detail</button>
          <button className="btn btn-dark" onClick={() => selectProductCart(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;