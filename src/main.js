import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import apiKey from './apiKey'

Vue.config.productionTip = false

const config = {

  apiKey: apiKey,
  authDomain: 'vue-firebase-learning-app.firebaseapp.com',
  databaseURL: 'https://vue-firebase-learning-app.firebaseio.com',
  projectId: 'vue-firebase-learning-app',
  storageBucket: 'vue-firebase-learning-app.appspot.com',
  messagingSenderId: '246520776149',
  appId: '1:246520776149:web:31788c8197b5183323695c',
  measurementId: 'G-48X40EDL2B'
}

// Initialize Firebase
firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
