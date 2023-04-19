import React, {useRef} from 'react'

export default function signup() {
  const emailRef = useRef();
  const passRef = useRef();
  const passRefCon = useRef();
  return (
    <>
      <div className = "signup_wrap">

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
    

        <button id = "signup-but" type = "signup">
          Sign Up!
        </button>
      </div>
    </>
  )
}