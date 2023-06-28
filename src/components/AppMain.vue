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
  
  <div class="container custom-container-margin">
    <div class="row">
        <div class="col">
            <ul class="d-flex flex-wrap justify-content-center custom-ul-padding">
                <li class="custom-card m-1" v-for="(movie, index) in store.movieCatalogue" :key="index"><AppMovieCovers :MyMovies="movie" /></li>
            </ul>
        </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

.custom-container-margin{
  max-width: 1750px;
  margin-top: 7rem;
}
.custom-ul-padding{
  padding-left: 0rem;
}
.custom-card{
  margin-top: 10px;
  margin-bottom: 10px;
}
  
</style>