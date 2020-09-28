const initState={
    goodslist:[],
    totalPrice:0
}
function reducer(state=initState,action){
    switch(action.type){
        case 'add_to_cart':
            return{
                ...state,
                goodslist:[action.goods,...state.goodslist]
            }
        case 'remove_from_cart':
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item.id!==action.id)
            }
        case 'clear_cart':
            return{
                goodslist:[]
            }
        default:
            return state            
    }
}
export default reducer