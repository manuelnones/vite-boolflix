<script>
import { store } from '../store';

import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    name: `Film`,
    data() {
        return {
            store,
            flagLanguage: "",
        }
    },

    props: {
        film: Object,
    },

    computed: {
        imageFilm() {
            return this.store.baseImageApi + this.store.dimensionImageApi + this.film.poster_path
        },

        transformVote() {
            return Math.ceil(this.film.vote_average / 10 * 5);
        },

        filmLanguage() {
            if (this.film.original_language == "en") {
                return "gb";

            } else if (this.film.original_language == "ja") {
                return "jp";

            } else if (this.film.original_language == "ko") {
                return "kr";

            } else if (this.film.original_language == "zh") {
                return "cn";

            } else {
                return this.film.original_language;
            }
        }
    },
}
</script>

<template>
    <div class="single-film" :style="{ backgroundImage: `url(` + imageFilm + `)` }">
        <div class="text-info-film">
            <strong>Titolo:</strong> {{ film.title }}
            <br>
            <strong>Titolo originale:</strong> {{ film.original_title }}
            <br>
            <strong>Lingua: </strong><span :class="`fi fi-` + filmLanguage"></span>
            <br>
            <strong>Voto:</strong> <i v-for="star in transformVote" class="fa-solid fa-star" style="color:#ffd500 ;"></i>
            <i v-for="star in 5 - transformVote" class="fa-regular fa-star" style="color: #ffd500;"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.single-film {
    min-width: 342px;
    height: 500px;
    padding: 10px;
    border: 1px solid gray;
    color: black;
}
</style>