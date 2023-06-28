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
        <div class="hover-background">
            <h1>{{ MyMovies.name }} {{ MyMovies.title }}</h1>
            <p>{{ MyMovies.original_name }} {{ MyMovies.original_title }}</p>
            <div><img class="flag" :src="'../../node_modules/country-flag-icons/flags/1x1/' + MyMovies.original_language.toUpperCase() + '.svg'" alt="IMMAGINE NON TROVATA"></div>
            <p>{{ MyMovies.overview }}</p>
            <span v-for="rating in obtainRating()" :key="rating"><i class="fa-solid fa-star" style="color: #FFAB00;"></i></span>
            <span v-for="empty_stars in obtainEmptyStars()" :key="empty_stars"><i class="fa-solid fa-star" style="color: white;"></i></span>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.flag{
    width: 30px;
    height: 30px;
    display: none;
}

.custom-card{
    height: 510px;
    width: 320px;
    text-align: start;
    cursor: pointer;
    overflow-y: auto;
    color: white;
    background-color: rgb(38, 38, 38);
    background-repeat: no-repeat;
    background-position: bottom;
}
.hover-background{
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0px 5px 0px 5px;
}

h1{
    font-size: 20px;
    display: none;
}

p{
    display: none;
}

span{
    display: none;
}
.custom-card:hover h1{
    display: block;
}
.custom-card:hover p{
    display: block;
}
.custom-card:hover span{
    display: block;
}
.custom-card:hover .hover-background{
    height: 100%;
}






</style>