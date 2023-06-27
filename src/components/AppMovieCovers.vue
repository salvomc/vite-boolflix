<script>
    export default {
        props:{
            MyMovies : Object
        }
    }
</script>

<template>
    
    <div class="cards">
        <h1>{{ MyMovies.title }}</h1>
        <p>{{ MyMovies.original_title }}</p>
        <p>{{ MyMovies.original_language }}</p>
        <span>{{ MyMovies.overview }}</span>
        <p>{{ MyMovies.vote_average }}</p>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
    
</style>