import { store } from "../redux/store"
import { updateJumpMove, updateSingleMove } from "../redux/actions"

function isLegalMove() {

   const { currentTurn, start, stop } = store.getState()
   // console.log("isLegalMove currentTurn is", currentTurn)
   const { [start]: currentPiece } = store.getState()

   if(currentPiece !== currentTurn){ return false }

   // console.log("In isLegalMove, start is", start, "and stop is", stop)
   // console.log("In isLegalMove, currentPiece is", currentPiece)

   switch (start) {

      // START
      case "r6c2":
         switch (stop) {
            // STOP
            case "r5c3":
               var { "r5c3": checkPos } = store.getState()
               if ( (currentPiece === "🔴" || currentPiece === "⚫️K") && !checkPos ) {
                  store.dispatch(updateSingleMove(currentPiece, start, stop))
                  return true
               } else {
                  return false
               }

            // STOP
            case "r5c1":
               var { "r5c1": checkPos } = store.getState()
               if ( (currentPiece === "🔴" || currentPiece === "⚫️K") && stop === "r5c1" && !checkPos ) {
                  store.dispatch(updateSingleMove(currentPiece, start, stop))
                  return true
               } else {
                  return false
               }

            default:
               break
         }
         break

      // START
      case "r3c3":
         switch (stop) {
            // STOP
            case "r5c5":
               break

            // STOP
            case "r5c1":
               break

            // STOP
            case "r4c4":
               break

            // STOP
            case "r4c2":
               break

            // STOP
            case "r2c4":
               break

            // STOP
            case "r2c2":
               break

            // STOP
            case "r1c3":
               break

            // STOP
            case "r1c1":
               break

            default:
               break
         }
         break

      // START
      case "r3c1":
         switch (stop) {

            // STOP
            case "r5c3":
               var { "r5c3": checkPos, "r4c2": pieceBeingJumped } = store.getState()
               if ( (currentPiece === "⚫️" || currentPiece === "🔴K") && 
                  !checkPos &&
                  pieceBeingJumped &&
                  pieceBeingJumped !== currentPiece ) {
                  store.dispatch(updateJumpMove(currentPiece, "r4c2", start, stop))
                  return true
               } else {
                  return false
               }

            // STOP
            case "r4c2":
               var { "r4c2": checkPos } = store.getState()
               // console.log("isLegalMove checkPos for r4c2", checkPos)
               if ( (currentPiece === "⚫️" || currentPiece === "🔴K") && 
                  !checkPos ) {
                  store.dispatch(updateSingleMove(currentPiece, start, stop))
                  return true
               } else {
                  return false
               }

            default:
               break
         }
         break

      // START
      case "r1c3":
         switch (stop) {
            // STOP
            case "r3c5":
               break

            // STOP
            case "r3c1":
               break

            // STOP
            case "r2c4":
               break

            // STOP
            case "r2c2":
               break

            default:
               break
         }
         break

      // START
      case "r1c1":
         switch (stop) {
            // STOP
            case "r3c3":
               break

            // STOP
            case "r2c2":
               var { "r2c2": checkPos } = store.getState()
               if ( (currentPiece === "⚫️" || currentPiece === "🔴K") && !checkPos ) {
                  store.dispatch(updateSingleMove(currentPiece, start, stop))
                  return true
               } else {
                  return false
               }

            default:
               break
         }
         break

      default:
         break
   }
}

export default isLegalMove