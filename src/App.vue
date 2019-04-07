<template>
  <v-app>
    <Achievement></Achievement>
    <LoginModal/>
    <Dashboard/>
  </v-app>
</template>

<script>
import Achievement from "./views/achievement/Achievement";
import LoginModal from "./components/LoginModal/LoginModal";
import Dashboard from "./views/Dashboard/Dashboard";
export default {
  name: "App",
  components: {
    Achievement,
    LoginModal,
    Dashboard
  },
  data() {
    return {
      //
    };
  }
};
</script>
