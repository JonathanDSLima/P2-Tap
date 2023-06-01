<template>
  <div class="background">
    <div v-if="listTransaction.length > 0">
      <v-table class="table">
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Quantidade</th>
            <th class="text-left">Preço de compra</th>
            <th class="text-left">Preço de venda</th>
            <th class="text-left">Data</th>
            <th class="text-left">Tipo</th>
            <th class="text-left">Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in listTransaction" :key="item.id">
            <td>{{ item.coinName }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.priceBuy }}</td>
            <td>{{ item.priceSeller }}</td>
            <td>{{ item.data }}</td>
            <td>{{ item.typeAction }}</td>
            <td>
              <v-button @click="edit(item.id)" class="action">Editar</v-button>
              <v-button @click="delet(item.id)" class="action">Deletar</v-button>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <div class="addCompany">
      <div class="alert" v-if="listTransaction.length == 0">
        <p>Nenhuma transação cadastrada no sistema!</p>
      </div>
      <v-button v-if="!getId()"  @click="add()" class="add">Adicionar</v-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import router from "./../routes";
import CriptoService from "../services/CriptoService";

export default {
  data: () => ({
    listTransaction: [],
  }),
  methods: {
    getAll() {
      CriptoService.getTransactions()
        .then((response) => {
          let newListTransaction = response.data;
          this.listTransaction = newListTransaction;
        })
        .catch((error) => console.error(error));
    },
    delet(id) {
      console.log(id);
      CriptoService.deleteTransaction(id)
        .then((response) => {
        })
        .catch((error) => console.error(error));
    },
    edit(id) {
      router.push("/form-transaction/" + id);
    },
    add() {
      router.push("/form-transaction");
    },
    getId(){
      let aux = this.$route.params.id;
      return aux;
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.table {
  width: 60vw;
  text-align: start;
  margin: 2vw;
}

.add {
  color: #ffffff;
  background-color: #2a9d8f;
  font-family: cursive;
  font-size: 0.8vw;
  padding: 1vw;
  border-radius: 1vw;
  cursor: pointer;
}

.action {
  color: #ffffff;
  background-color: #2a9d8f;
  font-family: cursive;
  font-size: 0.5rem;
  padding: 1vw;
  border-radius: 1vw;
  cursor: pointer;
  margin-left: 0.3vw;
}

.addCompany {
  display: flex;
  align-items: baseline;
  height: 15vh;
}

.alert {
  background-color: #2a9d8f;
  border-radius: 0.5vw;
  margin: 1vw;
}

p {
  padding: 0.3vw;
  color: #ffffff;
  font-size: 0.8vw;
  font-family: inherit;
}
</style>
