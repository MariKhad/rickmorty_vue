<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search by name"
      v-model="name"
      @keyup="filter()" />
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const name = ref("");

    const filter = () => {
      store.dispatch("setName", name.value);
    };
    return {
      name,
      filter,
    };
  },
};
</script>
<style lang="scss">
.search {
  width: auto;
  input {
    height: 53px;
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 0 1rem;
    background-color: var(--background-card);
    color: cornsilk;
  }

  @media (max-width: 660px) {
    width: 100%;
  }
  ::placeholder {
    color: #ffcc70;
    text-align: start;
  }
}
</style>
