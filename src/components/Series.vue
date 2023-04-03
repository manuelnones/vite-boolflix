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
    }
}
</script>

<template>
    <div class="single-serie">
        <strong>Titolo:</strong> {{ series.name }}
        <strong>Titolo originale:</strong> {{ series.original_name }}
        <strong>Lingua:</strong> {{ series.original_language }} - <span :class="`fi fi-` + flagLanguage"></span>
        <strong>Voto:</strong> {{ series.vote_average }}
    </div>
</template>

<style lang="scss" scoped>
.single-serie {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    padding: 10px;
    border: 1px solid gray;
}
</style>