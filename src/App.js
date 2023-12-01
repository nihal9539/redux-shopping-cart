import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
// import { uiAction } from "./store/ui-slice";
import { cartAction } from "./store/cart-slice";
import { fetchData ,sendCatData} from "./store/cart-actions";

function App() {
  let isFirstRender = true;
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart);
  const notifications = useSelector(state => state.ui);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false
      return;
    }
    if (cart.change) {
      dispatch(sendCatData(cart))
    }
  }, [cart])
  return (
    <div className="App">
      <Notification type={notifications.type} message={notifications.message}/>
      {!isLoggedIn && < Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
