// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfEV_NRn9Uu70ZYD6YTKnjTmVQHVTe6w4",
  authDomain: "vue-login-register-yt.firebaseapp.com",
  projectId: "vue-login-register-yt",
  storageBucket: "vue-login-register-yt.appspot.com",
  messagingSenderId: "577881043958",
  appId: "1:577881043958:web:d5e6b264121ecd45d68dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(firebas/app)

export { auth }