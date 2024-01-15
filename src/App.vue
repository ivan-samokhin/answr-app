<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Capcha from './components/Capcha.vue'
import ChatBot from './components/ChatBot.vue'
import Video from './components/Video.vue'

</script>
<script>
export default {
  data() {
    return {
      title: 'Cassandra',
      isLogged: true,
      hoverCam: false,
      hoverMic: false,
      micActivated: false,
      avatarOn: false,
      hoverAvatar: false
      
  }
}
}
</script>

<template>

  <header v-if="isLogged">
    <div class="wrapper">
      <nav>
        <ul class="nav_icons_list icons_left">
            <li class="nav_icon_item">
               <img class="nav_icon_image image_cassandra" src="\CASSANDRA.svg" alt="">
            </li>
            <li class="nav_icon_item">
               <img class="nav_icon_image" src="\divider_svg_.svg" alt="">
            </li>
            <li class="nav_icon_item">
               <img class="nav_icon_image" src="\icons\wheel.svg" alt="">
            </li>
            <li class="nav_icon_item">
               <img class="nav_icon_image img_color_test" src="\icons\write.svg" alt="">
            </li>
           <li class="nav_icon_item" @mouseover="hoverMic=true" @mouseleave="hoverMic=false" @click="micActivated=true">
               <img class="nav_icon_image" src="\icons\mic.svg" alt="">
            </li>
        </ul>

        <ul class="nav_icons_list icons_center">
            <li class="nav_icon_item" @mouseover="hoverAvatar=true" @mouseleave="hoverAvatar=false" @click="avatarOn=!avatarOn">
               <img class="nav_icon_image" src="\icons\account.svg" alt="">
            </li>
            <li class="nav_icon_item" @mouseover="hoverCam=true" @mouseleave="hoverCam=false">
               <img class="nav_icon_image" :class="{'highlited':hoverCam}" src="\icons\cam.svg" alt="">
            </li>
           <li class="nav_icon_item">
               <img class="nav_icon_image" src="\icons\sound.svg" alt="">
            </li>
        </ul>

        <ul class="nav_icons_list icons_right">
            <li class="nav_icon_item">
               <img class="nav_icon_image" src="\icons\plus.svg" alt="">
            </li>
            <li class="nav_icon_item">
               <img class="nav_icon_image" src="\icons\download.svg" alt="">
            </li>
           <li class="nav_icon_item">
               <img class="nav_icon_image" src="\icons\help.svg" alt="">
            </li>
        </ul>
        <!--<RouterLink class="answr_routerlink" to="/speech">Dictation_test</RouterLink>
        <RouterLink class="answr_routerlink" to="/dob">dob</RouterLink>
        <RouterLink class="answr_routerlink" to="/capcha">Capcha</RouterLink>
        <RouterLink class="answr_routerlink" to="/cassandra">Cassandra</RouterLink>-->

      </nav>

      <div class="hoverbox" v-if="hoverCam"></div>
      <div class="hoverbox mic_hover" v-if="hoverMic"><p>Enable dictation</p></div>
      <div class="hoverbox avatar_hover" v-if="hoverAvatar"><p>Choose avatar</p></div>

    </div>
  </header>

 
<div id="main">
  
  <!-- <ChatBot/> -->
  <!-- <Capcha/>-->
  <router-view :micActive="micActivated"/>
  <Transition  ><Video v-if="avatarOn"></Video></Transition>
  
  <!--<button @click="console.log(isLoggedIn)" type="">Test</button>-->
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 500px) {
  header {
    display: flex;
    place-items: center;
    
    background-color: rgba(52,53,64,0.7);
  } 

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    position: sticky;
    background-color: rgba (0,0,0,0.4);
    width: 100%;
    height: 40px;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 0.3rem 1rem;
    margin-top: 0;
  
  }

  .nav_icon_image {
    width: 20px;
    height: 20px;
    display: block;
    filter: invert(94%) sepia(94%) saturate(26%) hue-rotate(31deg) brightness(107%) contrast(106%);
  }

  .nav_icon_image:hover {
    filter: invert(91%) sepia(12%) saturate(1410%) hue-rotate(93deg) brightness(103%) contrast(92%) !important;
  }

  .image_cassandra {
    width: 125px;
  }

  .nav_icons_list {
    position: absolute;
    display: inline-block;
    padding: 0;
    margin: 0;
    margin-top: 5px;
    margin-left: 5px;
    height: 25px;
  }
  .icons_left {
    left: 10px;
  }
  .icons_center {
    left: 50%;
    margin-left: -58px;
  }

  .icons_right {
    right: 5px;
    margin-left: 0;
  }

  .nav_icon_item {
    display: inline-block;
    margin: 0;
    padding: 0px 7px;
    list-style-type: none;
  }

  .icons_right .nav_icon_image {
    width: 20px;
    height: 20px;
  }
  .answr_routerlink {
    display: inline-block;
  }

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.hoverbox {
    position: fixed;
    top: 50px;
    left: 50%;
    margin-left: -75px;
    width: 150px;
    height: 50px;
    background-color: #202020;
    border-radius: 3px;
    color: white;
    text-align: center;
}
.hoverbox p {
  font-size: 0.8rem;
  padding-top: 15px;
}

.mic_hover {
  left: 290px;
}

.avatar_hover {
  left: 50%;
  margin-left: -110px;
}

.highlited {
  filter: invert(50%) sepia(58%) saturate(4177%) hue-rotate(163deg) brightness(98%) contrast(101%);
}

}

</style>
