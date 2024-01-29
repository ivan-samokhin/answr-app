<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from '../components/Navigation.vue'


</script>

<template>

<Navigation @go-about="navWhite=true" :isWhite="navWhite"/>
<div id="main_answr_wrapper">

    <router-view @go-cas="$emit('goCas')"/>

</div>

</template>

<script>
export default {
    data() {
        return {
            navWhite: false
        }
    },
    methods: {

    }
}
</script>

<style>
body {overflow-x: hidden;}


</style>