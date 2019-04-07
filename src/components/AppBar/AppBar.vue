<template>
  <v-toolbar fixed>
    <v-img v-bind:src="require('@/assets/scrapee.png')" ></v-img>
    <Category></Category>
    
    <v-spacer></v-spacer>
    
    <v-layout  align-center >
      <v-icon>search</v-icon>
      <SearchField></SearchField>
    </v-layout>

    <v-btn flat to="/about">
      <span class="mr-2">About</span>
    </v-btn>
    <login-modal></login-modal>

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
      onPopUp: false
    };
  }
};
</script>

<style scoped></style>
