import { reactive } from "vue";

export const store = reactive({
    apiUrl: ' https://api.themoviedb.org/3/search/multi?api_key=e177161461a3d0b53b9fb15219b0a88e',
    movieCatalogue: [],
    searchMovies: '',
    search_name: '&query=',
    background_img_path: 'https://image.tmdb.org/t/p/w342',
})