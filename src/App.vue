<template>
  <v-app>
    <AppBar></AppBar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <LoginModal/>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar/AppBar";
import LoginModal from './components/LoginModal/LoginModal';
export default {
  name: "App",
  components: {
    AppBar,
    LoginModal
  },
  data() {
    return {
      //
    };
  }
};
</script>
