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
          console.log(filteredUrl)
          store.newUrl = filteredUrl
          axios.get(filteredUrl).then((response)=> 
          {
            store.movieCatalogue = response.data.results
            console.log(store.movieCatalogue)
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
  
</style>