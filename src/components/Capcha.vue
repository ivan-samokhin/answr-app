<script setup>
import App from '@/App.vue';
import { setTransitionHooks, toHandlers } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
 
</script>

<template>
<div id="answr_capcha_bg">
<div id="answr_capcha_wrapper">
    <p class="answr_text">Select all images with traffic lights</p>
<ul class="answr_capcha_row">
    <li @click="makeActive(images[index-1].id)" v-for = 'index in 3' class="answr_capcha_square">
        <img :class="{active_element: images[index-1].isActive}" :src="images[index-1].url" alt="x">
    </li>

</ul>

<ul class="answr_capcha_row">   
    <li @click="makeActive(images[index+2].id)" v-for = 'index in 3' class="answr_capcha_square">
        <img :class="{active_element: images[index+2].isActive}" :src="images[index+2].url" alt="x">
    </li>
</ul>

<ul class="answr_capcha_row">   
    <li @click="makeActive(images[index+5].id)" v-for = 'index in 3' class="answr_capcha_square">
        <img :class="{active_element: images[index+5].isActive}" :src="images[index+5].url" alt="x">
    </li>
</ul>
<RouterLink @click="isLoggedIn=true" class="answr_button_generic" to="/nda">Verify</RouterLink>
</div>

</div>

</template>

<script>
var isLoggedIn = false
export {isLoggedIn}
export default {
    data() {
        return {
            images: [
                {
                    url: "/1.png",
                    id: 1,
                    isActive: false
                },
                {
                    url: "/2.png",
                    id: 2,
                    isActive: false
                },
                {
                    url: "/3.png",
                    id: 3,
                    isActive: false
                },
                {
                    url: "/4.png",
                    id: 4,
                    isActive: false
                },
                {
                    url: "/5.png",
                    id: 5,
                    isActive: false
                },
                {
                    url: "/6.png",
                    id: 6,
                    isActive: false
                },
                {
                    url: "/7.png",
                    id: 7,
                    isActive: false
                },
                {
                    url: "/8.png",
                    id: 8,
                    isActive: false
                },
                {
                    url: "/9.png",
                    id: 9,
                    isActive: false
                },
            ],
            isLoggedIn: false
        }
    },
    methods: {
        makeActive(id){
            this.images[id-1].isActive = !this.images[id-1].isActive
        }
    
    }
}
</script>

<style scoped>

#answr_capcha_bg {
    background-color: rgba(52, 53, 64, 1);
    border-radius: 20px;
    box-shadow: 2px 2px 15px #282828;
}

#answr_capcha_wrapper {
    padding: 20px 50px;
}
.answr_capcha_square {
    list-style-type: none;
    height: 150px;
    width: 150px;
    background: #eee;
    display: inline-block;
    margin:2px;
        
}

.answr_capcha_row {
    margin: 0;
    padding: 0;
    display: flex;
}

span {
    color: #000;
}

.answr_capcha_square img {
    height: 150px;
    width: 150px;
    
}

.active_element {
    opacity: 0.5;   
    }

.answr_button_generic {
    display: block;
    width: 150px;
    margin: 20px auto;
    text-align: center;
    background-color: #31676d;
    color: white;
    box-shadow: 2px 2px 5px #282828;
    border-radius: 5px;
}

.answr_text {
    display: block;
    width: 300px;
    color: #87f5d3;
    padding: 5px;
    margin: 10px auto;
    text-align: center;
    margin-bottom: 20px;
}

.navbar-enter-active,
.navbar-leave-active {
  transition: opacity 0.5s ease;
}

.navbar-enter-from, 
.navbar-leave-to {
  opacity: 0;
}

.answr_button_generic:hover {
    background-color: hsla(160, 100%, 37%, 0.2);

}
</style>