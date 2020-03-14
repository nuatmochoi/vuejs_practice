<template>
  <div>
    <button @click="loginUser">Google Login</button>
  </div>
</template>

<script>
// import {firebaseLoginWithEmail} from '../utils/firebase-db.js'
import firebase from "firebase";

export default {
  methods: {
    loginUser() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => console.log(result))
        .catch(error => console.log(error));
      // firebaseLoginWithEmail(email,password).then().catch()
      // const url = "https://firebase.developer.com/database/users"
      // axios.get(url)
    }
  }
};
</script>

<style></style>
