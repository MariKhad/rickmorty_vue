<template v-once>
  <div class="container">
    <h1>Rick &amp; Morty</h1>
    <Filters />
    <ListCharacters />
    <Pagination />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { ListCharacters, Filters, Pagination } from "@components";
export default {
  name: "App",
  components: {
    ListCharacters,
    Filters,
    Pagination,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getCharacters");
    });
  },
};
</script>

<style lang="scss">
:root {
  --background-body: #24282f;
  --background-card: #3c3e44;
  --text-white: #fff;
  --text-gray: #c0c0c0;
  --text-green: #1aff00;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  margin-bottom: 2rem;
  text-align: center;
}

body {
  background-color: var(--background-body);
  background-size: contain;
  backdrop-filter: initial;
  color: var(--text-white);
  font-family: "segoe UI", Verdana, Geneva, Tahoma, sans-serif;
}

.container {
  width: 980px;
  max-width: 90%;
  margin: 2rem auto;
  padding: 10px;
}

img {
  width: 100%;
}
</style>
