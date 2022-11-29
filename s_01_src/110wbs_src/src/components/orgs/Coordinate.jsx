import React from "react"
import "./Coordinate.scss"
import { Map } from "../atms/Map";

const Coordinate = () => {
  return (
    <div className="coordinate--outline">
      <div className="coordinate--sectionA__provider">
        <Map />
      </div>
      {/* <div className="coordinate--sectionB__user">
      </div> */}
    </div>
  )
}

export default Coordinate;