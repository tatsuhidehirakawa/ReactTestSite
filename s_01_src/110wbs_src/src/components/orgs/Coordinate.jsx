import React from "react"
import { Mapper } from "../atms/Mapper";
import Saver from  '../mlcs/Saver.jsx';
// import Savee from  '../mlcs/Savee.jsx';

const Coordinate = () => {
  return (
    <div className="relative w-full h-[1900px] z-3">
      <Saver />
      {/* <Savee /> */}
      <Mapper />
      {/* <Saver className="z-6" /> */}
      {/* <Savee className="z-5" /> */}
      {/* <Mapper className="z-2" /> */}
    </div>
  )
}

export default Coordinate;