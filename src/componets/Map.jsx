import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// eslint-disable-next-line react/prop-types
function Map({ position }) {
  return (
    <MapContainer
      key={position}
      center={position}
      zoom={18}
      scrollWheelZoom={true}
      //   style={{ minHeight: "30vh", minWidth: "100vw" }}
      className="w-[100vw] h-[30vh]"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        {/* <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
      </Marker>
    </MapContainer>
  );
}

export default Map;
