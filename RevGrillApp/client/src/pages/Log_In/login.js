import React, {useRef,useState} from 'react'
import { useAuth2 } from './auth_context';
import './login.css';

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
    //alert("Log In Success");
    setLoading(false);
  }

  async function servSub(e) {
    e.preventDefault();
    try {
        setLoading(true);
        setError('');
        console.log("Starting Server Submit")
        try {
          const isManager = await fetch("http://localhost:8080/server_sub");
          console.log(isManager);
          
        } catch(error) {
          console.log(error);
        }
        
        
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
        const isManager = await fetch("http://localhost:9000/is_manager");
        if(isManager) {
          //route to the manager side
        } else {
          console.alert("INVALID CREDENTIALS");
        }
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
      <div id = "logo">
          <div id = "actual_img">rev</div>
        </div>
        <form>
        {error && alert(error)}
       
        <div id = "regSig" >
        
                 <label id = "username_box">
            
            <input 
            placeholder = "Email"
              type = "email"
              ref = {emailRef}
            
            />
          </label>

       

          <label id = "pass_reg_box">
            
            <input 
              placeholder = "Password"
              type = "password"
              ref = {passRef}
            
            />
          </label>  

        
          <br></br>
          <button disabled = {loading} onClick = {submit} id = "signup-but" type = "signup">
            Log In!
          </button>
          </div>
          

       <div id = "emp">
          <label id = "emp_auth">
              
              <input
                  placeholder = "Employee ID" 
                  type = "number"
                  ref = {idRef}
              />
            </label>
            <br></br>
            <div className = "empButtons">
                <button disabled = {loading} onClick = {servSub} id = "emp-but" type = "signup">
                    Server
                </button>
                <button disabled = {loading} onClick = {manSub} id = "emp-but" type = "signup">
                    Manager
                </button>
            </div>
       </div>
       
        

         <button disabled = {loading} onClick = {oAuthSub} id = "oauth-but" type = "submit">
            Sign in with Google
        </button>


        <button id = "sign-up">
          Sign Up!
        </button>
        </form>
        
      </div>
    </>
  )
}