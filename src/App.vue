<template>
  <v-app>
    <AppBar></AppBar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Dashboard/>
  </v-app>
</template>

<script>
import Dashboard from "./views/Dashboard/Dashboard";
export default {
  name: "App",
  components: {
    Dashboard
  },
  data() {
    return {
      //
    };
  }
};
</script>
