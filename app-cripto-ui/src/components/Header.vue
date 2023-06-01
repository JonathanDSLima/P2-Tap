<template>
  <div class="background">
    <div class="container">
      <h2 @click="home()">App - Cripto</h2>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import router from "./../routes";

export default {
  name: "header",
   methods: {
    home() {
      router.push("/list-transaction");
    },
  },
};
</script>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  background-color: #2a9d8f;
  font-family: cursive;
  width: 50vw;
  border-radius: 0.5vw;
  margin-top: 0.5vw;
  cursor: pointer;
}
</style>