import { getLocation } from "./geolocation.js";
const API_KEY = "76a975919911e029ec5e72a082e27fa5";

const getUrlCity = (city, units = "metric") => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
};

const getUrlPosition = (pos, units = "metric") => {
  const position = pos.coords;
  // console.log(position);
  const lat = position.latitude;
  const lon = position.longitude;
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`;
};

const getMetric = (units) => {
  return units === "metric" ? "C" : "F";
};

const getJsonCity = async (city, units) => {
  const url = getUrlCity(city, units);
  const data = await fetch(url);
  const json = await data.json();
  return json;
};

export const getJsonWeatherCity = async (city, units = "metric") => {
  const json = await getJsonCity(city, units);
  const metric = getMetric(units);

  return { ...json, units: metric };
};

const getJsonPosition = async (position, units) => {
  const url = getUrlPosition(position, units);
  const data = await fetch(url);
  const json = await data.json();
  return json;
};

export const getJsonWeatherPosition = async (position, units = "metric") => {
  const json = await getJsonPosition(position, units);
  const metric = getMetric(units);

  return { ...json, units: metric };
};

// function showPosition(position) {
//   latLong = { lat: position.coords.latitude, lon: position.coords.longitude };
//   console.log(latLong);
// }
