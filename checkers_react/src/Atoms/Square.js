import React from 'react'
import "./Square.css"
import { store } from "../redux/store"
import isLegalMove from "../helpers"
import { updateStart, updateStop } from "../redux/actions"

const Square = ({ color, name }) => {

   const { [name]: piece } = store.getState()
   // console.log("Square Component name is", piece)



   const handleMouseDown = (e) => {
      // console.log("Square Component MouseDown Event", e.target.title)
      store.dispatch(updateStart(e.target.title))
   }

   const handleMouseUp = (e) => {
      // console.log("Square Component MouseUp Event", e.target.title)
      store.dispatch(updateStop(e.target.title))
      console.log("Return from isLegalMove is", isLegalMove())
   }

   return (
      <div
         className="Square-main-container"
         title={name}
         onMouseDown={handleMouseDown}
         onMouseUp={handleMouseUp}
         style={{ backgroundColor: color }}
      >
         <div className="Square-piece-container">
            {piece ? piece : ""}
         </div>
      </div>
   )
}

export default Square
