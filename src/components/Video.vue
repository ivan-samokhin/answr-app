<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { EffectFade, EffectCube, EffectCards} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'



</script>

<template>
    <div id="answr_video_bg">
    <p class="answr_text">Choose Avatar</p>
        <div class="video_wrapper">
        <Swiper
        :modules="[Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube, EffectCards]"
        :slides-per-view="1"
        navigation
        
        :scrollbar="{ draggable: true }"
        
        >
            <SwiperSlide v-for="video in videos">
                <video width="400" autoplay muted loop playsinline>
                    <source :src="video" type="video/mp4">
                </video>
            </SwiperSlide>
        </Swiper>
     
        </div>
       
        <RouterLink class="answr_button_generic" to="" @click="toGrey=true, $emit('goGrey')">Accept</RouterLink>
        <div v-if="toGrey" :class="{'grey_screen': toGrey}"></div>
    </div>
    
</template>     

<script>


export default {
    data() {
        return {
            videos: [
                '/video/06.mp4',
                '/video/05.mp4',
                '/video/04.mp4',
                '/video/02.mp4',
                '/video/03.mp4',
                '/video/08.mp4',
                '/video/Cass.mp4',
                '/video/11.mp4',
                '/video/09.mp4'
                //'/video/08.mp4',
                //'/video/09.mp4',
                //'/video/10.mp4',
                //'/video/11.mp4'
            ],
            toGrey: false
        }
           
    },
    methods: {
        
    },
    components: {
      Swiper,
      SwiperSlide
    }
   
}
</script>

<style scoped>
    .video_wrapper {
        padding: 20px;
        
}
#answr_video_bg {
    background-color: rgba(52, 53, 64, 1);
    border-radius: 10px;
    box-shadow: 2px 2px 15px #282828;
    padding-bottom: 20px;
    position: fixed;
    left: 50%;
    top: 10%;
    margin-left: -220px;
}


.swiper {
    width: 400px;
    height: 350px;
    
}

button {
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: block;
  margin: auto;
  margin-bottom: 20px;
}

.grey_screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #808080;
    z-index: 100;
}

</style>