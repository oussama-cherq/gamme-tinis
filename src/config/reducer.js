const initaileState = {joueur1 :0, joueur2: 0 ,pause : false}
const reducer = (state = initaileState, action)=>{
    switch (action.type){
        case "Point1":
            return state.joueur1>=30? {...state, joueur1 : state.joueur1 + 10}:{...state, joueur1 : state.joueur1 + 15, win1 : true}
        case "Point2":
            return state.joueur2>=30? {...state, joueur2 : state.joueur2 + 10}:{...state, joueur2 : state.joueur2 + 15,win2 : true}
        case "Reset":
            return {...state, joueur1 : 0, joueur2 : 0 , win1: 0, win2: 0}
        case "Pause_Reprendre":
            return {...state, pause : !state.pause }
        default :
        return state
    }
}
export default reducer