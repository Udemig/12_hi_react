import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import getIcon from "../utils/getIcon";
import { open } from "../redux/slices/detailSlice";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flight);

  return (
    <MapContainer center={[39.148916, 35.335691]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) => (
        <Marker position={[flight.lat, flight.lng]} icon={getIcon(flight.deg)}>
          <Popup>
            <div className="popup">
              <span>Kod: {flight.code}</span>
              <button onClick={() => dispatch(open(flight.id))}>Detay</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
