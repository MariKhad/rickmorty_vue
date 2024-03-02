<template>
  <div class="buttons">
    <button class="btn" @click="showPrevPage(pagePrev)">⬅ Back</button>
    <button class="btn" @click="showNextPage(pageNext)">Next ➡</button>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const pageNext = computed(() => {
      return store.state.next;
    });
    const pagePrev = computed(() => {
      return store.state.prev;
    });

    const showPrevPage = (pagePrev) => {
      console.log('pagePrev: ', pagePrev);
      if (prevPage) {
        store.dispatch("getCharacters", pagePrev);
      }
    };
    const showNextPage = (pageNext) => {
      console.log('pageNext: ', pageNext);
      if (pageNext) {
        store.dispatch("getCharacters", pageNext);
      }
    };
    return {
      pagePrev,
      pageNext,
      showNextPage,
      showPrevPage,
    };
  },
};
</script>
<style lang="scss">
.buttons {
  width: 330px;
  margin: 2rem auto 0;
  .btn {
    height: 50px;
    width: 120px;
    margin: 10px;
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
}
</style>
