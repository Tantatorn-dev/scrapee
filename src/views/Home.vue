<template>
  <v-carousel>
    <v-carousel-item v-bind:src="require('@/assets/homeBG1.jpg')" class="dim">
      <v-layout align-center column>
        <h1 class="display-5 font-weight-medium mb-3 text-1" >Only 12.5% of e-waste is currently recycled.</h1>
      </v-layout>
      <v-layout justify-center align-center column class="button">
        <v-btn color="success">Sign up</v-btn>
      </v-layout>
    </v-carousel-item>
    <v-carousel-item v-bind:src="require('@/assets/homeBG2.jpg')">
      <v-layout align-center column>
        <h1 class="display-5 font-weight-medium mb-3 text-3">
Recycling 1 million laptops saves the energy 
        </h1>
        <h1 class="display-5 font-weight-medium mb-3 text-35">
equivalent to the electricity used by 3,657 U.S. homes in a year.
        </h1>
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
  color:  white;
  padding-top: 150px;
  margin-left: 30px;
}
.text-2 {
  color: white;
  letter-spacing: 5px;
  font-size: 56px;
  margin-left: 30px;
}
.text-3 {
  padding-top: 160px;
  margin: 30px;
  color: white;
}
.text-35{
  color:white;
}
.text-4 {
  color: white;
  margin: 30px;
}
.button {
  padding-top: 20px;
}
</style>
