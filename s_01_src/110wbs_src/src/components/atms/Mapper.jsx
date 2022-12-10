import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './Map.scss';
// import L from 'leaflet'
// L.Icon.Default.imagePath = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/'

const data = require('./data.json');

export const Mapper = () => {
  const positions = [33.852, 130.89];
  const zoom = 15;  // Adjustable between 0 and 19.
  // 33.851568, 130.890275
  // var marker = L.marker([33.852, 130.89]).addTo(mymap);
  return (
    // <div className="w-full h-full">
    <MapContainer center={positions} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((d) => (
        <Marker key={d.id} position={[ d.position[0], d.position[1] ]}>
          {/* <Popup position={[ d.position[0], d.position[1] ]} icon={icon}> */}
          <Popup position={[ d.position[0], d.position[1] ]}>
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





// import React from 'react';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// const data = require('./data.json');
 
// const App = () => {
// 	return (
// 			<Map center={[ 34.6873377, 135.5237668 ]} zoom={12}>
// 				<TileLayer
// 					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// 					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
// 				/>
 
// 				{data.map((d) => (
// 					<Marker key={d.id} position={[ d.position[0], d.position[1] ]}>
// 						<Popup position={[ d.position[0], d.position[1] ]} icon={icon}>
// 							<div>
// 								<h2>{d.name}</h2>
// 								<small>{d.address}</small>
// 								<p>{d.description}</p>
// 							</div>
// 						</Popup>
// 					</Marker>
// 				))}
// 			</Map>
// 	);
// };
 
// export default App;