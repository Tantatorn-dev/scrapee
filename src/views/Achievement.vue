<template>
  <v-layout row>
    <v-layout row>
      <v-flex>
        <v-card>
          <v-toolbar color="light-blue" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Achievement</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-list two-line subheader>
            <v-list-tile v-for="item in items" :key="item.title" avatar>
              <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{
                  item.subtitle
                }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  name: "Achievement",
  data() {
    return {
      items: [
        {
          icon: "attach_money",
          iconClass: "red lighten-1 white--text",
          title: "The great trash keeper",
          subtitle: "Make 10 changes"
        },
        {
          icon: "attach_money",
          iconClass: "red lighten-1 white--text",
          title: "Environmental Guardian",
          subtitle: "Make 100 changes"
        },
        {
          icon: "attach_money",
          iconClass: "amber white--text",
          title: "Mr. cleaner",
          subtitle: "Make 1 change"
        },
        {
          icon: "attach_money",
          iconClass: "amber white--text",
          title: "Merry go green",
          subtitle: "Make a change in the suburban area"
        },
        {
          icon: "attach_money",
          iconClass: "red lighten-1 white--text",
          title: "Everywhere man",
          subtitle: "Make 10 changes in different countries"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
