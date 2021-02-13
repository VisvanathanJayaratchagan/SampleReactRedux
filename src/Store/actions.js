
import store from './store'



let personPayload={type:'NAME_PERSON',payload:'Vijay'}
let gamePayload={type:'UPDATE_GAME',payload:'coading'};
let userPayload=(dispatch)=>{
fetch('https://reqres.in/api/users')
.then((req)=> req.json())
.then((req)=> dispatch({type:"UPDATE_USER",payload:req.data}))
}
// store.dispatch()


// store.dispatch({type:'UPDATE_GAME',payload:'Cricket'})


export {personPayload,gamePayload,userPayload}