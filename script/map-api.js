// 1. Initialise the map 
function GetMap() {
  const map = new Microsoft.Maps.Map(document.querySelector("#map-location"), {
    credentials:
      "ArWU34cz1I4S_ysnN1G5A3yJJp1NPk4CObkmnW0sQPu5R5keJArPQYTVnKkCnL0y",
    center: new Microsoft.Maps.Location(-37.812528, 144.973335),
    zoom: 15,
  });

  // 2. Add a pin at location
  const pin = new Microsoft.Maps.Pushpin(map.getCenter(), {
    title: "Indigo Gowns",
    subTitle: "Wedding dress design in Melbourne",
    color: "#1A1B1D",
  });

  // 3. Drop the pin to the map
  map.entities.push(pin);
}
// 4. Load the map script
function loadMapScript() {
  const script = document.createElement("script");
  script.src =
    "https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=ArWU34cz1I4S_ysnN1G5A3yJJp1NPk4CObkmnW0sQPu5R5keJArPQYTVnKkCnL0y";
  document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", loadMapScript);

