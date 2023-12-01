import { createSlice } from "@reduxjs/toolkit"
import { uiAction } from "./ui-slice";



const cartSlice = createSlice({
    name: "cartsdfg",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            //to check if the item alreadt there
            const existingItem = state.itemsList.find((item) => item.id === newItem.id)
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
                state.totalQuantity++
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItems = state.itemsList.find((item) => item.id === id)
            if (existingItems.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                state.totalQuantity--
            } else {
                existingItems.quantity--;
                state.totalQuantity--;
                existingItems.totalPrice -= existingItems.price;
            }
        },
        setShowCart(state) {
            state.showCart = !state.showCart
        }
    },
})

export const sendCatData = (cart) => {
    return  async (dispatch) => {
        
        dispatch(uiAction.showNotification(
            {
                open: true,
                message: "Sending reuest",
                type: 'warning'
            }
        ));
            const sendRequest =async  () => {
                //send state as sending request
                
                const res = await fetch('https://redux-shoping-test-default-rtdb.firebaseio.com/cartItems.json',
                    {
                        method: "PUT",
                        body: JSON.stringify(cart)
                    }
                );
                const data = await res.json();
                // console.log(data);
                //send state as reuest is sucessfull
                dispatch(uiAction.showNotification(
                    {
                        open: true,
                        message: "Sent request to database",
                        type: 'success'
                    },
                    
                ))
            }
            try{
                await sendRequest();
            }catch (err){
                dispatch
            (uiAction.showNotification(
                {
                    open: true,
                    message: "Sending reuest failed",
                    type: 'error'
                }
            ));
            }
            
    }
}
export const cartAction = cartSlice.actions;


export default cartSlice;