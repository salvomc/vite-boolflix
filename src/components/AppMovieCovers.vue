<script>
import { store } from '../store';
    export default {
        props:{
            MyMovies : Object
        },
        data() {
        return {
          store   
        }
    },
    }
    
</script>

<template>
    
    <div class="custom-card" :style="{'background-image':`url(${store.background_img_path}${MyMovies.poster_path})`}">
        <h1>{{ MyMovies.name }} {{ MyMovies.title }}</h1>
        <p>{{ MyMovies.original_name }} {{ MyMovies.original_title }}</p>
        <div><img class="flag" :src="'../../node_modules/country-flag-icons/flags/1x1/' + MyMovies.original_language.toUpperCase() + '.svg'" alt="IMMAGINE NON TROVATA"></div>
        <span>{{ MyMovies.overview }}</span>
        <p>{{ MyMovies.vote_average }}</p>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.flag{
    width: 30px;
    height: 30px;
}

.custom-card{
    width: 100%;
    height: 500px;
    font-weight: bold;
    text-align: center;
    overflow-y: auto;
    background-repeat: no-repeat;
    color: black;
}


</style>