<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

<section id="cassandra_section">
    <div class="section_wrapper">
        <img id="cassandra-text" src="/texts/cassandra.svg">
        <RouterLink class="cassandra_link" to="/cassandra/login" @click="$emit('goCas')"><img src="/texts/try.svg"></RouterLink>
    </div>
</section>


</template>

<script>

</script>

<style>

    #cassandra_section {
        width: 100vw;
        height: 100vh;
        overflow: hidden;   
        background: linear-gradient(0deg, rgba(41,42,53,1) 15%, rgba(49,103,109,1) 100%);
    }


    .section_wrapper {
        padding-top: 100px;
    }

  

    #cassandra-text {
        height: 900px;
        
        margin-left: 50px;
        margin-top: -190px;
    }

    .cassandra_link {
        position: absolute;
        bottom: 86px;
        left: 159px;
        border: 2px solid white;
        padding: 13px 15px 5px 15px;
        border-radius: 10px;
    }
    .cassandra_link img {
        height: 18px;
        bottom: 10px;
    }

    .cassandra_link:hover {
        border-color: #7de3c4;
    }

</style>