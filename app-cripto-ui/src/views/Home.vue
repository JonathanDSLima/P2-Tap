<template>
  <div class="display">
    <ListTransaction />
  </div>
</template>

<script>
import ListTransaction from "../components/ListTransaction";

export default {
  name: "Home",
  components: {
    ListTransaction,
  },
  methods: {},
};
</script>

<style scoped>
.display {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
