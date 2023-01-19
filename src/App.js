import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
function App(props) {
  // const winner = ""
  // if (props.win.win1){
  //   winner ="win joueur1"
  // }else if(props.win.win2){
  //   winner ="win joueur2"
  // }
  return (
    <div className="App">
      <div>
      <p> {(props.pause ? "pause" :  `le Score est : ${props.joueur1}.${props.joueur2}`)}</p>
      </div>
      <div>
        <button onClick={props.Point1}>Point joueur 1</button>
        <button onClick={props.Point2}>Point joueur 2</button>
      </div>
      <div>
        <button onClick={props.Reset}>Remettre a zero</button>
        <button onClick={props.Pause_Reprendre}>pause/reprendre</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
      joueur1: state.joueur1,
      joueur2 : state.joueur2,
      pause : state.pause,
      // win :{
      // win1 : state.win1,
      // win2 : state.win2}
    }
  }
  
const mapDispatchToProps=(dispatch)=>{
    return{
      Point1:()=>dispatch({type : "Point1"}),
      Point2:()=>dispatch({type : "Point2"}),
      Reset:()=>dispatch(({type : "Reset"})),
      Pause_Reprendre:()=>dispatch(({type: "Pause_Reprendre"}))
    }
  }
export default connect( mapStateToProps ,mapDispatchToProps) (App);