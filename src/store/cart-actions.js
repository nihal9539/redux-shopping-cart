import { cartAction } from "./cart-slice";
import { uiAction } from "./ui-slice";



export const fetchData = ()=>{
    return async (dispatch)=>{
        
        const fetchHandler = async ()=>{
            const res = await fetch ('https://redux-shoping-test-default-rtdb.firebaseio.com/cartItems.json')
            const data = await res.json()
            return data;
        }
        try {
            const cartData = await fetchHandler();
            dispatch(cartAction.replaceData(cartData))
        }catch (err){
            console.log(err);
        }
    }
}

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