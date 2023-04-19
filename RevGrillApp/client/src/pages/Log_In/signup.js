import React, {useRef} from 'react'
import { useAuth } from './auth_context';



export default function Signup() {
  const emailRef = useRef();
  const passRef = useRef();
  const passRefCon = useRef();
  const {signup} = useAuth();

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
      await signup(emailRef.current.value,passRef.current.value);
    } catch {
      setError("Account Creation Failed")
    }
    setLoading(false);
  }


  return (
    <>
      <div className = "signup_wrap">
        <form onSubmit = {sumbit}>
        {error && alert(error)}
        
        <label id = "username_box">
          Email: 
          <input 
            type = "email"
            ref = {emailRef}
            required
          />
        </label>

        <label id = "pass_reg_box">
          Password: 
          <input 
            type = "password"
            ref = {passRef}
            required
          />
        </label>  

        <label id = "pass_con_box">
          Password Confirmation: 
          <input 
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