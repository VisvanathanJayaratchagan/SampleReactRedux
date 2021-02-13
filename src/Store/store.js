import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
 import {gameReducer,nameReducer,userReducer} from './reducer'
import thunk from 'redux-thunk';

const AllReducer=combineReducers({person:nameReducer,game:gameReducer,user:userReducer})
const initlizeState={person:{name:'vishwa'},game:{name:'Cricket'},user:[]};
let middleware=[thunk]
const store =createStore(AllReducer,initlizeState,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;