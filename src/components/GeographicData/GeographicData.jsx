import { memo } from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

import { ReactComponent as ChevronDown } from '../../assets/images/chevronDown.svg';
const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';
function GeographicData() {
  return (
    <>
      <ComposableMap data-tip="">
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#FBCF71',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
}

export default GeographicData;
