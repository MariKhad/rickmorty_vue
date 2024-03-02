<template>
  <div class="filter">
    <select class="select" @change="handleFilter">
      <option value="">All</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
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
      store.dispatch("setStatus", status);
    };

    return {
      handleFilter,
    };
  },
};
</script>

<style lang="scss" scoped>
.filter {
  height: 53px;
  overflow: hidden;
  outline: none;
}

.select {
  padding: 0 0.5rem;
  background-color: var(--background-card);
  border: none;
  border-radius: 10px;
  appearance: none;
  cursor: pointer;
  outline: 1px solid transparent;
  color: cornsilk;

  @media (max-width: 660px) {
    width: 100%;
  }

  &:hover {
    background-color: #3c3e44;

    color: var(--text-green);
    border: none;
  }
}
</style>
