<template>
  <div id="app">
    <Chat v-if="user"></Chat>
    <Login v-else></Login>
  </div>
</template>

<script>
import Chat from './components/Chat'
import Login from './components/Login'
import firebase from 'firebase'

export default {
  data() {
    return {
      user: firebase.auth().currentUser
    }
  },
  name: 'App',
  components: {
    Chat, Login
  }
}
</script>

<style>
  body {
    background-color: #313131;
  }
</style>