import { createStore } from "redux"
import reducer from "../reducers"

const initialState = {
   "r8c8": "🔴",
   "r8c6": "🔴",
   "r8c4": "🔴",
   "r8c2": "🔴",
   "r7c7": "🔴",
   "r7c5": "🔴",
   "r7c3": "🔴",
   "r7c1": "🔴",
   "r6c8": "🔴",
   "r6c6": "🔴",
   "r6c4": "🔴",
   "r6c2": "🔴",
   "r5c7": 0,
   "r5c5": 0,
   "r5c3": 0,
   "r5c1": 0,
   "r4c8": 0,
   "r4c6": 0, 
   "r4c4": 0,
   "r4c2": 0,
   "r3c7": "⚫️",
   "r3c5": "⚫️",
   "r3c3": "⚫️",
   "r3c1": "⚫️",
   "r2c8": "⚫️",
   "r2c6": "⚫️",
   "r2c4": "⚫️",
   "r2c2": "⚫️",
   "r1c7": "⚫️",
   "r1c5": "⚫️",
   "r1c3": "⚫️",
   "r1c1": "⚫️"
}

export const store = createStore(reducer, initialState)