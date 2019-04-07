<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex
        v-for="n in 40"
        :key="n"
        xs2
        class="border"
        :class="n % 5 == 1 ? 'offset-xs1' : ''"
      >
        <v-card hover>
          <v-img
            :src="
              `https://loremflickr.com/300/300/electronics,component&random=${Math.random()}`
            "
            height="200px"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
</template>

<style scoped>
.border {
  border: darkgray;
  border-style: solid;
  border-width: 1px;
}
</style>
