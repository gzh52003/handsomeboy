import {combineReducers} from 'redux'
import cartReducer from './cart'
import userReducer from './user'
import commonReducer from './common'
const reducer=combineReducers({
    cart:cartReducer,
    user:userReducer,
    common:commonReducer
})
export default reducer