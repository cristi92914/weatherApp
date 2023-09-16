const x = document.getElementById("zone_icon");
export let latLong;

export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  latLong = { lat: position.coords.latitude, lon: position.coords.longitude };
  console.log(latLong);
}
