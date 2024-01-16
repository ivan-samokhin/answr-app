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
    <h4>User Account</h4>
    <p>
        When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service. You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service. You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account. You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than You without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.
    </p>
    <p>
        Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service. To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose. Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law
    </p>
    <h4>Return or Destruction of Information:</h4>
    <p>
        Upon the Disclosing Party's written request, or the termination of the Receiving Party's need for the Confidential Information, the Receiving Party shall promptly return or destroy all copies of the Confidential Information. This Agreement constitutes the entire understanding between the Parties and supersedes all prior agreements, whether written or oral. By clicking the continue button seen below the recipient agrees to the terms above.
    </p>

    <div class="nda_agree" @click="">
          <input
            type="checkbox"
            name="nda_checkbox"
            class="checkBox"
            required
          />
          <label class="answr_checkbox_label" for="loginPassword">Agree to terms and conditions</label>
    </div>
</div>
</div>
<RouterLink @click="isLoggedIn=true" class="answr_button_generic" to="/cassandra/chat">Continue</RouterLink>
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
    transition: 0.4s;
}
.answr_button_generic:hover {
    background-color: hsla(160, 100%, 37%, 0.2);

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
.nda_agree {
    display: inline-flex;
    padding: 10px 20px;
    border: 1px solid white;
    border-radius: 2px;
}

.checkBox {
    accent-color: #87f5d3;
}

.answr_checkbox_label {
   margin-left: 20px;
   color:#87f5d3;
   font-size: 0.8rem;
   position:relative;
   top: 0px;
}


</style>