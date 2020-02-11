import React from 'react'
import "./Square.css"

const Square = ({ color, name }) => {

   const handleMouseDown = (e) => {
      console.log("Square Component MouseDown Event", e.target.title)
   }

   const handleMouseUp = (e) => {
      console.log("Square Component MouseUp Event", e.target.title)
   }

   return (
      <div
         className="Square-main-container"
         title={name}
         onMouseDown={handleMouseDown}
         onMouseUp={handleMouseUp}
         style={{backgroundColor: color}}
      >
      </div>
   )
}

export default Square
