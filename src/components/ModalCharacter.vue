<template>
  <article
    class="modal-container"
    @keyup.esc="closeModal"
    tabindex="0"
    @click.self="closeModal"
    v-if="modal">
    <section class="modal" v-if="Object.keys(person).length > 0">
      <figure>
        <img :src="person.image" :alt="person.name" />
      </figure>
      <header class="modal-text">
        <button class="close" @click="closeModal">X</button>
        <h2>{{ person.name }}</h2>
        <hr />
        <div>Status: {{ person.status }}</div>
        <div>Specie: {{ person.species }}</div>
        <div>Origin: {{ person.origin.name }}</div>
        <div>location: {{ person.location.name }}</div>
        <div>
          Created:
          {{
            new Intl.DateTimeFormat("en", {
              dateStyle: "full",
              timeStyle: "short",
            }).format(new Date(person.created))
          }}
        </div>
        <div>Gender: {{ person.gender }}</div>
        <div v-if="person.type">Type: {{ person.type }}</div>
      </header>
    </section>
    <section v-else>
      <h3>Loading . . .</h3>
    </section>
  </article>
</template>
<script>
"use strict";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "ModalCharacter",
  props: {
    modal: Boolean,
  },
  setup(props, { emit }) {
    const store = useStore();
    const person = computed(() => {
      return store.state.person;
    });
    const closeModal = () => {
      emit("closeM", false);
    };
    return {
      person,
      closeModal,
    };
  },
};
</script>
<style scoped lang="scss">
.modal-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  max-width: 90%;
  max-height: 85%;
  background: rgba(36, 36, 36, 0.5);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  color: whitesmoke;
  display: flex;
  padding: 0.8rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  &-text {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    word-wrap: break-word;
    button {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 10px;
      margin: 0px 0px 10px 0px;
      top: 10px;
      color: whitesmoke;
      border: none;
      border-radius: 10px;
      background: transparent;

      &:hover {
        cursor: pointer;
        background: linear-gradient(43deg, #3854dc, #3fa09a 46%, #1aff00 100%);
      }

      &alt {
        background-color: transparent;
      }

      @media (max-width: 480px) {
        color: black;
        background-color: rgba(245, 245, 245, 0.2);
        right: 15px;
        top: 15px;
      }
    }

    h2 {
      margin-top: 0.5rem;
    }
  }
}

figure {
  margin-right: 1rem;

  img {
    height: 100%;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    margin-right: 0px;
  }
}
</style>
