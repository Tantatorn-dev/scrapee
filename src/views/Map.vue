<template>
  <div id="map" ref="map" style="height: 100%;"></div>
</template>

<script>
import Map from "./../core/map/index.js";
import {
  MarkerClusterer,
  createGeolocationMarker
} from "./../core/map/index.js";

import data from "./../core/db";

export default {
  mounted() {
    var el = this.$refs.map;
    Map.load(function(google) {
      var GeolocationMarker = createGeolocationMarker(google);
      var markers = {
        parking: [],
        library: [],
        info: []
      };

      var map = new google.maps.Map(el, {
        zoom: 15,
        center: { lat: 13.7459861, lng: 100.4888467 },
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var GeoMarker = new GeolocationMarker();
      google.maps.event.addListenerOnce(
        GeoMarker,
        "position_changed",
        function() {
          map.setCenter(this.getPosition());
          map.fitBounds(this.getBounds());
        }
      );
      GeoMarker.setMap(map);

      var contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the " +
        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
        "south west of the nearest large town, Alice Springs; 450&#160;km " +
        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
        "features of the Uluru - Kata Tjuta National Park. Uluru is " +
        "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
        "Aboriginal people of the area. It has many springs, waterholes, " +
        "rock caves and ancient paintings. Uluru is listed as a World " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
        "</div>" +
        "</div>";

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var iconBase = "/img/map/";

      markers.bin = data.bin.map(loc => {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(loc.lat, loc.lng),
          icon: {
            url: iconBase + "bin.png", // url
            scaledSize: new google.maps.Size(36, 36), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(18, 18) // anchor
          },
          map: map
        });

        return marker;
      });

      markers.garbage = data.garbage.map(loc => {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(loc.lat, loc.lng),
          icon: {
            url: iconBase + "garbage.png", // url
            scaledSize: new google.maps.Size(20, 20), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(10, 10) // anchor
          },
          map: map
        });

        marker.addListener(
          "click",
          (function(marker) {
            return function() {
              //infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            };
          })(marker)
        );

        return marker;
      });

      new MarkerClusterer(map, markers["garbage"], {
        imagePath: "/img/map/m",
        averageCenter: true,
        maxZoom: 21
      });

      /* Change markers on zoom */
      google.maps.event.addListener(map, "zoom_changed", function() {
        var zoom = map.getZoom();
        // iterate over markers and call setVisible
        for (var i = 0; i < markers["bin"].length; i++) {
          markers["bin"][i].setVisible(zoom > 16);
        }

        // map.setOptions({
        //   styles: [
        //     {
        //       featureType: "poi",
        //       elementType: "labels.icon",
        //       stylers: [{ visibility: zoom > 16 ? "off" : "on" }]
        //     }
        //   ]
        // });
      });
    });
  }
};
</script>
