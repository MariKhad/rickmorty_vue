<template>
  <select class="select" @change="handleFilter">
    <option value="">All</option>
    <option value="alive">Alive</option>
    <option value="dead">Dead</option>
    <option value="unknown">Unknown</option>
  </select>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const handleFilter = (event) => {
      const status = event.target.value;
      store.dispatch("setStatus", status);
    };

    return {
      handleFilter,
    };
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
  height: 53px;
  padding: 0 1rem;
  background-color: var(--background-card);
  color: #ffcc70;
  border: none;
  border-radius: 10px;
  appearance: none;
  cursor: pointer;
  outline: 1px solid transparent;

  &:hover {
    background-color: #3c3e44;

    color: var(--text-green);
    border: none;
  }
}
</style>
