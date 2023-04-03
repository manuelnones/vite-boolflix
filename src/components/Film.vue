<script>
import { store } from '../store';
export default {
    name: `Film`,
    data() {
        return {
            store,
        }
    },

    props: {
        film: Object,
    }
}
</script>

<template>
    <div class="film">
        <strong>Titolo:</strong> {{ film.title }}
        <strong>Titolo originale:</strong> {{ film.original_title }}
        <strong>Lingua:</strong> {{ film.original_language }}
        <strong>Voto:</strong> {{ film.vote_average }}
    </div>
</template>

<style lang="scss" scoped>
.film {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    padding: 10px;
    border: 1px solid gray;
}
</style>