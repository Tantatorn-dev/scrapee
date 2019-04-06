<template>
  <v-toolbar prominent extended>

    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat to="/about">
      <span class="mr-2">About</span>
    </v-btn>
    <login-modal></login-modal>

    <template v-slot:extension>
      <Category></Category>
      <v-layout justify-center align-center>
      <SearchField></SearchField>
      </v-layout>
    </template>
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
  data(){
    return{
      onPopUp:false
    }
  }
};
</script>

<style scoped></style>
