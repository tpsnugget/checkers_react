export function updateJumpMove(piece, jumpedSquare, start, stop) {
      console.log("In actions, updateJumpMove, piece, jumpedSqure, start, stop are", piece, jumpedSquare, start, stop)
   return {
      type: "UPDATE_JUMP_MOVE",
      start: start,
      stop: stop,
      currentPiece: piece,
      jumpedSquare: jumpedSquare
   }
}

export function updateSingleMove(piece, start, stop) {
   // console.log("In actions, updateSingleMove, piece, start, stop are", piece, start, stop)
   return {
      type: "UPDATE_SINGLE_MOVE",
      start: start,
      stop: stop,
      currentPiece: piece,
      currentTurn: piece === "🔴" ? "⚫️" : "🔴"
   }
}

export function updateStart(start) {
   return {
      type: "UPDATE_START",
      start: start
   }
}

export function updateStop(stop) {
   return {
      type: "UPDATE_STOP",
      stop: stop
   }
}