export default (state, action) => {

   switch(action.type){

      case "UPDATE_JUMP_MOVE":
      return {
         ...state,
         [action.start]: 0,
         [action.stop]: action.currentPiece,
         [action.jumpedSquare]: 0
      }

      case "UPDATE_SINGLE_MOVE":
      return {
         ...state,
         [action.start]: 0,
         [action.stop]: action.currentPiece,
         currentTurn: action.currentTurn
      }

      case "UPDATE_START":
      return {
         ...state,
         start: action.start
      }

      case "UPDATE_STOP":
      return {
         ...state,
         stop: action.stop
      }

      default:
      return state
   }
}