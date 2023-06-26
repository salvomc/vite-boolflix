<script>
  import AppMain from './components/AppMain.vue';
  import { store } from './store';
  import axios from 'axios';
  export default {
    components:{
      AppMain
    },
    data(){
    },mounted(){
      axios.get(store.apiUrl).then((response)=> 
      {
      store.movieCatalogue = response.data.results
      })
    }
  }
</script>

<template>
  <div>
    
  </div>
</template>

<style lang="scss">
  
</style>