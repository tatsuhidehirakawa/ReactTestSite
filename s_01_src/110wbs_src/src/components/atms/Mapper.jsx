import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// import L from 'leaflet'
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const data = require('./data.json');

export const Mapper = () => {
  // var marker = L.marker([33.852, 130.89]).addTo(mymap);
  return (
    // <div className="w-full h-full">
    <MapContainer
      center={[33.852, 130.89]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%", zIndex: "1", position: "relative"}}
    >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {data.map((d) => (
      <Marker key={d.id} position={[ d.position[0], d.position[1] ]}>
        <Popup position={[ d.position[0], d.position[1] ]} icon={icon}>
        {/* <Popup position={[ d.position[0], d.position[1] ]}> */}
          {/* A pretty CSS3 popup. <br /> Easily customizable. */}
          <div>
						<h2>{d.name}</h2>
						<small>{d.address}</small>
						<p>{d.description}</p>
					</div>
        </Popup>
      </Marker>
    ))}
    </MapContainer>
    // </div>
  )
};
