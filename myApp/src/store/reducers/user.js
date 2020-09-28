let currentUser =localStorage.getItem('currentUser')
try{
    currentUser=JSON.parse(currentUser)||{}
}catch(err){
    currentUser={}
}
const initState={
    ...currentUser
}
function reducer(state=initState,action){
    console.log('action',action);
    switch(action.type){
        case 'login':
            localStorage.setItem('currentUser',JSON.stringify(action.user))
            return action.user
        case 'logout':
            localStorage.removeItem('currentUser')
            return {}
        case 'update_user':
            return {
                ...state,
                ...action.user
            }
        default:
            return state            
    }
}
export default reducer