import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false


// NOTE: PASTE YOUR OWN CONFIG HERE!

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(() => new Vue({
  render: h => h(App),
}).$mount('#app'))


