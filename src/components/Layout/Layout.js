import React from "react";
import Header from "../Header/Header";
import Products from "../products/Products";
import "./Layout.css";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../CartItems/CartItems";
import { cartAction } from "../../store/cart-slice";
// import CartItems from "@/CartItems";
const Layout = () => {
  const dispatch = useDispatch();
  let total = 0;
  const ItemList = useSelector(state => state.cart.itemsList)
  ItemList.forEach(item => {
    total += item.totalPrice
  });
  const placeOrder = ()=>{
        dispatch(cartAction.setPlaceOrder())
  }
  const showCart = useSelector((state) => state.cart.showCart)
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        {/* <CartIt/> */}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button onClick={placeOrder} className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
