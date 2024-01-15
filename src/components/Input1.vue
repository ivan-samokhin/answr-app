<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <img class="answr_logo" src="\logo_svg_.svg" alt="">
<form action="" class="form">
    <p class="answr_text">Create an account</p>
        <div class="input-group">
          <input type="text" name="loginUser" id="loginUser" required />
         
          <label class="answr_generic_label"  for="loginUser">Email</label>
        </div>
        <div class="input-group">
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            required
          />
          <label class="answr_generic_label" for="loginPassword">Password</label>
        </div>
        <div class="input-group answr_input_field" @click="checkboxPulse">
          <input
            type="checkbox"
            name="mycheckbox"
            class="checkBox"
            required
          />
          <label class="answr_checkbox_label" for="loginPassword">I'm not a robot</label>
          <img class="nav_icon_image" src="\infinity.svg" alt="" :class="{'checkbox_clicked': checkboxClicked, 'change_color': changeColor}">
        </div>
        <RouterLink class="answr_button_generic" to="/dob">Continue</RouterLink>
      </form>
</template>

<script>
export default {
    data() {
        return {
            checkboxClicked: false
        }
           
    },
    methods: {
        checkboxPulse (){
            this.checkboxClicked=true
            this.changeColor=true
            setTimeout(() => {
                this.checkboxClicked=false
            }, "200");
        }
    }
}
</script>

<style scoped>
.form {
    width: auto;
}

#loginUser, #loginPassword, .answr_input_field {
    background-color: rgba(255, 255, 255, 0);
    color: white;
    border: 1px solid #eee;
    border-radius: 5px; 
    width: 200px;
    padding: 17px 5px 5px 5px;
    margin: 5px 5px;
    display: block;
    font-size: 0.8rem;
}
 .answr_input_field {
    padding-top: 12px;
    padding-bottom: 8px;
 }

input textarea {
    background-color: rgba(255, 255, 255, 0);
    color: white;
    border: 0;
    
}

.answr_button_generic {
    width: auto;
    margin: 10px 5px;
    font-size: 0.8rem;
}

.answr_generic_label {
    position:relative;
    left: 10px;
    top: -48px;
    color: #87f5d3;
    font-size: 0.5rem;
}
.answr_checkbox_label {
   margin-left: 20px;
  
   font-size: 0.7rem;
   position:relative;
   top: -3px;
}
textarea:focus, input:focus{
    outline: none;
}

.answr_text {
    color: white;
    width: 200px;
}

.input-group {
    height: 40px;
}

.checkBox {
    accent-color: #87f5d3;
}

.answr_input_field img {
    width: 35px; 
    display: block;
    position: relative;
    top: -31px;left: 150px;
    filter: invert(94%) sepia(94%) saturate(26%) hue-rotate(31deg) brightness(107%) contrast(106%);
}

.nav_icon_image {transform: scale (1);transition: all .2s ease-in-out;  }
.checkbox_clicked {
    transform: scale(1.4); 
    transition: all .2s ease-in-out; 
}
.change_color {
    filter: invert(91%) sepia(12%) saturate(1410%) hue-rotate(93deg) brightness(103%) contrast(92%) !important;
}
</style>