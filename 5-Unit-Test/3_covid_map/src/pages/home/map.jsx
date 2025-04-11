import { useNavigate } from "react-router-dom";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";

const Map = () => {
  const navigate = useNavigate();

  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  const redirect = (geo) => {
    navigate(`/detail/${geo.properties.name.toLowerCase()}`);
  };

  return (
    <div className="container p-0 mt-10 mb-20">
      <h1 className="px-5 pb-5 text-2xl font-semibold">Ülke Seçin</h1>

      <div className="border shadow-lg md:rounded-xl bg-gray-200">
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => redirect(geo)}
                    style={{
                      default: { fill: "white", stroke: "gray" },
                      hover: { fill: "#DB2777" },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;
