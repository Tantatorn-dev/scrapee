var lat = 13.7458265;
var lng = 100.5238205;
var max = 150;

var out = [];

for (var i = 0; i < max; i++) {
  out.push({
    lat: lat + (Math.random() - 0.5) * 0.01,
    lng: lng + (Math.random() - 0.5) * 0.01
  });
}

export default out;
