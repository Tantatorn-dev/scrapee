<template>
  <v-carousel>
    <v-carousel-item v-bind:src="require('@/assets/homeBG.png')">
      <v-layout align-center column>
        <h2 class="display-6 font-weight-thin text-1">Collected garbage</h2>
        <h1 class="display-5 font-weight-medium mb-3 text-2">1,400,323 tons</h1>
      </v-layout>
      <v-layout justify-center align-center column class="button">
        <v-btn color="success">Change now!</v-btn>
      </v-layout>
    </v-carousel-item>
    <v-carousel-item v-bind:src="require('@/assets/homeBG2.jpg')">
      <v-layout align-center column>
        <h1 class="display-5 font-weight-medium mb-3 text-3">
          Today, the number one economic threat to humanity is our inability to
          value nature.
        </h1>
        <h2 class="display-6 font-weight-medium text-4">- Johan Rockstrom</h2>
      </v-layout>
    </v-carousel-item>
    <v-carousel-item v-bind:src="require('@/assets/homeBG3.jpg')">
      <v-layout align-center column>
        <h1 class="display-5 font-weight-medium mb-3 text-3">
          The earth is what we all have in common.
        </h1>
        <h2 class="display-6 font-weight-medium text-4">- Wendell Berry</h2>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {};
</script>

<style scoped>
.text-1 {
  color: black;
  padding-top: 20px;
  letter-spacing: 2px;
  margin-left: 30px;
}
.text-2 {
  color: black;
  letter-spacing: 5px;
  font-size: 56px;
  margin-left: 30px;
}
.text-3 {
  padding-top: 160px;
  margin: 30px;
  color: white;
}
.text-4 {
  color: white;
  margin: 30px;
}
.button {
  padding-top: 160px;
}
</style>
