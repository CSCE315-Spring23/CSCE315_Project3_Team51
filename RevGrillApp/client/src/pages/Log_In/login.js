import React, {useRef,useState} from 'react'
import { useAuth2 } from './auth_context';



export default function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  const idRef = useRef();

  const {login,empLogIn,mannLogIn,oAuth} = useAuth2();

  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError('');
      await login(emailRef.current.value,passRef.current.value);
    } catch {
      setError("Customer Log In Failed")
    }
    alert("Log In Success");
    setLoading(false);
  }

  async function servSub(e) {
    e.preventDefault();
    try {
        setLoading(true);
        setError('');
        await empLogIn(idRef.current.value);
      } catch {
        setError("Server Log In Failed")
      }
      
      setLoading(false);
  } 

  async function manSub(e) {
    e.preventDefault();
    try {
        setLoading(true);
        setError('');
        await mannLogIn(idRef.current.value);
      } catch {
        setError("Manager Log In Failed")
      }
      setLoading(false);
  } 

  async function oAuthSub(e) {
    e.preventDefault();
    try {
        setLoading(true);
        setError('');
        await oAuth();
      } catch {
        setError("OAUTH Log In Failed")
      }
      setLoading(false);
  } 


  return (
    <>
      <div className = "signup_wrap">
        <form>
        {error && alert(error)}
        
        <label id = "username_box">
          Email: 
          <input 
            type = "email"
            ref = {emailRef}
            
          />
        </label>

        <label id = "pass_reg_box">
          Password: 
          <input 
            type = "password"
            ref = {passRef}
            
          />
        </label>  


        <button disabled = {loading} onClick = {submit} id = "signup-but" type = "signup">
          Log In!
        </button>

        <button disabled = {loading} onClick = {oAuthSub} id = "oauth-but" type = "submit">
            OAuth
        </button>

        <label id = "emp_auth">
            Employee ID:
            <input 
                type = "number"
                ref = {idRef}
            />
        </label>
        <div className = "empButtons">
            <button disabled = {loading} onClick = {servSub} id = "signup-but" type = "signup">
                Server
            </button>
            <button disabled = {loading} onClick = {manSub} id = "signup-but" type = "signup">
                Manager
            </button>
        </div>
        

        </form>
      </div>
    </>
  )
}