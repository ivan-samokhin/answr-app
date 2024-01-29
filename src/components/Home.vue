<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>

<section id="mainsection">
    <div class="section_wrapper">
        <img id="answr_opportunities" src="/texts/opportunities.svg">
        
    </div>
</section> 

</template>

<script>

</script>

<style>
    #mainsection {
        width: 100vw;
        height: 100vh;
        overflow: hidden;   
        background: no-repeat url("/bg/bg01.png");
        background-size: cover;
        scroll-behavior: smooth !important;

    }
   
   

    #answr_opportunities {
        height: 900px;
        filter: invert(96%) sepia(100%) saturate(15%) hue-rotate(239deg) brightness(105%) contrast(104%);
        margin-left: 50px;
        margin-top: -130px;
    }
</style>