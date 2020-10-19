export default (state, action)=>{
    switch(action.type){
        case 'DEL_TR':
            return{
                ...state,
                transaction:state.transaction.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TR':
            return{
                ...state,
                transaction:[action.payload, ...state.transaction]
            }
        default:
            return state;
    }
}