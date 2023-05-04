import React, {useRef,useState} from 'react'
import { useAuth2 } from './auth_context';
import { useNavigate } from 'react-router-dom';
import './login.css';
const logo = require("../../assets/views/customer_side.png");

/**
 * React Component that allows users to login and displays the login page.
 * @module Login
 * @author Matthew
 */

export default function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  const idRef = useRef();
  const navigate = useNavigate();

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
          const isManager = await fetch("http://csce-315-project-3-backend.onrender.com/is_employee",{
            body: JSON.stringify({
              id: idRef
            })
          });
          
          
        } catch(error) {
          console.log(error);
        }
        
        
      } catch {
        setError("Server Log In Failed")
      }
      
      setLoading(false);
      navigate('/server_side/server_categories');
  } 

  async function manSub(e) {
    e.preventDefault();
    try {
        setLoading(true);
        setError('');
        const isManager = await fetch("http://csce-315-project-3-backend.onrender.com/is_manager",{
          body: JSON.stringify({
            id: idRef
          })
        });
        
      } catch {
        setError("Manager Log In Failed")
      }
      setLoading(false);
      navigate('/manager_side/inventory');

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
      navigate('/server_side/server_categories');
  } 

  function goSignup(){
      navigate('/signup');
  };


  return (
    <>
      <div className = "signup_wrap">
        <div id = "logo">
          <img src = {logo}/>
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


        <button id = "sign-up" onClick = {goSignup}>
          Sign Up!
        </button>
        </form>
        
      </div>
    </>
  )
}