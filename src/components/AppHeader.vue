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

<div class="ct-container d-flex align-items-center justify-content-between px-5">
    <div class="image-div">
        <img src="../../public/boolflix-logo.png" alt="logo">
    </div>
    <div>
        <input type="text" placeholder="" v-model="store.searchMovies" @keyup.enter="$emit('search')">
        <button class="btn btn-dark custom-btn" @click="$emit('search')">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>
</div>

</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.ct-container{
    height: 70px;
    width: 100%;
    position: fixed;  
    z-index: 999;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(3,3,3,0.8), rgba(3,3,3,0.5), rgba(3,3,3,0.01));

        .image-div{
            height: 100%;
            width: auto;

            img{
                height: 100%;
                width: 60%;
                margin-top: 8px;
                object-fit: contain;
            }
        }
    }

.custom-btn{
    margin-left: 20px;
    border-radius: 10px;
}

</style>