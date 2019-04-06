<template>
  <div class="text-xs-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="#FFFFFF"
          v-on="on"
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
