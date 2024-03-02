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
    background: linear-gradient(43deg, #3854dc, #3fa09a 46%, #1aff00 100%);
    color: cornsilk;
  }
  ::placeholder {
    color: #ffcc70;
    text-align: start;
  }
}
</style>
