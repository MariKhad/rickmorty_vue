<template>
  <div class="filter">
    <select class="select" @change="handleFilter">
      <option value="">All</option>
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const handleFilter = (event) => {
      const status = event.target.value;
      store.dispatch("filterByStatus", status);
    };

    return {
      handleFilter,
    };
  },
};
</script>

<style lang="scss">
.filter {
  width: auto;
  height: 53px;
  margin: 0;
  overflow: hidden;
  outline: none;
}

.select {
  width: 100%;
  padding-left: 5px;
  background-color: var(--background-card);
  border: none;
  border-radius: 10px;
  appearance: none;
  cursor: pointer;
  outline: 1px solid transparent;
  color: cornsilk;

  &:hover {
    background-color: #3c3e44;

    color: var(--text-green);
    border: none;
  }
}
</style>
