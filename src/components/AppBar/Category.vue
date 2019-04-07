<template>
  <div class="text-xs-center category">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn large class="dropdown" light flat v-on="on">
          Category
        </v-btn>
      </template>
      <v-list>
        <v-list-tile v-for="(item, index) in items" :key="index">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Computer and Telecommunication" },
      { title: "Major Appliance" },
      { title: "Minor Appliance" }
    ]
  })
};
</script>

<style scoped>
.dropdown {
  margin-bottom: 15px;
}
.category {
  padding-top: 8px;
}
</style>
