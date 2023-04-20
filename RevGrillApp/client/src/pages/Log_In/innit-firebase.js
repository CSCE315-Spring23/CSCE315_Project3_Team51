import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyAwKkwyOq2G1cx9DjcW7vXHaVj_1xEWAO0",
    authDomain: "proj3-791f9.firebaseapp.com",
    projectId: "proj3-791f9",
    storageBucket: "proj3-791f9.appspot.com",
    messagingSenderId: "799854173902",
    appId: "1:799854173902:web:d1710a66c7bd1c3c68fa9f",
    measurementId: "G-12HNFRGKQH"
  };

  const proj = initializeApp(firebaseConfig);
  export const auth = getAuth(proj);
  export default proj;
