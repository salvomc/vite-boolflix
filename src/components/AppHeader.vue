<script>
import { store } from '../store';
  export default {
    data(){
        return{
            store
        }
    }, computed:{
 
    }
  }
</script>

<template>
 
 <div class="container">
    <div class="row">
        <div class="col">
            <h1>Boolflix</h1>
            <div>
                <input type="text" placeholder="search" v-model="store.searchMovies" @keyup.enter="$emit('search')" >
                <button class="btn" @click="$emit('search')">Cerca</button>
            </div>
        </div>
    </div>
  </div>

</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
  
</style>