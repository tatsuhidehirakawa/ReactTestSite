import React from "react"
import { Mapper } from "../atms/Mapper";
import Saver from  './Saver.jsx';
import Savee from  './Savee.jsx';

const Coordinate = () => {
  return (
    <div className="relative w-full h-[1900px]">
      <Mapper />
      <Saver />
      <Savee />
    </div>
  )
}

export default Coordinate;