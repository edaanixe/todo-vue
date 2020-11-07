import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import admin from "firebase";
import serviceAccount from './config/serviceAccountKey'

Vue.config.productionTip = false

admin.initializeApp(serviceAccount);

admin.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user)
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
