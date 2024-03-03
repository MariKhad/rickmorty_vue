<template>
  <div class="buttons">
    <button
      class="btn"
      @click="showPrevPage(pagePrev)"
      v-if="pagePrev !== null">
      ⬅ Back
    </button>
    <button
      class="btn"
      @click="showNextPage(pageNext)"
      v-if="pageNext !== null">
      Next ➡
    </button>
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
      if (pagePrev) {
        store.dispatch("getCharacters", pagePrev);
      }
    };
    const showNextPage = (pageNext) => {
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
  margin: 2rem auto 0;
  display: flex;
  justify-content: center;
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

    @media (max-width: 480px) {
      &:hover {
        color: cornsilk;
      }
    }
  }
}
</style>
