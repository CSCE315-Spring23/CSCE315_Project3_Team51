import React, { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import { auth } from "./innit-firebase";
import {isEmployee, isManager} from "../../../../../src/js/Employee.js"
import { GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";



const authContext = createContext();

export function useAuth2(){
    return useContext(authContext);
}

export function Auth_context({children}) {
    const [currentUser, setCurrUser] = useState();
    const [userLoad, setNewUserLoad ] = useState(true);

    

    function createAccount(email, password) {
        //console.log("oranges");
        return createUserWithEmailAndPassword(auth,email, password)
      }
    
    function login(email, password) {
      return signInWithEmailAndPassword(auth,email, password)
    }
    
    function logout() {
      return auth.signOut()
    }
    /*
    function empLogIn(id) {
      return isEmployee(id)
    } 
    
    function mannLogIn(id) {
      return isManager(id)
    }*/
    
    function oAuth() {
      const google = new GoogleAuthProvider;
      google.addScope('https://www.googleapis.com/auth/contacts.readonly');
      auth.languageCode = "it";
      return signInWithPopup(auth, google)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    })
    
  }

    useEffect( () => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrUser(user);
        setNewUserLoad(false);
      })
      return unsubscribe;
    },[])

    const value = {
        currentUser,
        createAccount,
        login,
        logout,
        oAuth
    }
    return(
        <authContext.Provider value = {value}>
            {!userLoad && children}
        </authContext.Provider>
    )

}