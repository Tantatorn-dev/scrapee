<template>
  <v-app app>
    <AppBar></AppBar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar/AppBar";
export default {
  name: "App",
  components:{
    AppBar
  },
  data() {
    return {
      //
    };
  }
};
</script>
