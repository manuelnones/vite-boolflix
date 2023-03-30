<script>
import { store } from '../store';

import FilmList from './FilmList.vue';
export default {
    name: `AppMain`,
    data() {
        return {
            store,
        }
    },

    components: {
        FilmList,
    }
}
</script>

<template>
    <FilmList></FilmList>
</template>

<style lang="scss" scoped></style>