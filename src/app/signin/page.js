"use client";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { database } from "../firebaseConfig";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore/lite";
import { firestore } from "../firebaseConfig";
let user;
function Page() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const route = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    // const email = e.target.form[0].value;
    // const password = e.target.form[1].value;
    console.log(email + password);
    createUserWithEmailAndPassword(database, email, password)
      .then(async (userCredential) => {
        // console.log("ok");
        // const user = userCredential.user;
        // alert("user login");
        console.log(userCredential.user);
        user = userCredential.user;
        setUserID(user.uid);
        setUserEmail(user.email);
        console.log("user", user, "id", user.uid, "email", user.email);
        console.log("ok");
        console.log(user);
        const res = await createUserFile({
          userUID: user.uid,
          userEmail: user.email,
        });
        // createUserFile({
        //   userUID: user.uid,
        //   userEmail: user.email,
        //   userPassword: user.password,
        // });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const handleBack = () => {
    route.push("/login");
  };

  return (
    <div class="ax-w-xs w-full h-screen flex items-center">
      <div class="h-80 w-80 m-auto">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <button
              class="block text-gray-700 text-xs font-bold mb-2"
              type="button"
              onClick={handleBack}
            >
              Back
            </button>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="emil"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div>
            <p id="msg"></p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign Up
            </button>

            <Link href="/login">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Page;

async function createUserFile({ userUID, userEmail }) {
  try {
    console.log(userUID);
    const userDocRef = doc(firestore, "users", userUID);
    await setDoc(userDocRef, {
      userUID,
      userEmail,
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
}
