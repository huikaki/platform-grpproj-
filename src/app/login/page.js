"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { database } from "../firebaseConfig";
import { useAuthContext } from "../contexts/AuthContext";
function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setIsLoginFormSubmitted, setUser, user } = useAuthContext();
  const route = useRouter();
  // const database = getAuth(app);
  const handleBack = () => {
    route.push("/");
  };
  // useEffect(() => {
  //   setLoading(true);
  //   if (user == null) {
  //     setLoading(false);
  //   } else {
  //     setLoading(false);
  //     route.push("/profilepage");
  //   }
  // }, [user]);
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    // setEmail(e.target[1].value);
    // // console.log(email);

    // setPassword(e.target[2].value);
    // console.log("login ac");
    signInWithEmailAndPassword(database, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);

        setIsLoginFormSubmitted(true);
        route.push("/profilepage");
        // alert("user login");
        // route.push("/profilepage");
      })
      .catch((error) => {
        setError(error.message);
        alert(error);
      });
  };

  return (
    <div class="w-full h-screen flex items-center ">
      <div class="h-80 w-80 m-auto">
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          {error && <div>{error}</div>}
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
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
}
export default Page;
