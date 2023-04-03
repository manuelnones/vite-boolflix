import { reactive } from "vue";
export const store = reactive({
    arrayFilm: [],
    arraySeries: [],
    standardApi: `https://api.themoviedb.org/3`,
    searchFilm: `/search/movie`,
    searchSeries: `/search/tv`,
    apiKey: `?api_key=c001873ce5a6e47be97bce29c2e7b989`,
    query: `&query=`,
    inputText: ``,
})