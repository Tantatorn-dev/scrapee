<template>
  <div>
    <v-layout>
      <v-flex xs12>
        <v-card dark tile flat color="primary">
          <v-card-text class="display-1">{{ title }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex v-for="n in 40" :key="n" xs3 class="border">
          <v-card hover>
            <v-img
              :src="
                `https://loremflickr.com/300/300/${
                  $route.params.search
                }&random=${Math.random()}`
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
    title() {
      var title = this.$route.params.search;
      title = title.replace(",", " ");
      title = title.charAt(0).toUpperCase() + title.slice(1);
      return title;
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
