

const nameReducer=(state={},{type,payload})=>{
    console.log(state)
    if(type==="NAME_PERSON"){
      return object.assign({},state,{name:payload})
    }
  
      return state
    } 
    const gameReducer=(state={},{type,payload})=>{
        console.log(state)
    if(type==="UPDATE_GAME"){
      return {name:payload}
    }
    return state;
    }
    const userReducer=(state=[],{type,payload})=>{
      if(type=="UPDATE_USER"){
        return payload;
      }
      return state
    }

    export {nameReducer,gameReducer,userReducer}