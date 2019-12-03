
const GROCERY_ITEMS = [
    {name:'Iphone',price:1000},
    {name:'Samsung',price:700},
    {name:'One Plus',price:600},
    {name:'Moto',price:400}
]

const cartReducer = (state,action) => {
    if(state === undefined){
        return {
            forSale:GROCERY_ITEMS,
            cart: []
        }
    }
    switch(action.type){
        case 'ADD_TO_CART':
            {
                const cart = [...state.cart,action.item]
                return {
                    ...state,
                    cart
                }
            }
        case 'REMOVE_FROM_CART':
            {
                const cart = [...state.cart]
                cart.splice(action.index,1)
                return {
                    ...state,
                    cart
                }
            }
        default:
            {
                return state
            }        
    }    
    }


export default cartReducer;

