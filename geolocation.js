import * as DOM from "./modifyDOM.js";
import { getJsonWeatherPosition, getJsonWeatherCity } from "./weather.js";
const x = DOM.getZoneP();

export const getLocation = async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    // x.innerHTML = "Geolocation is not supported by this browser.";
  }
};
const showError = async (error) => {
  const city = "Bucharest";
  const json = await getJsonWeatherCity(city);
  DOM.setMetric(json.units);
  DOM.setDescription(json.weather[0].description);
  DOM.setTemp(json.main.temp);
  DOM.setCity(city);
};

const showPosition = async (position) => {
  const latLong = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };

  const json = await getJsonWeatherPosition(position);

  // console.log(json);
  DOM.setMetric(json.units);
  DOM.setDescription(json.weather[0].description);
  DOM.setTemp(json.main.temp);
  DOM.setCity(json.name);
};
