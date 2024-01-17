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
    <div id="answr_audio_bg">
    <p class="answr_text voice_text">Voice Options</p>
        <div class="audio_wrapper">
        <Swiper
        :modules="[Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube, EffectCards]"
        :slides-per-view="1"
        navigation
        >
            <SwiperSlide v-for="item in texts.length">
                <p class="menu_text">{{ texts[item-1] }}</p>
                <video width="200" autoplay muted loop playsinline>
                    <source :src="videos[item-1]" type="video/mp4">
                </video>
            </SwiperSlide>
        </Swiper>
     
        </div>
        <button class="answr_button_generic voice_button" @click="$emit('myEvent')">Apply voice</button>
    </div>
</template>     

<script>


export default {
    data() {
        return {
            texts: [
                'Southern man',
                'Sothern woman',
                'Old man',
                'Urban',
                'Contemporary RP Woman'
            ],
            videos:[
                '/audiowaves.mp4',
                '/voice2.mp4',
                '/voice3.mp4',
                '/audiowaves.mp4',
                '/audiowaves.mp4'
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
    .audio_wrapper {
        padding: 0px;

        
}
#answr_audio_bg {
    background-color: rgba(52, 53, 64, 1);
    border-radius: 5px;
    box-shadow: 2px 2px 15px #282828;
    padding-bottom: 0px;
    position: fixed;
    left: 50%;
    top: 5.5%;
    margin-left: -120px;
    width: 300px;
    height: 210px;
}


.audio_wrapper .swiper {
    width: 250px;
    height: 150px;  
}

.audio_wrapper video {
    display: block;
    margin: auto;
    border: 1px solid rgba(52, 53, 64, 1);
    position: relative;
    top: 0px;
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

.menu_text {
    color: white;
    margin: auto;
    overflow-y: auto;
    font-size: 0.6rem;
    text-align: center;
    border-top: 1px solid white;
    padding: 10px 0 0 0;
    z-index: 20;
    position:relative;
}


.voice_button {
    padding: 5px 10px;
    border-radius: 2px;
    font-size: 0.7rem;
    margin-bottom: 15px;
    position: relative;
    z-index: 20;
    top: -10px;
}

.voice_text {
    font-size: 0.7rem;
    padding: 5px;
    margin-top: 5px;
}

.answr_button_generic:hover {
    background-color: hsla(160, 100%, 37%, 0.2);

}
</style>