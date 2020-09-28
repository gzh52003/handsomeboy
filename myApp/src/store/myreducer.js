export const createStore=function(reducer){
    let state=reducer()
    let listeners=[]
    const getState=function(){
        return state
    }
    const dispatch=function(action){
        state=reducer(state,action)
        listeners.forEach(listener=>listener())
    }
    const subscribe=function(fn){
        listeners.push(fn)
    }
    //替换
    const replaceReducer=function(newReducer){
        reducer=newReducer
    }
    return{
        getState,
        dispatch,
        subscribe,
        replaceReducer
    }
}