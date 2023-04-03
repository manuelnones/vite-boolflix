<script>
import { store } from './store';
import axios from "axios";

import AppNav from "./components/AppNav.vue";
import AppMain from "./components/AppMain.vue";
export default {
  data() {
    return {
      store,
    }
  },

  created() {
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=c001873ce5a6e47be97bce29c2e7b989`).then((res) => {
      this.store.arrayFilm = res.data.results;
    })
  },

  methods: {
    clickButton() {
      axios.get(this.store.standardApi + this.store.searchFilm + this.store.apiKey + this.store.query + this.store.inputText).then((res) => {
        this.store.arrayFilm = res.data.results
      });
    }
  },

  components: {
    AppNav,
    AppMain,
  },
}
</script>

<template>
  <AppNav @clickButton="clickButton()"></AppNav>
  <AppMain></AppMain>
</template>

<style lang="scss"></style>
