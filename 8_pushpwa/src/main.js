import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import * as firebase from "firebase";
import { router } from "./router";
import MyPlugin from "./plugins/MyPlugin";

Vue.use(MyPlugin);

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBNlrsU6jPemrsBLI3iSsEkao2frfwfcNQ",
  authDomain: "pwa-push-10-74a0c.firebaseapp.com",
  databaseURL: "https://pwa-push-10-74a0c.firebaseio.com",
  projectId: "pwa-push-10-74a0c",
  storageBucket: "pwa-push-10-74a0c.appspot.com",
  messagingSenderId: "746759870164",
  appId: "1:746759870164:web:0939f39f311ea3af19cd41"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
