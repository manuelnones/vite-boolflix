<script>
import { store } from '../store';

export default {
    name: `AppNav`,
    data() {
        return {
            store,
        }
    },

    emits: [`clickButton`],
}
</script>

<template>
    <nav>
        <input v-model="store.inputText" type="text" placeholder="Inserisci titlolo di un film">
        <button @click="$emit(`clickButton`)">Cerca</button>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 80px;

    input {
        width: 200px;
        padding: 10px;
    }

    button {
        padding: 10px;
        cursor: pointer;
    }
}
</style>