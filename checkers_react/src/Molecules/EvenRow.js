import React from 'react'
import "./Row.css"
import Square from "../Atoms/Square"

const EvenRow = ({ row }) => {
   return (
      <div className="Row-main-container">
         <Square color={"white"} />
         <Square color={"lightgray"} name={`${row}c2`} />
         <Square color={"white"} />
         <Square color={"lightgray"} name={`${row}c4`} />
         <Square color={"white"} />
         <Square color={"lightgray"} name={`${row}c6`} />
         <Square color={"white"} />
         <Square color={"lightgray"} name={`${row}c8`} />
      </div>
   )
}

export default EvenRow
