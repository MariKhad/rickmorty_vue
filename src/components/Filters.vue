<template>
  <form @submit.prevent="showData" class="container">
    <FilterByName />
    <FilterByStatusSelect />
    <button class="btn" type="submit">Show</button>
  </form>
</template>

<script>
import FilterByName from "./FilterByName.vue";
import FilterByStatusSelect from "./FilterByStatusSelect.vue";
import { useStore } from "vuex";

export default {
  components: {
    FilterByName,
    FilterByStatusSelect,
  },
  setup() {
    const store = useStore();

    const showData = async () => {
      try {
        await store.dispatch("getCharacters");
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      }
    };

    return {
      showData,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1300px;
  width: 100%;
  padding: 0px;
  display: grid;
  grid-template-columns: 7fr 2fr 1fr;
  gap: 10px;
  align-items: center;

  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.btn {
  height: 53px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 0 0.5rem;
  background: linear-gradient(43deg, #3854dc, #3fa09a 46%, #1aff00 100%);
  color: cornsilk;

  @media (max-width: 660px) {
    width: 100%;
  }

  &:hover {
    color: var(--background-body);
  }
  &:active {
    transform: translate(2px, 2px);
  }
}
</style>
