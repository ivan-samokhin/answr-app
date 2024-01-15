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
        <button class="answr_button_generic">Accept</button>
    </div>
</template>     

<script>


export default {
    data() {
        return {
            videos: [
                'test_video.mp4',
                'test_video.mp4',
                'test_video.mp4',
                'audiowaves.mp4'
            ]
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
    top: 20%;
    margin-left: -220px;
}


.swiper {
    width: 400px;
    height: 250px;
    
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



</style>