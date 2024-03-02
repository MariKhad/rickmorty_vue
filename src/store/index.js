import { createStore } from "vuex";
import { URL } from "../../const";

export default createStore({
  state: {
    characters: Array,
    charactersFilter: Array,
    status: "",
    name: "",
    prev: "",
    next: String,
    person: Object,
    isLoading: Boolean,
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },
    setPrev(state, payload) {
      state.prev = payload;
    },
    setNext(state, payload) {
      state.next = payload;
    },
    setDataPerson(state, payload) {
      state.person = payload;
    },
    setStatus(state, payload) {
      state.status = payload;
    },
    setName(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    async getCharacters({ state, commit }, page) {
      try {
        if (page) {
          commit("isLoading", true);
          const response = await fetch(page);
          const { results, info } = await response.json();
          commit("setCharacters", results);
          сommit("setCharactersFilter", results);
          commit("setNext", info.next);
          commit("setPrev", info.prev);
        } else {
          const response = await fetch(
            `${URL}?name=${state.name}&status=${state.status}`,
          );
          const { results, info } = await response.json();
          commit("setCharacters", results);
          commit("setCharactersFilter", results);
          commit("setNext", info.next);
        }
        commit("isLoading", false);
      } catch (error) {
        commit("setCharactersFilter", []);
        commit("setNext", "");
        commit("setPrev", "");
      }
    },

    async getAllDataPerson({ commit }, idPerson) {
      try {
        commit("isLoading", true);
        const res = await fetch(`${URL}/${idPerson}`);
        const data = await res.json();
        commit("setDataPerson", data);
        commit("isLoading", false);
      } catch (error) {
        alert("error on get data person: ", error);
      }
    },

    filterByStatus({ commit, state }, status) {
      commit("setStatus", status.toLowerCase());
      console.log(state.status);
    },

    filterByName({ commit, state }, name) {
      commit("setName", name.toLowerCase());
      console.log(state.name);
    },
  },
});
