import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import './Map.scss';

export const Map = () => {
  // 緯度軽度
  // const position = [51.505, -0.09];
  const position = [33.852, 130.89];
  // 初期マップズームレベル
  const zoom = 30;
  // 33.851568, 130.890275
  return (
    <MapContainer center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
};
