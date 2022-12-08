import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import './Map.scss';

export const Mapper = () => {
  // 緯度軽度
  // const position = [51.505, -0.09];
  const position = [33.852, 130.89];
  // 初期マップズームレベル
  const zoom = 15;  // Adjustable between 0 and 19.
  // 33.851568, 130.890275
  return (
    // <div className="w-full h-full">
    <MapContainer center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
    // </div>
  )
};
