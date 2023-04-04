<script>
import { store } from '../store';

import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    name: `Series`,
    data() {
        return {
            store,
            flagLanguage: "",
        }
    },

    props: {
        series: Object,
    },

    mounted() {
        if (this.series.original_language == "en") {
            this.flagLanguage = "gb";
        } else if (this.series.original_language == "ja") {
            this.flagLanguage = "jp";
        } else if (this.series.original_language == "ko") {
            this.flagLanguage = "kr";
        } else if (this.series.original_language == "zh") {
            this.flagLanguage = "cn";
        } else {
            this.flagLanguage = this.series.original_language;
        }
    },

    computed: {
        imageSeries() {
            return this.store.baseImageApi + this.store.dimensionImageApi + this.series.poster_path
        },

        transformVote() {
            return Math.ceil(this.series.vote_average / 10 * 5);
        }
    },
}
</script>

<template>
    <div class="single-serie" :style="{ backgroundImage: `url(` + imageSeries + `)` }">
        <strong>Titolo:</strong> {{ series.name }}
        <br>
        <strong>Titolo originale:</strong> {{ series.original_name }}
        <br>
        <strong>Lingua:</strong><span :class="`fi fi-` + flagLanguage"></span>
        <br>
        <strong>Voto:</strong> <i v-for="star in transformVote" class="fa-solid fa-star" style="color:#ffd500 ;"></i>
        <i v-for="star in 5 - transformVote" class="fa-regular fa-star" style="color: #ffd500;"></i>
    </div>
</template>

<style lang="scss" scoped>
.single-serie {
    min-width: 350px;
    height: 500px;
    padding: 10px;
    border: 1px solid gray;
    color: black;
}
</style>