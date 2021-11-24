<template>
  <v-img :aspect-ratio="1 / 2" width="100%">
    <l-map :zoom="zoom" :center="center" style="height: 100%; width: 100%">
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
  </v-img>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer
  },
  data: () => ({
    lat: 10.86241716410156,
    long: 106.7955461369467,
    zoom: 12,
    center: latLng(10.85553, 106.80367),
    // url:
    // "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    // url: "https://3.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/13/6525/3847/256/png8?app_id=xWVIueSv6JL0aJ5xqTxb&token=djPZyynKsbTjIUDOBcHZ2g&lg=ENG"
  })
};
</script>


// 106.81708,10.85797
10.86241716410156, 106.79554613694678