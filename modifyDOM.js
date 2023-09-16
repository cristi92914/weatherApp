const temperatureValue = document.getElementById("temperature__value");
const zoneCity = document.getElementById("zone__city");
const descriptionP = document.getElementById("description");
const metric = document.getElementById("temperature__metric");

export const setMetric = (units) => {
  metric.textContent = units;
};

export const setTemp = (temp) => {
  temperatureValue.textContent = temp;
};

export const setCity = (city) => {
  zoneCity.textContent = city;
};

export const setDescription = (description) => {
  descriptionP.textContent = description;
};
