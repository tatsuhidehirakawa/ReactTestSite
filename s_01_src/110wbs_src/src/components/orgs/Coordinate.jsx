import React from "react"
import { Mapper } from "../atms/Mapper";
import Saver from  '../mlcs/Saver.jsx';
import ModeSelectPanel from  '../atms/ModeSelectPanel.jsx';
import AnnunciatorPanel from  '../atms/AnnunciatorPanel.jsx';
import "../../Pager.scss";

const Coordinate = () => {
  return (
    <div className="relative w-full z-3 absolute">
      <ModeSelectPanel />
      <Saver className="contents_box"/>
      {/* <Saver /> */}
      <AnnunciatorPanel />
      <Mapper />
      {/* <Saver className="z-6" /> */}
      {/* <Savee className="z-5" /> */}
      {/* <Mapper className="z-2" /> */}
    </div>
  )
}

export default Coordinate;
