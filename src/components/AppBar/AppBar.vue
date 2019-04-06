<template>
  <v-toolbar prominent extended>
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
      <span class="mr-2">About</span>
    </v-btn>

    <v-btn color="#013101" dark>Sign up</v-btn>
    <v-btn outline color="#013101">Log in</v-btn>
    <template v-slot:extension>
      <v-layout justify-center align-center>
      <Category></Category>
      <SearchField></SearchField>
      </v-layout>
    </template>
  </v-toolbar>
</template>

<script>
import Category from "./Category";
import SearchField from "./SearchField";

export default {
  name: "AppBar",
  components: {
    Category,
    SearchField
  }
};
</script>

<style scoped></style>
