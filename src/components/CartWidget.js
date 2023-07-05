import React from 'react';
import cartIcon from '../icons/cart-icon.svg';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Cart" className="img-fluid" style={{ width: '30px', height: '30px' }} />
      <span className="badge badge-danger">5</span>
    </div>
  );
};

export default CartWidget;