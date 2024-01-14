<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <img class="answr_logo" src="\logo_svg_.svg" alt="">
<form action="" class="form">
    <p class="answr_text">About you</p>
        <div class="input-group">
          <input type="text" name="loginUser" id="loginUser" required />
         
          <label for="loginUser">Name</label>
        </div>
        <div class="input-group">
          <input
            type="text"
            name="loginPassword"
            id="loginPassword"
            required
          />
          
          <label for="loginPassword">Date of birth</label>
        </div>
        <RouterLink class="answr_button_generic" to="/capcha">Continue</RouterLink>
      </form>
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
.form {
    width: auto;
}

#loginUser, #loginPassword {
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

label {
    position:relative;
    left: 10px;
    top: -50px;
    color: #87f5d3;
    font-size: 0.5rem;
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
</style>