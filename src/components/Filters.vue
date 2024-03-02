<template>
  <div class="container">
    <FilterByName class="input" />
    <FilterByStatusSelect class="select" />
    <button class="btn">Show</button>
  </div>
</template>

<script>
import FilterByName from "./FilterByName.vue";
import FilterByStatusSelect from "./FilterByStatusSelect.vue";

export default {
  components: {
    FilterByName,
    FilterByStatusSelect,
  },
  methods: {
    showData() {
      // Ваша логика обработки данных
    },
  },
};
</script>

<style scoped>
.container {
  min-width: 960px;
  margin: 0;
  display: grid;
  grid-template-columns: 7fr 2fr 1fr;
  gap: 10px;
  align-items: center;
}

.btn {
  height: 53px;
  width: 120px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 0 0.5rem;
  background: linear-gradient(43deg, #3854dc, #3fa09a 46%, #1aff00 100%);
  color: cornsilk;
  &:hover {
    color: var(--background-body);
  }
  &:active {
    transform: translate(2px, 2px);
  }
}
</style>
