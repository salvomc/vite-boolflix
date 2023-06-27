<script>
    export default {
        props:{
            MyMovies : Object
        }
    }
</script>

<template>
    
    <div class="cards custom-card">
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

</style>