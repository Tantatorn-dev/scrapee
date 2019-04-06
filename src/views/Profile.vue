<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md4>
        <material-card class="v-card-profile">
          <v-layout row class="data">
            <v-avatar slot="offset" class="mx-auto d-block" size="130">
              <img
                src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
              >
            </v-avatar>
            <v-card-text class="text-xs-center">
              <h3 class="card-title font-weight-light">Noppanat Panlutan</h3>
              <h3>10 changes</h3>
              <h3>10 achievements</h3>
            </v-card-text>
          </v-layout>
          <v-flex class="text-xs-center">
            <v-btn flat> Overview </v-btn>
            <v-btn flat> Stats </v-btn>
            <v-btn flat to="/achievement"> Achievement </v-btn>
          </v-flex>
        </material-card>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Profile"
  //
};
</script>

<style scoped>
.data{
  margin-top: 30px;
}
</style>

