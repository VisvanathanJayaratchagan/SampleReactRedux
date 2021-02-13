import './App.css';
import store from './Store/store'
import {personPayload,gamePayload,userPayload} from './Store/actions'
import {connect} from 'react-redux'
function personUpdate(){
  console.log(personPayload+"  triggered")
  store.dispatch(personPayload)
}
let gameUpdate=()=>{
  store.dispatch(gamePayload)
}
function App(props) {
  console.log(props)
  return (
    <div className="App">
     <h1>Redux Tutorial</h1>
     {/* Person Name:  {store.getState().person.name} <button onClick={personUpdate}> person update</button>
<br/>
Game Name:  {store.getState().game.name} <button onClick={gameUpdate}>Game update</button> */}
Person Name:  {props.person.name} <button onClick={props.personUpdate}> person update</button>
<br/>
Game Name:  {props.game.name} <button onClick={props.gameUpdate}>Game update</button>
<br/>
User List:  <button onClick={props.userFetch}> Fetch User</button> {  props.user.length==0?<p>No user found</p>:
props.user.map((user)=><p>user.id} -- {user.first_name}  -- Email:  {user.email}</p>)}
    </div>
  );
}
const mapStatetoProps=(state)=>{
return {game:state.game,
person:state.person,
user:state.user}

}
const mapDispatchToProps=(dispatch)=>{
return {
  gameUpdate:()=>{
    dispatch(gamePayload)
  },
  personUpdate:()=>{
    dispatch(personPayload)
  },
  userFetch:()=>{
    dispatch(userPayload)
  }
}
}
export default connect(mapStatetoProps,mapDispatchToProps)(App);
