"use client";
import { useState } from "react";
import Link from "next/link";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "../firebaseConfig";
function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const route = useRouter();
  const database = getAuth(app);
  const handleSubmit = (e) => {
    // console.log(e);
    setEmail(e.target[0].value);
    setPassword(e.target[1].value);
    const userEmail = email;
    const userPassword = password;
    console.log("login ac");
    signInWithEmailAndPassword(database, userEmail, userPassword)
      .then((user) => {
        // Signed in
        // const user = userCredential.user;
        // alert("user login");
        route.push("/profilepage");
      })
      .catch((error) => {
        setError(error.message);
        // alert(error);
      });
    e.preventDefault();
  };
  return (
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {error && <div>{error}</div>}
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
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
          ></input>
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Submit"
            // onClick={(e) => {
            //   handleSubmit(e);
            // }}
          >
            Login In
          </button>

          <Link href="/signin">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Page;
