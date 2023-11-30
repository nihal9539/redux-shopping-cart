import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartAction } from "./../store/cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const decrementCartItem = () => {
    dispatch(cartAction.removeFromCart(id));
  };
  const incrementCartItem = () => {
    dispatch(
      cartAction.addToCart({
        id,
        name,
        price,
      })
    );
  };
  // const incrementCartItem = ()=>{}
  // const decrementCartItem = ()=>{}
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementCartItem}>- </button>
      <button className="cart-actions" onClick={incrementCartItem}>+</button>
    </div>
  );
};

export default CartItem;
