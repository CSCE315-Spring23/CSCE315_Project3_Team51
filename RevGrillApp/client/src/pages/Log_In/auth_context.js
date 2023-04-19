import React, { createContext } from "react";
import { useContext } from "react";
import { auth } from "./innit-firebase";
import {isEmployee, isManager} from "../../../../../src/js/Employee.js"

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
    
    function empLogIn() {
      return isEmployee(id)
    } 
    
    function mannLogIn() {
      return isManager(id)
    } 

    const value = {
        currentUser,
        signup,
        login,
        logout,
        empLogIn,
        mannLogIn
    }
    return(
        <Auth_context.Provider value = {value}>
            {!userLoad && children}
        </Auth_context.Provider>
    )

}