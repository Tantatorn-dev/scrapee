<template>
  <div>
    <v-layout>
      <v-flex xs12>
        <v-card dark tile flat color="primary">
          <v-img :src="`/img/banners/${$route.params.search}.png`"> </v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex v-for="n in 40" :key="n" xs3 class="border">
          <v-card
            hover
            :to="{
              name: 'productDetail',
              params: {
                search: $route.params.search,
                num: n
              },
              query: {
                search: search
              }
            }"
          >
            <v-img
              :src="
                `https://loremflickr.com/300/300/${search}?lock=${n}&random=${Math.random()}`
              "
              height="300px"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-1"
                  ></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
            <v-card-title>
              <div style="width: 100%;">
                <div class="text-truncate">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div class="mt-3">
                  <span primary class="title"
                    >US ${{ Math.round(Math.random() * 50) + 50 }} -
                    {{ Math.round(Math.random() * 100) + 70 }}
                  </span>
                  <span class="grey--text">/price</span>
                </div>
                <span
                  >{{
                    new Intl.NumberFormat().format(
                      Math.round(Math.random() * 2000) + 1
                    )
                  }}
                  Prices</span
                >
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    search() {
      var keyword = {
        "cell phones": "cell phones",
        "gas stoves": "gas stove",
        laptops: "computer,laptops",
        "lcd monitors": "lcd monitor",
        microwaves: "microwaves,oven",
        pc: "pc",
        refrigerators: "refrigerators",
        "washing machines": "washing machines"
      };
      return keyword[this.$route.params.search] || this.$route.params.search;
    }
  }
};
</script>

<style scoped>
.border {
  border: darkgray;
  border-style: solid;
  border-width: 1px;
}
</style>
