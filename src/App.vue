<script>
  import AppMain from './components/AppMain.vue';
  import AppHeader from './components/AppHeader.vue';
  import AppMovieCovers from './components/AppMovieCovers.vue';
  import { store } from './store';
  import axios from 'axios';
  export default {
    components:{
      AppMain,
      AppHeader,
      AppMovieCovers,
    },
    data(){
      return{
        store
      }
    },  
    methods: {
      searchMovie()
      {
        if(store.movieCatalogue !== '')
        {
          let filteredUrl = store.apiUrl + store.search_name + store.searchMovies
          axios.get(filteredUrl).then((response)=> 
          {
            store.movieCatalogue = response.data.results
          })  
        }
      },
    }
  }  
</script>

<template>
  <div>
    
    <AppHeader @search="searchMovie()"/>
    <AppMain/>

  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
  
</style>