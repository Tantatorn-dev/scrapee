<template>
  <div>
    <v-carousel class="img-slide" height="calc(100vh - 64px)">
      <v-carousel-item :src="require('@/assets/homeBG1.jpg')">
        <v-layout align-center column>
          <h1 class="display-5 font-weight-medium mb-3 text-1">
            Only 12.5% of e-waste is currently recycled.
          </h1>
        </v-layout>
        <v-layout justify-center align-center column class="button">
          <v-btn color="success">Sign up</v-btn>
        </v-layout>
      </v-carousel-item>
      <v-carousel-item :src="require('@/assets/homeBG2.jpg')">
        <v-layout align-center column>
          <h1 class="display-5 font-weight-medium mb-3 text-3">
            Recycling 1 million laptops saves the energy
          </h1>
          <h1 class="display-5 font-weight-medium mb-3 text-35">
            equivalent to the electricity used by 3,657 U.S. homes in a year.
          </h1>
        </v-layout>
      </v-carousel-item>
      <v-carousel-item :src="require('@/assets/homeBG3.jpg')">
        <v-layout align-center column>
          <h1 class="display-5 font-weight-medium mb-3 text-3">
            The earth is what we all have in common.
          </h1>
          <h2 class="display-6 font-weight-medium text-4">- Wendell Berry</h2>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <h1 class="product-type">COMPUTER AND TELECOMMUNICATION</h1>

      <v-layout row wrap>
        <v-flex v-for="n in 4" :key="n" xs3 class="border">
          <router-link :to="`product/${search_keyword[n - 1]}`">
            <v-card flat tile hover>
              <v-img
                :src="require(`@/assets/1${n}.png`)"
                height="300px"
              ></v-img>
            </v-card>
          </router-link>
        </v-flex>
      </v-layout>

      <h1 class="product-type">MAJOR APPLIANCES</h1>

      <v-layout row wrap class="downmost">
        <v-flex v-for="n in 4" :key="n" xs3 class="border">
          <router-link :to="`product/${search_keyword[n + 3]}`">
            <v-card flat tile hover>
              <v-img
                :src="require(`@/assets/2${n}.png`)"
                height="300px"
              ></v-img>
            </v-card>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      search_keyword: [
        "laptops",
        "lcd monitors",
        "cell phones",
        "pc",
        "refrigerators",
        "washing machines",
        "microwaves",
        "gas stoves"
      ]
    };
  }
};
</script>

<style scoped>
.text-1 {
  color: white;
  padding-top: 250px;
  margin-left: 30px;
}
.text-2 {
  color: white;
  letter-spacing: 5px;
  font-size: 56px;
  margin-left: 30px;
}
.text-3 {
  padding-top: 220px;
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
.product-type {
  padding-top: 60px;
}
.downmost {
  margin-bottom: 50px;
}
</style>
