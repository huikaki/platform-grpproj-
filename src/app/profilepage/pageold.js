"use client";
import MobileToolBar from "../component/mobiletoolbar/mobiletoolbar";
// import Header from "../component/Header.js";
import Link from "next/link";
import { useAuthContext } from "../contexts/AuthContext";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {
  const { user } = useAuthContext();
  const { logout } = useAuthContext();
  const route = useRouter();
  console.log("Profile", user);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (user == null) {
      setLoading(false);
      route.push("/login");
    } else {
      setLoading(false);
    }
  }, [user]);
  const handlelogout = () => {
    logout().then(() => {
      route.push("/");
    });
  };
  if (loading) {
    return <p>Loading, Please Wait</p>;
  }
  return (
    <div>
      {user && (
        <div class="h-screen w-screen">
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto h-screen">
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-20 h-20 p-1 mt-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpW3wXWamB24V30JS_MuFNd9DHw0YKo3L0A&usqp=CAU"
                alt="Bordered avatar"
              />

              <h5 class="mb-1 text-xl pt-8 font-medium text-gray-900 dark:text-white">
                {user?.email}
              </h5>
              <span class="text-sm pt-4 text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
            </div>
            <Link href="/editProfile">
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Edit Profile
              </button>
            </Link>
            <button
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={handlelogout}
            >
              Log Out
            </button>
          </div>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <MobileToolBar></MobileToolBar>
          </main>
        </div>
      )}
    </div>
  );
}
