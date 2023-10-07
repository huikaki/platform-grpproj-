"use client"
import {Form,Button,Card} from 'react-bootstrap';
import Link from 'next/link'
import { createUserWithEmailAndPassword } from "firebase/auth";
import  { useState } from 'react';
import {database} from '../firebaseConfig';
function page(){
    
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log(e)
        const email = e.target.form[0].value;
        const password = e.target.form[1].value;
        console.log(email + password);
        createUserWithEmailAndPassword(database, email, password)
        .then((userCredential) => {
        console.log("ok");
        const user = userCredential.user;
        alert("user login");
     

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });




    
}

    return (
        <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="emil" type="email" placeholder="Email"></input>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div>
            <p id = "msg"></p>
          </div>
          <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(e)=>{handleSubmit(e)}}>
              Sign Up
          </button>

            <Link href="/login"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >
            Login In
            </button></Link>
       
          </div>
          
        </form>
        

      </div>  
    )};
export default page;