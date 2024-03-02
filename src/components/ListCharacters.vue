<template>
  <section>
    <div class="characters">
      <div
        class="characters__item"
        v-for="character in characters"
        :key="character.id">
        <CardCharacter :character="character" />
      </div>
      <div
        class="characters__item"
        v-for="repeat in 9"
        :key="repeat"
        v-if="isLoading">
        <CardLoading />
      </div>
    </div>
  </section>
  <ModalCharacter />
</template>
<script>
import { CardCharacter, CardLoading, ModalCharacter } from "@components";
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    CardCharacter,
    ModalCharacter,
    CardLoading,
  },

  setup() {
    const store = useStore();

    const characters = computed(() => {
      return store.state.charactersFilter;
    });

    const isLoading = computed(() => {
      if (store.state.isLoading > 0) {
        return false;
      } else {
        return true;
      }
    });

    onMounted(() => {
      store.dispatch("getCharacters");
    });

    return {
      characters,
    };
  },
};
</script>
<style>
.characters {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21.5%, 1fr));
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(27.5%, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(44.5%, 1fr));
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
}
</style>
