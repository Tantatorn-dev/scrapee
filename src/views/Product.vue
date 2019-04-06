<template>
  <v-container grid-list-md fluid fill-height>
    <v-layout row wrap>
      <v-flex
        v-for="n in 40"
        :key="n"
        xs2
        class="border"
        :class="n % 5 == 1 ? 'offset-xs1' : ''"
      >
        <v-card flat tile hover>
          <v-img
            :src="
              `https://unsplash.it/200/300?image=${Math.floor(
                Math.random() * 100
              ) + 1}`
            "
            height="200px"
          ></v-img>
          <v-card-title>
            <div style="width: 100%;">
              <div class="text-truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="mt-3">
                <span primary class="title">US $500.00</span>
                <span class="grey--text">/price</span>
              </div>
              <span>1,000 prices</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.border {
  border: darkgray;
  border-style: solid;
  border-width: 1px;
}
</style>
