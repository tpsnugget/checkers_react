import React from 'react'
import "./Row.css"
import Square from "../Atoms/Square"

const OddRow = ({ row }) => {
   return (
      <div className="Row-main-container">
         <Square color={"lightgray"} name={`${row}c1`} />
         <Square color={"white"} name={`${row}c2`} />
         <Square color={"lightgray"} name={`${row}c3`} />
         <Square color={"white"} name={`${row}c4`} />
         <Square color={"lightgray"} name={`${row}c5`} />
         <Square color={"white"} name={`${row}c6`} />
         <Square color={"lightgray"} name={`${row}c7`} />
         <Square color={"white"} name={`${row}c8`} />
      </div>
   )
}

export default OddRow
