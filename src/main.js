import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import * as firebase from 'firebase'
import vuetify from './plugins/vuetify';
import { routes } from './routes'
import { store } from "../store.js";

Vue.config.productionTip = false
Vue.use(VueRouter)




const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
  created() {
    firebase.initializeApp({
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.VUE_APP_FIREBASE_APP_ID,
      measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
    });
  }
}).$mount('#app');
