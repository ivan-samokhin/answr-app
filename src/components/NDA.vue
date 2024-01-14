<script setup>
import App from '@/App.vue';
import { setTransitionHooks, toHandlers } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div id="answr_nda_bg">
<div id="answr_nda_wrapper">
    <p class="answr_text">Non-Disclosure Agreement</p>
<div class="text_wrapper">
<div class="nda_text">
    
    <p>
        The Disclosing Party is the owner of the proprietary web-based AI chat program named Cassandra, developed and owned by Answr Technologies, hereinafter referred to as the "Confidential Information." The Receiving Party desires to receive and evaluate the Confidential Information for the purpose of [purpose of disclosing information, e.g., launching a web version of the AI chat program], and both Parties agree to the terms and conditions set forth in this Agreement.
    </p>
    <h4>Confidential Information:</h4>
    <p>
        The term "Confidential Information" shall include all information, data, trade secrets, software, algorithms, processes, designs, and any other proprietary information related to the web-based AI chat program Cassandra. The Receiving Party agrees to keep all Confidential Information confidential and to take all reasonable precautions to prevent unauthorized disclosure or use of such information. The Receiving Party shall not disclose, reproduce, or use the Confidential Information for any purpose other than the agreed-upon purpose.
    </p>
    <h4>Exceptions:</h4>
    <p>
        The obligations set forth in this Agreement shall not apply to information that: Is or becomes publicly available through no fault of the Receiving Party. Is independently developed by the Receiving Party without reference to or use of the Confidential Information. Is rightfully obtained by the Receiving Party from a third party without restriction. The obligations of confidentiality under this Agreement shall remain in effect for a period of 50 years from the date of disclosure.
    </p>
    <h4>Return or Destruction of Information:</h4>
    <p>
        Upon the Disclosing Party's written request, or the termination of the Receiving Party's need for the Confidential Information, the Receiving Party shall promptly return or destroy all copies of the Confidential Information. This Agreement constitutes the entire understanding between the Parties and supersedes all prior agreements, whether written or oral. By clicking the continue button seen below the recipient agrees to the terms above.
    </p>
    
</div>
</div>
<RouterLink @click="isLoggedIn=true" class="answr_button_generic" to="/cassandra">Agree</RouterLink>
</div>

</div>

</template>

<script>
var isLoggedIn = false
export {isLoggedIn}
export default {
    data() {
        return {
            
           
        }
    },
    methods: {
       
    
    }
}
</script>

<style scoped>

#answr_nda_bg {
    background-color: rgba(52, 53, 64, 1);
    border-radius: 20px;
    box-shadow: 2px 2px 15px #282828;
}

#answr_nda_wrapper {
    padding: 20px 30px;
   
    
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

.nda_text {
    color: white;
    width: 700px;
    height: 500px;
    overflow-y: auto;
    font-size: 0.8rem;
   
    
}
.nda_text p {
    margin: 0px 10px 10px 0px;
}
.nda_text h4 {
    color: #87f5d3;
    margin-bottom: 0;
}

.text_wrapper {
    padding: 20px 0;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
}

.nda_text::-webkit-scrollbar {
  width: 7px;
  border-radius: 5px;
}

.nda_text::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}
.nda_text::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

</style>