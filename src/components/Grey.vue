<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <div class="grey_screen"></div>
</template>

<script>


export default {
    data() {
        return {}
           
    },
    methods: {
        
    }
}
</script>

<style scoped>
.grey_screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #eee;
}
</style>