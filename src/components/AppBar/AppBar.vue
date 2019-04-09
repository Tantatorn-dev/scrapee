<template>
  <v-toolbar app fixed>
    <v-img :src="require('@/assets/scrapee.png')"></v-img>
    <router-link flat to="/" style="color: aliceblue;"
      ><v-icon>home</v-icon></router-link
    >

    <Category></Category>

    <v-spacer></v-spacer>

    <v-layout align-center>
      <v-icon>search</v-icon>
      <SearchField></SearchField>
    </v-layout>

    <v-btn flat to="/about">
      <span class="mr-2">About</span>
    </v-btn>
    <div v-if="!isLogin">
      <login-modal :on-login="login"></login-modal>
    </div>
    <div v-else>
      <v-btn large light flat to="/profile">
        My Account
      </v-btn>
    </div>
  </v-toolbar>
</template>

<script>
import Category from "./Category";
import SearchField from "./SearchField";
import LoginModal from "../LoginModal/LoginModal.vue";
export default {
  name: "AppBar",
  components: {
    Category,
    SearchField,
    LoginModal
  },
  data() {
    return {
      onPopUp: false,
      isLogin: true
    };
  },
  methods: {
    login() {
      this.isLogin = true;
    }
  }
};
</script>

<style scoped></style>
