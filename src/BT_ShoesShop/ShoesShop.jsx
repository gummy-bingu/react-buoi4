import React, { Component } from 'react';
import data from './data.json';
import ProductList from './ProductList';
import ModalDetail from './ModalDetail';
import Cart from './Cart';


export default class ShoesShop extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        contentDetail: null,

        //Carts
        isOpenCart : false,
        carts: [],
        total: 0,
      }
    }

    // Modal Detail
    handleContentDetail = (product) => {
        this.setState({contentDetail : product})
    }
    handleToggleModalDetail = () =>{
        this.setState({contentDetail: null});
    }


    //Modal Cart
    // isOpenModelCart
    handleToggleCart = () => {
      this.setState((state) => ({
        isOpenCart: !state.isOpenCart
      }))
    }
    
    // Add Product Carts
    handleAddCart = (product) =>{
      const index = this.state.carts.findIndex(item => item.id === product.id)

      if(index === -1){
        this.setState((state) => ({
          carts: [...state.carts,{...product,quantity : 1}]
      }))}else{
        const newCarts = [...this.state.carts];
        newCarts[index].quantity += 1;
        this.setState({carts: newCarts});
      }

      this.calcTotal();
      
    }
    
    // HandleQuantity
    handleChangeQuantity = (productId, number) =>{
      const index = this.state.carts.findIndex(item => item.id === productId)

      const newCarts = [...this.state.carts];

      if(number === -1 && newCarts[index].quantity === 1){

      
        const filterCarts = this.state.carts.filter(item => item.id !== newCarts[index].id)
        this.setState({carts: filterCarts})
      }else{
        newCarts[index].quantity += number;
        this.setState({carts: newCarts});
      }

      this.calcTotal();

    }


    calcTotal = () => (
      this.setState((state) =>({
          total: state.carts.reduce((result,item) => {
            return result + (item.price * item.quantity)
          },0)
        })
      )
    )
    
    // Thanh toán
    paymentCart = () => {
      this.setState({
        carts: [],
        total: 0,
      })
    }
    


  render() {
    return (
      <div>
        <div id='header' className='container'>
            <h1 className='text-center p-3 mb-4 '>ShoesShop</h1>
            <i onClick={this.handleToggleCart} className="fa-solid fa-cart-shopping"></i>
        </div>

        <ProductList
         products={data}
         productDetail={this.handleContentDetail}
         productCart={this.handleAddCart}
         />

        <ModalDetail content={this.state.contentDetail} onClose={this.handleToggleModalDetail} />

        <Cart
         isOpen={this.state.isOpenCart}
         onClose={this.handleToggleCart}
         carts={this.state.carts} 
         onChangeQuantity={this.handleChangeQuantity}
         calcTotal= {this.state.total}
         payment={this.paymentCart}
         />
      </div>
    )
  };
};
