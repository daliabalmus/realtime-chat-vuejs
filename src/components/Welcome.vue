<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter you name</label>
          <input type="text" name="name" v-model="name">
          <p class="red-text" v-if="feedback">{{ feedback }}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({name: 'Chat', params: { name: this.name } });
        this.feedback = null;
      } else {
        this.feedback = 'You must enter a name to join'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  max-width:400px;
  margin-top: 150px;
}
.welcome .card-content {
  padding: 30px;
}
.welcome input {
  margin-bottom: 50px;
}
.welcome h2 {
  font-size: 2.5em;
  margin-bottom: 30px;
}
.welcome .btn {
  margin-top: 30px;
}
</style>
