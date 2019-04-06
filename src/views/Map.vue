<template>
  <div id="map" ref="map" style="height: 100%;"></div>
</template>

<script>
import Map from "./../core/map";
import { MarkerClusterer, createGeolocationMarker } from "./../core/map";

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

      var myLatLng = { lat: -25.363, lng: 131.044 };

      var map = new google.maps.Map(el, {
        zoom: 15,
        center: myLatLng,
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

      var iconBase = "/img/map/";

      var icons = {
        parking: {
          icon: {
            url: iconBase + "bin.png", // url
            scaledSize: new google.maps.Size(36, 36), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(18, 18) // anchor
          }
        },
        library: {
          icon: {
            url: iconBase + "me.png", // url
            scaledSize: new google.maps.Size(36, 36), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(18, 18) // anchor
          }
        },
        info: {
          icon: {
            url: iconBase + "garbage.png", // url
            scaledSize: new google.maps.Size(20, 20), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(10, 10) // anchor
          }
        }
      };

      var features = [
        {
          position: new google.maps.LatLng(-33.91721, 151.2263),
          type: "info"
        },
        {
          position: new google.maps.LatLng(-33.91539, 151.2282),
          type: "info"
        },
        {
          position: new google.maps.LatLng(-33.91747, 151.22912),
          type: "info"
        },
        {
          position: new google.maps.LatLng(-33.9191, 151.22907),
          type: "info"
        },
        {
          position: new google.maps.LatLng(-33.91725, 151.23011),
          type: "info"
        },
        {
          position: new google.maps.LatLng(-33.91872, 151.23089),
          type: "info"
        },
        {
          position: new google.maps.LatLng(-33.91784, 151.23094),
          type: "info"
        },
        {
          position: new google.maps.LatLng(-33.91682, 151.23149),
          type: "info"
        },
        {
          position: new google.maps.LatLng(-33.9179, 151.23463),
          type: "info"
        },
        {
          position: new google.maps.LatLng(-33.91666, 151.23468),
          type: "info"
        },
        {
          position: new google.maps.LatLng(-33.916988, 151.23364),
          type: "info"
        },
        {
          position: new google.maps.LatLng(
            -33.91662347903106,
            151.22879464019775
          ),
          type: "parking"
        },
        {
          position: new google.maps.LatLng(
            -33.916365282092855,
            151.22937399734496
          ),
          type: "parking"
        },
        {
          position: new google.maps.LatLng(
            -33.91665018901448,
            151.2282474695587
          ),
          type: "parking"
        },
        {
          position: new google.maps.LatLng(
            -33.919543720969806,
            151.23112279762267
          ),
          type: "parking"
        },
        {
          position: new google.maps.LatLng(
            -33.91608037421864,
            151.23288232673644
          ),
          type: "parking"
        },
        {
          position: new google.maps.LatLng(
            -33.91851096391805,
            151.2344058214569
          ),
          type: "parking"
        },
        {
          position: new google.maps.LatLng(
            -33.91818154739766,
            151.2346203981781
          ),
          type: "parking"
        },
        {
          position: new google.maps.LatLng(
            -33.91727341958453,
            151.23348314155578
          ),
          type: "library"
        }
      ];

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

      // Create markers.
      for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
          position: features[i].position,
          icon: icons[features[i].type].icon,
          map: map
        });

        marker.addListener(
          "click",
          (function(marker) {
            return function() {
              //infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            };
          })(marker, i)
        );
        markers[features[i].type].push(marker);
      }

      new MarkerClusterer(map, markers["info"], {
        imagePath: "/img/map/m"
      });

      /* Change markers on zoom */
      google.maps.event.addListener(map, "zoom_changed", function() {
        var zoom = map.getZoom();
        // iterate over markers and call setVisible
        for (i = 0; i < markers["parking"].length; i++) {
          markers["parking"][i].setVisible(zoom > 16);
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
