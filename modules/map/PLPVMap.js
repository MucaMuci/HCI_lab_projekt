import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Povlja_Luke_Pucisca_Vrulja_Map = () => {
  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Povlja_Luke_Pucisca_Vrulja_Map;
