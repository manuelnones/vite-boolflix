<script>
import { store } from '../store';

export default {
    name: `AppNav`,
    data() {
        return {
            store,
            logoImg: `/img/logo-netflix.png`
        }
    },

    emits: [`clickButton`],
}
</script>

<template>
    <nav>
        <div id="left-nav">
            <div id="logo">
                <img :src="logoImg" alt="">
            </div>

            <ul id="links">
                <li>Home</li>
                <li>Serie TV</li>
                <li>Film</li>
                <li>Nuovi e popolari</li>
                <li>La mia lista</li>
                <li>Sfoglia per lingua</li>
            </ul>
        </div>

        <div id="search-bar">
            <input v-model="store.inputText" type="text" @keyup.enter="$emit(`clickButton`)"
                placeholder="Inserisci titolo di un film">
            <button @click="$emit(`clickButton`)">Cerca</button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    height: 100px;
    background-color: rgb(0, 0, 0);

    #left-nav {
        display: flex;

        #logo {
            width: 60px;
            height: 60px;
            margin-left: 50px;

            img {
                width: 100%;
            }
        }

        ul {
            display: flex;
            align-items: center;
            padding-left: 40px;

            li {
                padding-left: 15px;
                cursor: pointer;
            }

            li:hover {
                text-decoration: underline;
            }
        }
    }

    #search-bar {
        margin-right: 50px;

        input {
            width: 200px;
            padding: 5px;
        }

        button {
            padding: 5px;
            margin-left: 20px;
            cursor: pointer;
        }
    }

}
</style>