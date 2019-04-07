<template>
  <div>
    <AddTransactionModal :on-accept="addTransaction" />
    <v-layout row wrap>
      <v-flex
        v-for="item in transactionList"
        :key="item.order"
        class="transaction-list"
        lg4
        xs12
        md4
      >
        <Transaction
          :remove="removeTransaction"
          :edit="editTransaction"
          :data="item"
          :v-model="item"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Transaction from "../../components/Transaction/Transaction";
import AddTransactionModal from "../../components/AddTransactionModal/AddTransactionModal";

export default {
  components: {
    Transaction,
    AddTransactionModal
  },
  data() {
    return {
      transactionList: [
        {
          order: "รับเคสเปล่าคอมพวเตอร์",
          catagory: "metal",
          type: "Buy",
          amount: 10,
          unit: "pcs.",
          price: 50,
          description: "รับเคสเปล่าเพื่อนำไปรีไซเคิล บริเวรโพรเมเทอุส"
        },
        {
          order: "รับแผงวงจรอิเลกทรอนกส์ทุกประเภท",
          catagory: "circuit",
          type: "Buy",
          amount: 100,
          unit: "Kgs",
          price: 100,
          description: "รับแผงวงจรให้ราคาดี ทำลายอย่างถูกกฎหมาย"
        }
      ]
    };
  },
  methods: {
    removeTransaction(item) {
      let r = window.confirm("Are you sure about this?");
      if (r) {
        this.transactionList = this.transactionList.filter(elm => elm !== item);
      }
    },
    addTransaction(item) {
      this.transactionList.push(item);
    },
    editTransaction(item, patched) {
      this.transactionList[
        this.transactionList.findIndex(elm => elm === patched)
      ] = item;
    }
  }
};
</script>

<style>
.transaction-list {
  padding: 10px;
}
</style>
