<template>
  <v-container style="height:100vh">
    <v-carousel class="img-slide" style="height:100%">
      <v-carousel-item v-bind:src="require('@/assets/homeBG1.jpg')">
        <v-layout align-center column>
          <h1
            class="display-5 font-weight-medium mb-3 text-1"
          >Only 12.5% of e-waste is currently recycled.</h1>
        </v-layout>
        <v-layout justify-center align-center column class="button">
          <v-btn color="success">Sign up</v-btn>
        </v-layout>
      </v-carousel-item>
      <v-carousel-item v-bind:src="require('@/assets/homeBG2.jpg')">
        <v-layout align-center column>
          <h1
            class="display-5 font-weight-medium mb-3 text-3"
          >Recycling 1 million laptops saves the energy</h1>
          <h1
            class="display-5 font-weight-medium mb-3 text-35"
          >equivalent to the electricity used by 3,657 U.S. homes in a year.</h1>
        </v-layout>
      </v-carousel-item>
      <v-carousel-item v-bind:src="require('@/assets/homeBG3.jpg')">
        <v-layout align-center column>
          <h1
            class="display-5 font-weight-medium mb-3 text-3"
          >The earth is what we all have in common.</h1>
          <h2 class="display-6 font-weight-medium text-4">- Wendell Berry</h2>
        </v-layout>
      </v-carousel-item>
    </v-carousel>

    <h1 class="product-type">COMPUTER AND TELECOMMUNICATION</h1>

    <v-layout row wrap>
      <v-flex
        v-for="n in 4"
        :key="n"
        xs3
        class="border"
      >
        <v-card flat tile hover>
          <v-img
            :src="require(`@/assets/1${n}.png`)"
            height="300px"
          ></v-img>
          
        </v-card>
      </v-flex>
    </v-layout>

    <h1 class="product-type">MAJOR APPLIANCES</h1>

    <v-layout row wrap class="downmost">
      <v-flex
        v-for="n in 4"
        :key="n"
        xs3
        class="border"
      >
        <v-card flat tile hover>
          <v-img
            :src="require(`@/assets/2${n}.png`)"
            height="300px"
          ></v-img>
          
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.img-slide{
  padding-top: 50px;
}
.text-1 {
  color: white;
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
.text-35 {
  color: white;
}
.text-4 {
  color: white;
  margin: 30px;
}
.button {
  padding-top: 20px;
}
.product-type{
  padding-top: 60px;
}
.downmost{
  margin-bottom: 50px;
}
</style>
