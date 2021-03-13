import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'


// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDasToXLwFts1UDi7ScmrMT2gPf4dZ14Jg",
    authDomain: "vue09-d624b.firebaseapp.com",
    projectId: "vue09-d624b",
    storageBucket: "vue09-d624b.appspot.com",
    messagingSenderId: "1053460259667",
    appId: "1:1053460259667:web:bb5fdf1b07b92b811f77a6"
    };
    firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
