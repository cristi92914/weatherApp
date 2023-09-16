const temperatureValue = document.getElementById("temperature__value");
const zoneCity = document.getElementById("zone__city");
const descriptionP = document.getElementById("description");
const metric = document.getElementById("temperature__metric");
const icon = document.getElementById("zone_icon");

export const getZoneP = () => {
  return zoneCity;
};

export const setMetric = (units) => {
  metric.textContent = units;
};

const setIcon = (temp) => {
  if (temp > 20) {
    icon.src = "./png/high_temperature.png";
  } else if (temp > 10) {
    icon.src = "./png/medium_temperature.webp";
  } else {
    icon.src = "./png/low_temperature.webp";
  }
};

export const setTemp = (temp) => {
  temperatureValue.textContent = temp;
  setIcon(temp);
};

export const setCity = (city) => {
  zoneCity.textContent = city;
};

export const setDescription = (description) => {
  descriptionP.textContent = description;
};
