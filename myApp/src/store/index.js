//引入store
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers'
// const initState={
//     currentUser:{},
//     showMenu:true
// }
/*
reducer必须为纯函数
dispatch({type:'changeUser',user})
dispatch({type:'changeMenu'})
*/
// const reducer = function(state=initState,action){
//     // console.log('reducer=',state,action);
//     switch(action.type){
//         case 'login':
//         return{
//             ...state,
//             currentUser:action.user
//         }
//         case 'logout':
//             return{
//                 ...state,
//                 currentUser:{}
//             }
//         case 'showmenu':
//             return{
//                 ...state,
//                 showMenu:action.show
//             }
//         default:
//             return state       
//     }
// }
import mysaga from './saga'
//引入1、saga
import createSagaMIddleware from 'redux-saga'
//2、创建saga中间件
const sagaMIddleware=createSagaMIddleware()
//创建一个仓库===>3、把 saga中间件与store进行结合
const enhancer=applyMiddleware(sagaMIddleware)
const store =createStore(reducer,enhancer)
//4、运行saga配置
sagaMIddleware.run(mysaga)
export default store