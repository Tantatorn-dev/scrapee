<template>
  <v-toolbar app
    ><v-img v-bind:src="require('@/assets/justchange.png')"></v-img>
    <v-toolbar-title class="img"> </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span class="mr-2">About</span>
    </v-btn>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
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
    <v-btn outline color="#013101">Log in</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "AppBar"
};
</script>

<style scoped></style>
