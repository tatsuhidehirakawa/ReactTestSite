import React from "react"
import "./Coordinate.scss"
import { Map } from "../atms/Map";

const Coordinate = () => {
  return (
    <div className="coordinate--outline">
      <Map />
      {/* <div className="coordinate--sectionA__provider">
      </div> */}
      {/* <div className="coordinate--sectionB__user">
      </div> */}
    </div>
  )
}

export default Coordinate;