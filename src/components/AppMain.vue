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
    <h2>FILM</h2>
    <ul id="film-list">
        <Film v-for="film in store.arrayFilm" :film="film" class="film"></Film>
    </ul>

    <h2>SERIE TV</h2>
    <ul id="series-list">
        <Series v-for="serie in store.arraySeries" :series="serie"></Series>
    </ul>
</template>

<style lang="scss" scoped>
#film-list {
    display: flex;
    margin: 40px;
    margin-top: 20px;
    overflow-x: auto;
}

#series-list {
    display: flex;
    margin: 40px;
    margin-top: 20px;
    overflow-x: auto;
}

h2 {
    margin-top: 40px;
    margin-left: 40px;
    cursor: default;
}
</style>