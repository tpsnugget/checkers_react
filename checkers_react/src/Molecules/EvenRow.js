import React from 'react'
import "./Row.css"
import Square from "../Atoms/Square"

const EvenRow = ({ row }) => {
   return (
      <div className="Row-main-container">
         <Square color={"white"} name={`${row}c1`} />
         <Square color={"lightgray"} name={`${row}c2`} />
         <Square color={"white"} name={`${row}c3`} />
         <Square color={"lightgray"} name={`${row}c4`} />
         <Square color={"white"} name={`${row}c5`} />
         <Square color={"lightgray"} name={`${row}c6`} />
         <Square color={"white"} name={`${row}c7`} />
         <Square color={"lightgray"} name={`${row}c8`} />
      </div>
   )
}

export default EvenRow
