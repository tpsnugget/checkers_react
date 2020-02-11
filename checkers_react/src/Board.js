import React from 'react'
import "./Board.css"
import EvenRow from "./Molecules/EvenRow"
import OddRow from "./Molecules/OddRow"

const Board = () => {
   return (
      <div className="Board-main-container">
         <div>
            <EvenRow className="even" row="r8" />
            <OddRow className="odd" row="r7" />
            <EvenRow className="even" row="r6" />
            <OddRow className="odd" row="r5" />
            <EvenRow className="even" row="r4" />
            <OddRow className="odd" row="r3" />
            <EvenRow className="even" row="r2" />
            <OddRow className="odd" row="r1" />
         </div>
      </div>
   )
}

export default Board
