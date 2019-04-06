<template>
  <!--
  <v-toolbar app>
    
    <a href="/">
    <img :src="require('@/assets/justchange.png')">
    </a>
    <v-spacer></v-spacer>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span class="mr-2">About</span>
    </v-btn>
    <v-btn flat to="/map">
      <span class="mr-2">ChangeNow</span>
    </v-btn>

    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span class="mr-2">Reward</span>
    </v-btn>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span class="mr-2">Contact</span>
    </v-btn>
    <v-btn color="#013101" dark>Sign up</v-btn>
  <v-btn outline color="#013101">Log in</v-btn>-->
  <v-toolbar prominent extended>
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
      <span class="mr-2">About</span>
    </v-btn>

    <v-btn color="#013101" dark>Sign up</v-btn>
    <v-btn outline color="#013101">Log in</v-btn>
    <template v-slot:extension>
      <Category></Category>
    </template>
  </v-toolbar>
</template>

<script>
import Category from "./Category";
export default {
  name: "AppBar",
  components: {
    Category
  }
};
</script>

<style scoped></style>
