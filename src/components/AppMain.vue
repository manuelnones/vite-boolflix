<script>
import { store } from '../store';

import Film from './Film.vue';
export default {
    name: `AppMain`,
    data() {
        return {
            store,
        }
    },

    components: {
        Film,
    }
}
</script>

<template>
    <ul id="film-list">
        <Film v-for="film in store.arrayFilm" :film="film"></Film>
    </ul>
</template>

<style lang="scss" scoped>
#film-list {
    display: flex;
    margin: 40px;
    overflow-x: auto;
}
</style>