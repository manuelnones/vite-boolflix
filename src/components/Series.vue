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

    computed: {
        imageSeries() {
            return this.store.baseImageApi + this.store.dimensionImageApi + this.series.poster_path
        },

        transformVote() {
            return Math.ceil(this.series.vote_average / 10 * 5);
        },

        seriesLanguage() {
            if (this.series.original_language == "en") {
                return "gb";

            } else if (this.series.original_language == "ja") {
                return "jp";

            } else if (this.series.original_language == "ko") {
                return "kr";

            } else if (this.series.original_language == "zh") {
                return "cn";

            } else {
                return this.series.original_language;
            }
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
        <strong>Lingua: </strong><span :class="`fi fi-` + seriesLanguage"></span>
        <br>
        <strong>Voto:</strong> <i v-for="star in transformVote" class="fa-solid fa-star" style="color:#ffd500 ;"></i>
        <i v-for="star in 5 - transformVote" class="fa-regular fa-star" style="color: #ffd500;"></i>
    </div>
</template>

<style lang="scss" scoped>
.single-serie {
    min-width: 342px;
    height: 500px;
    padding: 10px;
    border: 1px solid gray;
    color: black;
}
</style>