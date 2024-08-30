import React from 'react'
import { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from "../assets/tp244-bg1-02.jpg"
// 
// 
import chackValidateData from "./validate"
// 
// firebase
import { updateProfile } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebas";
const Login = () => {
    const navigate=useNavigate()
    const [isSigninForm,setIsSigninFrom]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const fullname=useRef(null);
    const email=useRef(null);
    const password=useRef(null)
    function handeTest(e){
      e.preventDefault()
      email.current.value="johndoe@gmail.com"
      password.current.value="Johndoe@2000"
    }
    function handleToggle(e){
      email.current.value="johndoe@gmail.com"
      password.current.value=""
        setIsSigninFrom((c)=>!c)
    }    
    
    function handleButtonClick(e){
      e.preventDefault()
      // validate the form
      if(isSigninForm) 
        {
          const message= chackValidateData(null,email.current.value,password.current.value)
    setErrorMessage(message);
        }
      else{
          const message= chackValidateData(fullname.current.value,email.current.value,password.current.value)
    setErrorMessage(message)
        }
    if(errorMessage)return;
    // sign in or sign up
    if(!isSigninForm){
    
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // once the user is register updat ethe profiel with name
          updateProfile(user, {
            displayName: fullname.current.value
          }).then(() => {
            // Profile updated!
            // ...
            // updating store again
            const {email,displayName,uid} = auth.currentUser;
            navigate("/body")
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message)
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+""+errorMessage);
        });
      
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/body")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+""+errorMessage)
        });
    }
}
  return (
<div 
style={{backgroundImage:`url(${bgImage})`}}
className="relative  bg-cover bg-center flex justify-center items-center min-h-screen ">
  <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-md">
    <form className="z-10 w-full p-8">
      <h1 className="text-black font-bold text-2xl mb-6 text-center">
        {isSigninForm ? "Sign In" : "Sign Up"}
      </h1>

      {!isSigninForm && (
        <input 
          ref={fullname}
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
        />
      )}

      <input 
        ref={email}
        type="email"
        placeholder="Email"
        className="w-full p-3 mb-4 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
      />

      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="w-full p-3 mb-4 bg-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
      />

      <button 
        onClick={handleButtonClick}
        className="w-full p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
      >
        {isSigninForm ? "Sign In" : "Sign Up"}
      </button>

      {isSigninForm && (
        <button 
          onClick={handeTest}
          className="w-full p-3 mt-2 bg-white text-red-600 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
        >
          Sign in with test credentials
        </button>
      )}

      {errorMessage && (
        <p className="text-red-600 font-semibold text-center mt-4">{errorMessage}</p>
      )}

      <p
        onClick={handleToggle}
        className="mt-6 text-center text-black cursor-pointer hover:underline transition duration-300"
      >
        {isSigninForm ? "New user? Sign up now" : "Already registered? Sign in now."}
      </p>
    </form>
  </div>
</div>

  
  )
}

export default Login
