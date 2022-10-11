import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          {this.props.products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              selectProductDetail={this.props.productDetail}
              selectProductCart ={this.props.productCart}
            />
          ))}
        </div>
      </div>
    );
  }
}