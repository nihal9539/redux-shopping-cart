import {createSlice} from "@reduxjs/toolkit"



const cartSlice = createSlice({
    name:"cart",
    initialState:{
        itemsList:[],
        totalQuantity:0,
        showCart:false
    },
    reducers:{
        addToCart(state,action){
            const newItem=action.payload;
            //to check if the item alreadt there
            const existingItem = state.itemsList.find((item)=> item.id === newItem.id)
            if (existingItem) {
                existingItem.quantity++;
                existingItem.price += newItem.price
            }
        },
        removeFromCart(){},
        showCart(state){
            state.showCart=!state.showCart
        }
    }

})