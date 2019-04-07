<template>
  <v-container>
    <v-layout column>
      <v-flex xs12>
        <v-breadcrumbs :items="items" divider=">">
          <template v-slot:item="props">
            <router-link :to="props.item.to">{{
              props.item.text.toUpperCase()
            }}</router-link>
          </template>
        </v-breadcrumbs>
      </v-flex>
      <v-flex>
        <v-card>
          <v-layout row>
            <v-flex xs5>
              <v-card dark tile flat color="error">
                <v-img
                  :src="
                    `https://loremflickr.com/300/300/${
                      $route.query.search
                    }?lock=${$route.params.num}`
                  "
                  contain
                ></v-img>
              </v-card>
            </v-flex>
            <v-flex xs7>
              <v-card tile flat>
                <v-card-title>
                  <div style="width: 100%;">
                    <div class="title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                    <div class="mt-3">
                      <span primary class="subheading"
                        >US ${{ Math.round(Math.random() * 50) + 50 }} -
                        {{ Math.round(Math.random() * 100) + 70 }}
                      </span>
                      <span class="grey--text">/price</span>
                    </div>
                    <div>
                      <span
                        >{{
                          new Intl.NumberFormat().format(
                            Math.round(Math.random() * 2000) + 1
                          )
                        }}
                        Prices</span
                      >
                    </div>
                  </div>
                  <v-divider />
                  <div>
                    <v-btn color="warning"
                      ><v-icon>mail_outline</v-icon>&nbsp;Contact
                      Supplier</v-btn
                    >
                  </div>
                  <v-divider />
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    items() {
      return [
        {
          text: "Home",
          to: { name: "home" }
        },
        {
          text: this.$route.params.search,
          to: {
            name: "product",
            params: {
              search: this.$route.params.search
            }
          }
        },
        {
          text: this.$route.params.num + "",
          to: ""
        }
      ];
    }
  }
};
</script>
