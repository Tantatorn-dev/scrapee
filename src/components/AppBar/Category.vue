<template>
  <div class="text-xs-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          large
          color="#FFFFFF"
          v-on="on"
          class="dropdown"
        >
          Category
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click=""
        >
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
        { title: 'Computer and telecommunication' },
        { title: 'Refrigerator' },
        { title: 'Toys, leisure' },
        { title: 'Lighting device' }
      ]
    })
  }
</script>

<style scoped>
.dropdown{
  margin-bottom: 15px;
}
</style>
