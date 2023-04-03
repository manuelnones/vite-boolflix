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

    mounted() {
        if (this.film.original_language == "en") {
            this.flagLanguage = "gb";
        } else if (this.film.original_language == "ja") {
            this.flagLanguage = "jp";
        } else if (this.film.original_language == "ko") {
            this.flagLanguage = "kr";
        } else if (this.film.original_language == "zh") {
            this.flagLanguage = "cn";
        } else {
            this.flagLanguage = this.film.original_language;
        }
    }
}
</script>

<template>
    <div class="single-film">
        <strong>Titolo:</strong> {{ film.title }}
        <strong>Titolo originale:</strong> {{ film.original_title }}
        <strong>Lingua:</strong> {{ film.original_language }} - <span :class="`fi fi-` + flagLanguage"></span>
        <strong>Voto:</strong> {{ film.vote_average }}
    </div>
</template>

<style lang="scss" scoped>
.single-film {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    padding: 10px;
    border: 1px solid gray;
}
</style>