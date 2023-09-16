import { getJsonWeatherCity } from "./weather.js";
import { getLocation } from "./geolocation.js";
import * as DOM from "./modifyDOM.js";

getLocation();

const city = "Bucharest";
const json = await getJsonWeatherCity(city);
DOM.setMetric(json.units);
DOM.setDescription(json.weather[0].description);
DOM.setTemp(json.main.temp);
DOM.setCity(city);
