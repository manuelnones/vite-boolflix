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
    <div id="big-img">
        <h2 id="subtitle-film">Film</h2>
    </div>
    <ul id="film-list">
        <Film v-for="film in store.arrayFilm" :film="film" class="film"></Film>
    </ul>

    <h2 id="subtitle-serie">Serie TV</h2>
    <ul id="series-list">
        <Series v-for="serie in store.arraySeries" :series="serie"></Series>
    </ul>
</template>

<style lang="scss" scoped>
#big-img {
    position: relative;
    background-image: url(https://www.nerdevil.it/wp-content/uploads/2021/07/tenebre-e-ossa-stagione-1-recensione-nerdevil.jpg);
    background-size: cover;
    height: 600px;
    width: 100%;

    #subtitle-film {
        position: absolute;
        bottom: 0;
        left: 40px;
    }
}

#film-list {
    display: flex;
    margin-left: 40px;
    overflow-x: auto;
}

#series-list {
    display: flex;
    margin-left: 40px;
    margin-bottom: 50px;
    overflow-x: auto;
}

#subtitle-serie {
    margin-top: 40px;
    margin-left: 40px;
    cursor: default;
}
</style>