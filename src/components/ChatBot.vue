<script setup>
import { toHandlers } from 'vue';
import { isLoggedIn } from './Capcha.vue'

</script>
<template>

<div id='answr_chatbot_wrapper' :class="{'reverse': isFlipped}"  ref="chatWindow">
<div>
    <ul class='answr_chat_main' ref="chatList">
        <li v-for = 'index in messageCount' class="answr_chatbot_message">
            <p><h4>Colton</h4>
                {{ userMessages[index-1] }}
            </p>
            <p>
                <h4>Cassandra</h4>
                {{ displayMsg[index-1] }}
            </p>
        </li> 
    </ul>
</div>
</div>

<div class="user_input_form">
    <form @submit.prevent="HandleChatInput">
        <input class= "answr_imput" type="text" v-model="userInput">
        <img src="\ARROW_UP.svg" alt="">
    </form>
</div>
<Transition name="dictation">
<div class="speech_indicator" @click="startSpeechToTxt" v-if="micActive"> <img src="\mic_svg_.svg" alt=""></div>
</Transition>



<Transition name="empty">
<div class="chat_popup_start" v-if="chatEmpty">
    <img src="\logo_svg_.svg" alt="">
    <h4>What's on your mind?</h4>
</div>
</Transition>



</template>

<script>

export default {
  data() {
    return {
      messageCount: 0,
      botMessages: [
        'Are you Colton?', 
        'You signed up.',
        "It\'s nice to meet you, Colton. 😊",
        "Please go to the tool bar and enable your camera? 🙏",
        'If you go to the pull-down tab and select a voice, I can explain the program.',
        'I\'m sorry about that.','I apologize for that, Colton.',
        'You can choose an Avatar for me and enable your dictation, rather than typing. Then we can talk to each other, like two people.',
        'Hello, Colton. You can choose from a selection of Avatars for me.',
        ''
        ],
      displayMsg: ['', '', ''],
      userInput: '',
      userMessages:[],
      isFlipped: false,
      chatEmpty: true,
      runtimeTranscription_: "",
      transcription_: [],
      lang_: "en-EN",
      speechActive: false
    }
},
methods: {
    typewriter(text, i = 0) { 
      if (i == 0) {
        this.displayMsg[this.messageCount-1] = ''
      }
      if (!this.isFlipped){this.flipChat()}
      if (i < text.length) {
        this.displayMsg[this.messageCount-1] += text[i]
        setTimeout(() => this.typewriter(text, i = i + 1), 25)
      }
       
    },
    
    HandleChatInput(){
        if(this.chatEmpty){this.chatEmpty=false}
        if(this.messageCount < this.botMessages.length ) {
            this.messageCount++
            setTimeout(() => this.typewriter (this.botMessages[this.messageCount-1]), 300)
            this.userMessages.push(this.userInput)
            this.userInput=''
        }   
    },

    flipChat() {
        if(this.$refs.chatWindow.offsetHeight - this.$refs.chatList.scrollHeight < 50){
            this.isFlipped = true
        }
    }, 
        
        startSpeechToTxt() {
      this.runtimeTranscription_ = ""
      this.speechActive = true
    // initialisation of voicereco
    
    window.SpeechRecognition =
    window.SpeechRecognition || 
    window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();
    recognition.lang = this.lang_;
    recognition.interimResults = true;

    // event current voice reco word
    recognition.addEventListener("result", event => {      
      var text = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");
       
      this.runtimeTranscription_ = text;
      this.userInput = text;
    });
    // end of transcription
    recognition.addEventListener("end", () => { recognition.stop(); this.speechActive = false; this.HandleChatInput()});
     recognition.start();
   }
     
},

props: {
    micActive: Boolean
  },

  mounted() {
    this.userInput = this.runtimeTranscription_
    
  }

}
</script>

<style scoped> 

.answr_chatbot_message{
    list-style-type: none;
    color: #fff;
    
}

.answr_chatbot_message h4 {
    opacity: 0.5;
}

.answr_chatbot_message p {
    margin: 5px;
    font-weight: 200;
}

.answr_chat_main {
    padding-inline-start: 0;
}

#answr_chatbot_wrapper {
    width: 500px;
    height: 60vh;
    top: 100px;
    overflow: auto;
    display: flex;
    margin-bottom: 50px;
    Border: 0px solid white;
}



#answr_chatbot_wrapper::-webkit-scrollbar {
  width: 7px;
  border-radius: 5px;
}

#answr_chatbot_wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}
#answr_chatbot_wrapper::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.user_input_form input {
    width:500px;
    padding: 10px;
    margin: 20px 0;
}

.answr_chatbot_message h4{
    font-weight: 400;
}

.reverse {
    flex-direction: column-reverse;
}

input, textarea {
background-color: rgba(255, 255, 255, 0);
color: white;
border: 1px solid #eee;
border-radius: 2px;
}

textarea:focus, input:focus{
    outline: none;
}

.chat_popup_start {
    width: 300px;
    height: 150px;
    
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -75px;
    margin-left: -150px;
}

.chat_popup_start img {
    width: 100px;
    height: 100px;
    margin: auto;
    position: relative;
    display: block;
}
.chat_popup_start h4 {
    color: white;
    margin: auto;
    position: relative;
    display: block;
    margin-top: 20px;
    font-size: 1.2rem;
    text-align: center;

}

.empty-enter-active,
.empty-leave-active,
.dictation-enter-active,
.dictation-leave-active {
  transition: opacity 0.5s ease;
}

.dictation-enter-from,
.dictation-leave-to,
.empty-enter-from,
.empty-leave-to {
  opacity: 0;
}
.user_input_form img {
    width: 20px;
    height: 20px;
    display: block;
    margin-top: -48px;
    margin-left: 475px;
}

.user_input_form img {
    width: 20px;
    height: 20px;
    display: block;
    margin-top: -48px;
    margin-left: 475px;
}

.speech_indicator {
    height: 50px;
    width: 50px;
    
    position: fixed;
    display: block;
    bottom: 35px;
    left: 50%;
    margin-left: -20px;
}

.speech_indicator img {
    display: block;
    width: 40px;
    height: 40px;
   
}

</style>