<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

<section id="about_section">
    <div class="section_wrapper">
        <img id="about-text" src="/texts/about.svg">
        
    </div>
</section>

<section id="about_info">
    <div class="section_wrapper">
        <div class="grey_square"></div>
        <div class="grey_square square_no2"></div>
        <img id="owners-text" src="/texts/owners.svg">
        
    </div>
</section>

</template>

<script>

</script>

<style>

    #about_section {
        width: 100vw;
        height: 100vh;
        overflow: hidden;   
        background: no-repeat url("/bg/bg02.png");
        background-size: cover;
        scroll-behavior: smooth !important;

    }

    #about_info {
        width: 100vw;
        height: 100%;
        background-color: #292a35;
        background-size: cover;
    }

    .section_wrapper {
        padding-top: 100px;
    }

    #answr_opportunities {
        height: 900px;
        filter: invert(96%) sepia(100%) saturate(15%) hue-rotate(239deg) brightness(105%) contrast(104%);
        margin-left: 50px;
        margin-top: -130px;
    }

    #about-text {
        height: 900px;
        filter: invert(96%) sepia(100%) saturate(15%) hue-rotate(239deg) brightness(105%) contrast(104%);
        margin-left: 50px;
        margin-top: -130px;
    }

    #owners-text {
        height: 900px;
        filter: invert(96%) sepia(100%) saturate(15%) hue-rotate(239deg) brightness(105%) contrast(104%);
        margin-left: 50px;
        margin-top: -130px;
    }

    .grey_square {
        width: 550px;
        height: 330px;
        background-color: #999;
        position: absolute;
        margin-left: 160px;
        margin-top: 50px;
    }

    .square_no2 {
        margin-left: 780px;
    }

</style>