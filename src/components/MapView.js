import './MapView.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from '../images/icon-location.svg';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useRef } from 'react';


let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function MapView({data}) {
  const mapRef = useRef();

  function handleSetView() {
    mapRef.current.setView([data.location.lat, data.location.lng], 13)
  }


  return (
    <div className='MapView'>
        {data && <MapContainer ref={mapRef} center={[data.location.lat, data.location.lng]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} noWrap
            />

          <Marker position={[data.location.lat, data.location.lng]} draggable={true}>
            <Popup>
            {data.location.region}
            </Popup>
          </Marker>
          {handleSetView()}
</MapContainer>}
    </div>
  )
}
