<template>
  <div id="map" ref="map" style="height: 100%;"></div>
</template>

<script>
import Map from "./../core/map";

export default {
  mounted() {
    var el = this.$refs.map;
    Map.load(function(google) {
      var myLatLng = { lat: -25.363, lng: 131.044 };

      var map = new google.maps.Map(el, {
        zoom: 4,
        center: myLatLng
      });

      new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello World!"
      });
    });
  }
};
</script>
