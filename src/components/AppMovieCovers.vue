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
    },methods:
    {
        obtainRating(){
            let rating = Math.ceil(this.MyMovies.vote_average / 2)
            return rating
        },
        obtainEmptyStars(){
            let empty_stars = 5 - (Math.ceil(this.MyMovies.vote_average / 2))
            return empty_stars
        }
        },mounted(){
            this.obtainRating()
            this.obtainEmptyStars()
        }
    }
</script>

<template>
    
    <div class="custom-card" :style="{'background-image':`url(${store.background_img_path}${MyMovies.poster_path})`}">
        <h1>{{ MyMovies.name }} {{ MyMovies.title }}</h1>
        <p>{{ MyMovies.original_name }} {{ MyMovies.original_title }}</p>
        <div><img class="flag" :src="'../../node_modules/country-flag-icons/flags/1x1/' + MyMovies.original_language.toUpperCase() + '.svg'" alt="IMMAGINE NON TROVATA"></div>
        <p>{{ MyMovies.overview }}</p>
        <span v-for="rating in obtainRating()" :key="rating"><i class="fa-solid fa-star" style="color: goldenrod;"></i></span>
        <span v-for="empty_stars in obtainEmptyStars()" :key="empty_stars"><i class="fa-regular fa-star" style="color: goldenrod;"></i></span>
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