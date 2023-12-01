import { createSlice } from "@reduxjs/toolkit"
import { uiAction } from "./ui-slice";



const cartSlice = createSlice({
    name: "cartsdfg",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
        changed : false
    },
    reducers: {
        replaceData(state,action){
            state.totalQuantity = action.payload
            state.itemsList = action.payload.itemsList
        },
        addToCart(state, action) {
            state.changed = true
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
            state.changed = true
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


export const cartAction = cartSlice.actions;


export default cartSlice;