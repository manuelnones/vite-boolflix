<script>
import { store } from '../store';

import Film from './Film.vue';
import Series from './Series.vue';
export default {
    name: `AppMain`,
    data() {
        return {
            store,
        }
    },

    components: {
        Film,
        Series,
    }
}
</script>

<template>
    <h1>FILM</h1>
    <ul id="film-list">
        <Film v-for="film in store.arrayFilm" :film="film" class="film"></Film>
    </ul>

    <h1>SERIE TV</h1>
    <ul id="series-list">
        <Series v-for="serie in store.arraySeries" :series="serie"></Series>
    </ul>
</template>

<style lang="scss" scoped>
#film-list {
    display: flex;
    margin: 40px;
    overflow-x: auto;
}

#series-list {
    display: flex;
    margin: 40px;
    overflow-x: auto;
}

h1 {
    text-align: center;
    margin-top: 40px;
    color: red;
    cursor: default;
}
</style>