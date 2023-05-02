import React, {useRef,useState} from 'react'
import { useAuth2 } from './auth_context';
import './signup.css';
const logo = require("../../assets/views/customer_side.png");


export default function Signup() {
  const emailRef = useRef();
  const passRef = useRef();
  const passRefCon = useRef();
  const {createAccount} = useAuth2();

  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);

  
  async function sumbit(e) {
    e.preventDefault();
    if(passRef.current.value != passRefCon.current.value) {
      return setError("Passwords Don't Match")
    }
    try {
      setLoading(true);
      setError('');
      await createAccount(emailRef.current.value,passRef.current.value);
    } catch (error) {
      console.log(error);
      setError("Account Creation Failed")
    }
    setLoading(false);
  }


  return (
    <>
      
      <div className = "signup_wrap">
      <div id = "logo">
          <img src = {logo}/>
        </div>
        <form onSubmit = {sumbit}>
        {error && alert(error)}
        <div>
          Sign Up!
        </div>
        <label id = "username_box">
           
          <input
            placeholder = "Email" 
            type = "email"
            ref = {emailRef}
            required
          />
        </label>

        <label id = "pass_reg_box">
           
          <input
            placeholder = "Password" 
            type = "password"
            ref = {passRef}
            required
          />
        </label>  

        <label id = "pass_con_box">
          
          <input
            placeholder = "Password Confirmation" 
            type = "password"
            ref = {passRefCon}
            required
          />
        </label>    
    

        <button disabled = {loading} id = "signup-but" type = "signup">
          Sign Up!
        </button>

        </form>
      </div>
    </>
  )
}