"use client";
import MobileToolBar from "../component/mobiletoolbar/mobiletoolbar";
// import Header from "../component/Header.js";
import Link from "next/link";
import { useAuthContext } from "../contexts/AuthContext";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { firestore } from "../firebaseConfig";
import "./page.scss";
import EditProfile from "../editProfile/page";
import { app, firestore } from "../firebaseConfig";
import {
  collection,
  collectionGroup,
  doc,
  getDoc,
} from "firebase/firestore/lite";
import "bootstrap/dist/css/bootstrap.css";
import "./profile.scss";
import { getAuth, signOut } from "firebase/auth";

export default function Profile() {
  const { user } = useAuthContext();
  const { logout } = useAuthContext();
  const route = useRouter();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    console.log("Profile", user);
    const userNo = user?.uid;
    console.log("userNo", userNo);
    setLoading(true);
    if (user == null) {
      setLoading(false);
      route.push("/login");
    } else {
      setLoading(false);
    }
  }, [user]);

  const handlelogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("signout successfully");
        route.push("/");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const handleBack = () => {
    route.push("/");
  };
  if (show) {
    return (
      <EditProfile
        name={show}
        onClose={() => {
          setShow(false);
        }}
      ></EditProfile>
    );
  }
  window.addEventListener("load", () => {
    Fetchdata();
  });
  const Fetchdata = async () => {
    await getDocs(collection(firestore, "users", userNo)).then(
      (querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
          console.log(info);
        });
      }
    );
  };
  return (
    <section class="h-100 gradient-custom-2">
      <MobileToolBar />
      {user && (
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-9 col-xl-7">
              <div class="card">
                <div class="box1 relative rounded-top text-white d-flex flex-row">
                  <button
                    class="block text-gray-700 text-xs absolute font-bold mb-2 top-5 left-10"
                    type="button"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <div class="ms-4 mt-5 d-flex flex-column profilePic">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      class=" img-fluid img-thumbnail mt-4 mb-2"
                    />
                    {/* <Link href="/editProfile"> */}
                    <button
                      type="button"
                      class="editProfile btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      onClick={() => {
                        setShow(true);
                      }}
                    >
                      Edit profile
                    </button>
                    {/* </Link> */}
                    <button
                      type="button"
                      class="editProfile btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      onClick={handlelogout}
                    >
                      Log Out
                    </button>
                  </div>
                  <div class="ms-3 info">
                    <h5>{user?.name}</h5>
                    <p>New York</p>
                    <p>{user?.email}</p>
                  </div>
                </div>
                <div class="p-4 text-black">
                  <div class="d-flex justify-content-end text-center py-1">
                    <div>
                      <p class="mb-1 h5">253</p>
                      <p class="small text-muted mb-0">Video</p>
                    </div>
                    <div class="px-3">
                      <p class="mb-1 h5">1026</p>
                      <p class="small text-muted mb-0">Followers</p>
                    </div>
                    <div>
                      <p class="mb-1 h5">478</p>
                      <p class="small text-muted mb-0">Following</p>
                    </div>
                  </div>
                </div>
                <div class="card-body p-4 text-black">
                  <div class="mb-5">
                    <p class="lead fw-normal mb-1">About</p>
                    <div class="p-4">
                      <p class="font-italic mb-1">Web Developer</p>
                      <p class="font-italic mb-1">Lives in New York</p>
                      <p class="font-italic mb-0">Photographer</p>
                    </div>
                    {info.map((data) => console.log(data))}
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <p class="lead fw-normal mb-0">Recent Video</p>
                  <p class="mb-0">
                    <a href="#!" class="text-muted">
                      Show all
                    </a>
                  </p>
                </div>
                <div class="row g-2">
                  <div class="col mb-2">
                    <img
                      src="https://i.ytimg.com/vi/nHhAEkG1y2U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvciMncLXs77ExKwjm7MOOnUgoLQ"
                      alt="video 1"
                      class="w-100 rounded-3"
                    />
                  </div>
                  <div class="col mb-2">
                    <img
                      src="https://i.ytimg.com/vi/FExp9YuTzbY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfob0IthwFxAbg9GppTTGcM95SiA"
                      alt="image 1"
                      class="w-100 rounded-3"
                    />
                  </div>
                </div>
                <div class="row g-2">
                  <div class="col">
                    <img
                      src="https://i.ytimg.com/vi/Z4Gr4X2dxXo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmBrfxuAlWpAvaAVPJkFtz5_m5QA"
                      alt="image 1"
                      class="w-100 rounded-3"
                    />
                  </div>
                  <div class="col">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1"
                      class="w-100 rounded-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        // </div>
      )}
    </section>
  );
}

const Frame = ({ course, name, age }) => {
  console.log(course + " " + name + " " + age);
  return (
    <center>
      <div className="div">
        <p>NAME : {name}</p>

        <p>Age : {age}</p>

        <p>Course : {course}</p>
      </div>
    </center>
  );
};
