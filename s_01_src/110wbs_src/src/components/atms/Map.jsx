import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useQuery } from 'react-query';

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

// const data = require('./data.json');

// React-Query ------------------------------------------------------
const fetchUsers = async () => {
  // const res = await fetch('http://localhost:8080/offerList/someGet');
  const res = await fetch('http://localhost:8081/offerList/someGet');
  return res.json();
}; // ---------------------------------------------------------------

export const MapB = () => {

  // React-Query-------------------------------------------
  const { data,isLoading } = useQuery('users', fetchUsers);
  if (isLoading) {
  return <span>Loading...</span>;
  } // ----------------------------------------------------
    
  // var marker = L.marker([33.852, 130.89]).addTo(mymap);
  
  console.log(data)

  return (
    // <div className="w-full h-full">
    <MapContainer
      center={[33.852, 130.89]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", zIndex: "1", position: "relative", borderRadius: "0px 0px 15px 0px"}}
    >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {data.map((d) => (
        <Marker key={d.offer_id} position={d.offer_location.String.split(",")}>
        <Popup position={d.offer_location.String.split(",")} icon={icon}>
        {/* <Popup position={[ d.position[0], d.position[1] ]}> */}
          A pretty CSS3 popup. <br /> Easily customizable.
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
