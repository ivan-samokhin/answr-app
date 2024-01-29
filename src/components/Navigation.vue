<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav id="MainNavigation">
   <ul class="main_nav_icons_list main_icons_left">
        <li class="main_nav_icon_item">
           <img class="main_nav_icon_image" src="/nav/main_nav/logo-01.svg"> 
        </li>
        <li class="main_nav_icon_item">
           <img class="answr_logo_text" :class="{'white_color':isWhite}" src="/nav/main_nav/logo-02.svg"> 
        </li>
   </ul>
   
    <ul class="main_nav_icons_list main_icons_center">
        
        <li class="main_nav_icon_item" v-for="icon in icons" :class="{'active_item':icon.isActive}">
          
          <div v-if="icon.id==4 && isCompany">
           <img class="main_nav_icon_image" :class="{'white_color':isWhite}" :src="icon.url"  @click="HandleClick(icon.id)"> 
           <div class="main_hoverbox" @mouseleave="isCompany=false, icon.isActive=false">
            <ul class="main_dropdown">
               <li v-for="icon in dropdown_company" class="main_dropdown_item">
                <div v-if="icon.id==41">
                <router-link to="/about">
                  <img class="dropdown_image" :class="{'white_color':isWhite}" :src="icon.url" @click="HandleClick(icon.id)">
                </router-link>
              </div>
              <div v-else><img class="dropdown_image" :class="{'white_color':isWhite}" :src="icon.url" @click="HandleClick(icon.id)"></div>
              </li>
            </ul>
            </div>
          </div>

          <div v-else-if="icon.id==3 && isDevelopment">
            <img class="main_nav_icon_image" :class="{'white_color':isWhite}" :src="icon.url"  @click="HandleClick(icon.id)"> 
            <div class="main_hoverbox" @mouseleave="isDevelopment=false, icon.isActive=false">
              <ul class="main_dropdown dropdown_dev">
                <li v-for="icon in dropdown_dev" class="main_dropdown_item">
                  <div v-if="icon.id==51">
                    <router-link to="/cassandra"> 
                      <img class="dropdown_image" :class="{'white_color':isWhite}" :src="icon.url" @click="HandleClick(icon.id)">
                    </router-link> 
                  </div>
                  <div v-else><img class="dropdown_image" :class="{'white_color':isWhite}" :src="icon.url" @click="HandleClick(icon.id)"></div>
                </li>
              </ul>
            </div>
          </div>

          <div v-else> <img class="main_nav_icon_image" :class="{'white_color':isWhite}" :src="icon.url" @click="HandleClick(icon.id)"> </div>
        </li>
      
    </ul>
    <ul class="main_nav_icons_list main_icons_right">
       
      <li class="main_nav_icon_item" v-for="icon in icons2">
        <div v-if="icon.id == 22" class="menu_icon"><img class="main_nav_icon_image" :src="icon.url"></div>
        <div v-else><img class="main_nav_icon_image" :class="{'white_color':isWhite}" :src="icon.url"></div>
      </li>
        
    </ul>
   </nav>

   <!-- <RouterLink @click="console.log('isCassandra'), $emit('goCas')" class="" to="/cassandra/login">Cassandra</RouterLink> -->
</template>

<script>
export default {
    data() {
        return {
            icons: [
                {
                    url: "/nav/main_nav/community-03.svg",
                    id: 1,
                    isActive: false
                },
                {
                    url: "/nav/main_nav/resources-03.svg",
                    id: 2,
                    isActive: false
                },
                {
                    url: "/nav/main_nav/developing-02.svg",
                    id: 3,
                    isActive: false
                },
                {
                    url: "/nav/main_nav/company.svg",
                    id: 4,
                    isActive: false
                }
            ],
            icons2: [
                {
                    url: "/nav/main_nav/login.svg",
                    id: 11
                },
                {
                    url: "/nav/main_nav/lines.svg",
                    id: 22
                }
            ],
            icons_logo: [
                {
                    url: "/nav/main_nav/logo.svg",
                    id: 31
                }
            ],
            dropdown_company: [
                {
                    url: "/nav/company/about.svg",
                    id: 41
                },
                {
                    url: "/nav/company/customer-service.svg",
                    id: 42
                },
                {
                    url: "/nav/company/jobs.svg",
                    id: 43
                },
                {
                    url: "/nav/company/security.svg",
                    id: 44
                }
               
            ],
            dropdown_dev: [
                {
                    url: "/nav/developing/cassandra.svg",
                    id: 51
                },
                {
                  url: "/nav/developing/mona.svg",
                    id: 53
                },
                {
                  url: "/nav/developing/virtual.svg",
                    id: 53
                }
               
            ],
            isCompany: false,
            isDevelopment: false
         }
      },
      methods: {
         HandleClick (id) {
            if (id == 4) {
               this.isCompany=!this.isCompany
               this.icons[id-1].isActive=!this.icons[id-1].isActive
            }
            if (id == 3) {
               this.isDevelopment=!this.isDevelopment
               this.icons[id-1].isActive=!this.icons[id-1].isActive
            }
            if (id==41) {
              this.$emit('goAbout')
              }  
            
      }
    },
    props: {
      isWhite: false
  }
}
</script>

<style>
#MainNavigation {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 0.3rem 1rem;
    margin-top: 0;
    position: fixed;
    left: 0;
    top:0;
    width: 100vw;
    height: 100px;
    display: flex;
    place-items: start;
    margin-left: 0px;
    z-index:50;
    
  }
  .main_nav_icon_item {
    display: inline-block;
    margin: 0;
    padding: 0px 7px;
    list-style-type: none;
    border-bottom: 1px solid transparent;
    height: 50px;
  }

  .main_nav_icon_image {
    height: 90px;
    display: block;
    filter: iinvert(5%) sepia(2%) saturate(5158%) hue-rotate(191deg) brightness(94%) contrast(85%);
    margin-top: -20px;
  }

  .main_icons_center .main_nav_icon_item:hover {
    border-bottom: 1px solid black;
  }

  .main_logo_image {
    width: 125px;
  }

  .main_nav_icons_list {
    position: absolute;
    display: inline-block;
    padding: 0;
    
    height: 25px;
  }
  .main_icons_left {
    left: 10px;
  }
  .main_icons_center {
    left: 50%;
    margin-top: 20px;   
  }

  .main_icons_right {
    right: 30px;
    margin-left: 0;
  }

  .main_icons_right .main_nav_icon_image {
    height: 37px;
    margin-top: 25px;
  }
  .main_icons_left .main_nav_icon_image {
    height: 30px;
    margin-top: 25px;
  }
  .answr_logo_text {
    margin-left: -7px;
    height: 20px;
    margin-top: 35px;
  }

  .answr_routerlink {
    display: inline-block;
  }

  .main_hoverbox {
   position: absolute;
    color: white;
    text-align: left ;
}
.main_dropdown {
   padding-left: 10px; 
}

.dropdown_dev {
  padding-left: 0;
}

.main_dropdown_item {
   list-style-type: none;
   margin-top: -10px;
}

.dropdown_image {
   height: 50px;
}

.active_item {
   border-bottom: 1px solid black;
}

.main_dropdown_item:hover img {
  filter: invert(77%) sepia(16%) saturate(804%) hue-rotate(112deg) brightness(94%) contrast(92%);
}

a:hover {background-color: transparent;}

.white_color {
  filter: invert(96%) sepia(100%) saturate(15%) hue-rotate(239deg) brightness(105%) contrast(104%);
}

.menu_icon {
  width: 37px;
  height: 37px;
  background-color: #7de3c4;
  border-radius: 20px;
}

</style>