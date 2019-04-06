<template>
  <v-app>
    <Achievement></Achievement>
    <LoginModal/>
  </v-app>
</template>

<script>
import Achievement from './views/achievement/Achievement';
import LoginModal from './components/LoginModal/LoginModal';

export default {
  name: 'App',
  components: {
    Achievement,
    LoginModal
  },
  data() {
    return {
    //
    };
  },
};
</script>
