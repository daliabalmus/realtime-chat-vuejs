<template>
  <div class="chat container">
     <div class="card">
       <h2 class="center teal-text">Chat Room</h2>
       <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{ message.name }} </span>
            <span class="grey-text text-darken-3">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
       </div>
       <div class="card-action">
         <NewMessage :name="name" />
       </div>
     </div>
  </div>
</template>

<script>

import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  props:['name'],
  data() {
    return {
      messages: []
    }
  },
  created() {
    let ref = db.collection('messages').orderBy('timestamp');

    ref.onSnapshot(snpahot => {
      console.log(snpahot.docChanges().forEach(change => {
        if (change.type == 'added') {
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')
          })
        }
      }));
    })
  },
  components: {
   NewMessage
  }
}
</script>

<style scoped>
.card {
  margin-top: 50px;
  padding-top: 20px;
}
  h2 {
    font-size: 2.5em;
  }
  .chat span {
    font-size: 1em;
  }
  .chat .time {
    display: block;
    font-size: 0.8em;
  }
  .chat .messages {
    max-height: 300px;
    overflow: auto;
  }
  .messages::-webkit-scrollbar {
    width: 3px;;
  }
  .messages::-webkit-scrollbar-track {
    background: #ddd;
  }
  .messages::-webkit-scrollbar-thumb {
    background: #aaa;
  }
  .messages li {
    margin: 10px 0;
  }
</style>
