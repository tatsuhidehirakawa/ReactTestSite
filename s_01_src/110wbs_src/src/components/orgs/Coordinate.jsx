import React from "react"
import { Mapper } from "../atms/Mapper";
import Saver from  '../mlcs/Saver.jsx';
import FloatingActionPanel from  '../atms/FloatingActionPanel.jsx';

const Coordinate = () => {
  return (
    <div className="relative w-full z-3 absolute">
      <Saver />
      <FloatingActionPanel />
      <Mapper />
      {/* <Saver className="z-6" /> */}
      {/* <Savee className="z-5" /> */}
      {/* <Mapper className="z-2" /> */}
    </div>
  )
}

export default Coordinate;
