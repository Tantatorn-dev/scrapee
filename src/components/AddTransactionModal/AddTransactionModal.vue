<template>
  <v-layout row justify-center>
    <v-dialog v-model="active" max-width="600px">
      <template v-slot:activator="{on}">
        <v-btn color="primary" v-on="on">Add Transaction</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add transaction</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex sx12 sm6 md4>
                <v-text-field v-model="order" label="Order" required></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field v-model="description" label="Description" hint="told your client"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  v-model="catagory"
                  :items="['iron','circuit','electric','other']"
                  label="Catagory"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select v-model="type" :items="['Sell','Buy']" label="Type" required></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="amount" type="number" label="Amount" required></v-text-field>
              </v-flex>
              <v-flex>
                <v-select
                  v-model="unit"
                  :items="['Kgs','Tons','Grams','Pcs.']"
                  label="Unit"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field v-model="price" type="number" label="Price per unit" required></v-text-field>
              </v-flex>
              <v-flex xs3 sm3>
                <v-btn>Add Image</v-btn>
              </v-flex>
              <v-flex>
                <v-btn
                  @click="onAccept({order,catagory,description,type,unit,amount,price});resetForm();"
                >Add</v-btn>
                <v-btn @click="resetForm()" outline color="error">Cancle</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "trans-modal",
  data() {
    return {
      active: false,
      order: "",
      description: "",
      catagory: "",
      type: "",
      amount: 0,
      unit: "",
      price: 0
    };
  },
  props: {
    onAccept: Function
  },
  methods: {
    resetForm() {
      this.active = false;
      this.order = "";
      this.description = "";
      this.catagory = "";
      this.type = "";
      this.amount = 0;
      this.unit = "";
      this.price = 0;
    }
  }
};
</script>

<style>
</style>
