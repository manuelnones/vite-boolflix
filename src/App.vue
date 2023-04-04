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
    // film in evidenzia
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=c001873ce5a6e47be97bce29c2e7b989`).then((res) => {
      this.store.arrayFilm = res.data.results;
    })

    // serie tv in evidenzia
    axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=c001873ce5a6e47be97bce29c2e7b989`).then((res) => {
      this.store.arraySeries = res.data.results;
    })
  },

  methods: {
    search() {
      this.searchFilm();
      this.searchSeries();
    },

    searchFilm() {
      axios.get(this.store.standardApi + this.store.searchFilm + this.store.apiKey + this.store.query + this.store.inputText).then((res) => {
        this.store.arrayFilm = res.data.results
        console.log(res.data.results)
      });
    },

    searchSeries() {
      axios.get(this.store.standardApi + this.store.searchSeries + this.store.apiKey + this.store.query + this.store.inputText).then((res) => {
        this.store.arraySeries = res.data.results
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
  <AppNav @clickButton="search()"></AppNav>
  <AppMain></AppMain>
</template>

<style lang="scss"></style>
