import * as DOM from "./modifyDOM.js";
import { getJsonWeatherPosition } from "./weather.js";
const x = DOM.getZoneP();

export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
const showPosition = async (position) => {
  const latLong = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };

  const json = await getJsonWeatherPosition(position);

  console.log(json);
  DOM.setMetric(json.units);
  DOM.setDescription(json.weather[0].description);
  DOM.setTemp(json.main.temp);
  DOM.setCity(json.name);
};
