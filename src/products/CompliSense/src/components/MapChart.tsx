import React, { useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

import "./MapChart.css";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const countryCoordinates: { [key: string]: [number, number] } = {
  "United States": [-95.7129, 37.0902],
  India: [78.9629, 20.5937],
  China: [104.1954, 35.8617],
  Germany: [10.4515, 51.1657],
  Italy: [12.5674, 41.8719],
  France: [2.2137, 46.2276],
  "United Kingdom": [-3.436, 55.3781],
  Canada: [-106.3468, 56.1304],
  Japan: [138.2529, 36.2048],
  Brazil: [-51.9253, -14.235],
  Mexico: [-102.5528, 23.6345],
  Spain: [-3.7492, 40.4637],
  "South Korea": [127.7669, 35.9078],
  Ireland: [-8.2439, 53.4129],
  Switzerland: [8.2275, 46.8182],
};

interface CountryCount {
  name: string;
  count: number;
}

interface MapChartProps {
  countryData: CountryCount[];
  colors: string[];
}

const MapChart: React.FC<MapChartProps> = ({ countryData, colors }) => {
  const [hoveredCountry, setHoveredCountry] =
    useState<CountryCount | null>(null);

  const mapGeographies = useMemo(
    () => (
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) =>
          geographies.map((geo: any) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#E5E7EB"
              stroke="#9CA3AF"
              style={{
                default: { outline: "none" },
                hover: { outline: "none", fill: "#D1D5DB" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
    ),
    []
  );

  return (
    <div className="map-container">
      <div className="map-wrapper">
        <ComposableMap projectionConfig={{ scale: 110 }} height={350}>
          <ZoomableGroup>
            {mapGeographies}

            {countryData.map((country, index) => {
              const coords = countryCoordinates[country.name];
              if (!coords) return null;

              const maxCount = Math.max(
                ...countryData.map((c) => c.count || 0)
              );

              const size = Math.max(
                3,
                ((country.count || 0) / maxCount) * 10
              );

              return (
                <Marker key={country.name} coordinates={coords}>
                  <g
                    className="map-marker"
                    onMouseEnter={() => setHoveredCountry(country)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    <circle
                      r={size}
                      fill={colors[index % colors.length]}
                      stroke="#fff"
                      strokeWidth={1.5}
                      opacity={
                        hoveredCountry?.name === country.name ? 1 : 0.7
                      }
                    />

                    {hoveredCountry?.name === country.name && (
                      <g>
                        <rect
                          className="tooltip-box"
                          x={-60}
                          y={-size - 30}
                          width={120}
                          height={22}
                          rx={4}
                        />

                        <text
                          textAnchor="middle"
                          y={-size - 15}
                          className="tooltip-text"
                        >
                          {country.name}:{" "}
                          {country.count.toLocaleString()}
                        </text>
                      </g>
                    )}
                  </g>
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default MapChart;