import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { getIcon, getAirportIcon } from "../utils/getIcon";
import { open } from "../redux/slices/detailSlice";
import c from "../utils/nullCheck";
import { useEffect } from "react";
import { getFlights } from "../redux/actions";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flight);
  const { info, route } = useSelector((store) => store.detail);

  // Canlı Veri akışı için her saniye başında veriyi çek
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <MapContainer center={[39.148916, 35.335691]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight, key) => (
        <Marker
          key={key}
          position={[flight.lat, flight.lng]}
          icon={getIcon(flight.deg, info?.identification?.id === flight?.id, info?.identification?.id)}
        >
          <Popup>
            <div className="popup">
              <span>Kod: {flight.code}</span>
              <button onClick={() => dispatch(open(flight.id))}>Detay</button>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Uçağın Rotasını Çiz */}
      {route?.length > 0 && <Polyline positions={route} pathOptions={{ color: "red" }} />}

      {/* Kalkış Yaptığ Havaalanını İşaretle */}
      {info?.airport?.origin?.position && (
        <Marker
          icon={getAirportIcon()}
          position={[info?.airport.origin.position?.latitude, info.airport.origin.position?.longitude]}
        >
          <Popup>
            <div className="popup">
              <span>Kalkış</span>
              <span>
                {c(info.airport.origin.position?.country?.name)} / {c(info.airport.origin.position?.region?.city)}
              </span>
            </div>
          </Popup>
        </Marker>
      )}

      {/* Kalkış Yaptığ Havaalanını İşaretle */}
      {info?.airport?.destination?.position && (
        <Marker
          icon={getAirportIcon(true)}
          position={[info?.airport.destination.position?.latitude, info.airport.destination.position?.longitude]}
        >
          <Popup>
            <div className="popup">
              <span>Varış</span>
              <span>
                {c(info.airport.destination.position?.country?.name)} /{" "}
                {c(info.airport.destination.position?.region?.city)}
              </span>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
