<script>
   import {store} from '../store';
   import AppMovieCovers from './AppMovieCovers.vue';
  export default {
    components:{
        AppMovieCovers,
    },
    data() {
        return {
          store   
        }
    },
  }
</script>

<template>
  
  <div class="container">
    <div class="row">
        <div class="col">
            <ul class="d-flex flex-wrap justify-content-center">
                <li class="col-lg-3 col-d-4 col-12 card" v-for="(movie, index) in store.movieCatalogue" :key="index"><AppMovieCovers :MyMovies="movie" /></li>
            </ul>
        </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;
  
</style>