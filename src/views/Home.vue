<template>
  <v-parallax dark v-bind:src="require('@/assets/homeBG.png')">
    <v-layout align-center column>
      <h2 class="display-1 font-weight-thin text-1">Collected garbage</h2>
      <h1 class="display-5 font-weight-medium mb-3 text-2">1,400,323 tons</h1>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {};
</script>

<style scoped>
.text-1 {
  color: black;
  padding-top: 20px;
  letter-spacing: 2px;
}
.text-2 {
  color: black;
  letter-spacing: 5px;
  font-size: 56px;
}
</style>
