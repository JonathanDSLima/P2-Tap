<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="2" md="2">
          <v-text-field label="Nome da moeda" v-model="coinName"></v-text-field>
        </v-col>

        <v-col cols="2" md="2">
          <v-text-field label="Quantidade" v-model="quantity"></v-text-field>
        </v-col>

        <v-col cols="2" md="2">
          <v-text-field label="Preço de venda" v-model="priceBuy"></v-text-field>
        </v-col>

        <v-col cols="2" md="2">
          <v-text-field label="Preço de compra" v-model="priceSeller"></v-text-field>
        </v-col>

        <v-col cols="2" md="2">
          <v-text-field label="Data" v-model="dat"></v-text-field>
        </v-col>

        <v-col cols="2" md="2">
          <v-text-field label="Tipo de ação" v-model="typeAction"></v-text-field>
        </v-col>
      </v-row>
      <v-button v-if="!getId()" v-on:click="submit" class="submit">Salvar</v-button>
      <v-button v-else v-on:click="submit" class="submit">Alterar</v-button>
    </v-container>
  </v-form>
</template>
<script>
import Vue from "vue";
import router from "./../routes";
import CriptoService from "../services/CriptoService";

export default {
  props: {
    data: {},
  },
  data: () => ({
    coinName: "",
    quantity: "",
    priceBuy: "",
    priceSeller: "",
    dat: "",
    typeAction: "",
  }),
  methods: {
    navigationBack() {
      router.go("/list-transaction");
      router.push("/list-transaction");
    },

    buildTransaction() {
      return {
        coinName: this.coinName,
        quantity: this.quantity,
        priceBuy: this.priceBuy,
        priceSeller: this.priceSeller,
        dat: this.dat,
        typeAction: this.typeAction,
      };
    },
    submit() {
      let transaction = this.buildTransaction();
      CriptoService.createTransaction(transaction)
        .then((response) => {
          this.navigationBack();
          console.log(response);
        })
        .catch((error) => console.error(error));
    },
    getId() {
      let aux = this.$route.params.id;
      return aux;
    },
    submit() {
      let transaction = this.buildTransaction();
      CriptoService.createTransaction(transaction)
        .then((response) => {
          this.navigationBack();
          console.log(response);
        })
        .catch((error) => console.error(error));
    },
  },
  mounted() {
    console.log("O id é: " + this.$route.params.id);
  },
};
</script>
<style scoped>
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  width: 20vw;
}

.submit {
  color: #ffffff;
  background-color: #2a9d8f;
  font-family: cursive;
  font-size: 0.8vw;
  padding: 1vw;
  border-radius: 1vw;
  cursor: pointer;
}

h3 {
  color: #2a9d8f;
}
</style>
