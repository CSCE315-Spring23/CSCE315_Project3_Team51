import React, { createContext } from "react";
import { useContext } from "react";
import { auth } from "./innit-firebase";


const authContext = createContext();

export function useAuth(){
    return useContext(authContext);
}

export function Auth_context({children}) {
    const [currentUser, setCurrUser] = useState();
    const [userLoad, setNewUserLoad ] = useState(true);

    useEffect( () => {
      const unsubscribe = auth.onAuthStateChange(user => {
        setCurrUser(user);
        setNewUserLoad(false);
      })
      return unsubscribe;
    },[])

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
      }
    
    function login(email, password) {
      return auth.signInWithEmailAndPassword(email, password)
    }
    
    function logout() {
      return auth.signOut()
    }
    
     
      

    const value = {
        currentUser,
        signup,
        login,
        logout,
   
    }
    return(
        <Auth_context.Provider value = {value}>
            {!userLoad && children}
        </Auth_context.Provider>
    )

}