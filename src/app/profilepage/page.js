"use client";
import MobileToolBar from "../component/mobiletoolbar/mobiletoolbar";
// import Header from "../component/Header.js";
import Link from "next/link";
import { useAuthContext } from "../contexts/AuthContext";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { getDocs, collection } from "firebase/firestore";
// import { firestore } from "../firebaseConfig";
import "./page.scss";
import EditProfile from "../editProfile/page";
import { firestore } from "../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore/lite";

export default function Profile() {
  const { user } = useAuthContext();
  const { logout } = useAuthContext();
  const route = useRouter();
  console.log("Profile", user);
  const [show, setShow] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    try {
      const userRef = doc(firestore, "users", user.uid);
      const docSnapshot = await getDoc(userRef);
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        console.log(userData);
        setBlogs(userData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // setLoading(true);
    if (user == null) {
      // setLoading(false);
      route.push("/login");
    } else {
      fetchData();
    }
  }, [user]);

  const handlelogout = () => {
    logout().then(() => {
      route.push("/");
    });
  };
  if (show) {
    return <EditProfile name={show}></EditProfile>;
  }

  return (
    <div className="page">
      <Container fluid>
        <Row>
          <Col md lg xl xxl={4} xs={12}>
            <div className="container">
              <div className="profilepic">
                <img src="user.imageLink"></img>
              </div>
              <div className="profiledes">
                <table className="proform">
                  <tr>
                    <td>User Name</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Desrciption</td>
                  </tr>
                  {/* <tr>
                    <td>{user.UserName}</td>
                    <td>{user.FirstName}</td>
                    <td>{user.LastName}</td>
                    <td>{user.Desrciption}</td>
                  </tr> */}
                </table>
              </div>
            </div>
          </Col>
          <Col md lg xl xxl={8} xs={12}>
            1 of 1
          </Col>
        </Row>
      </Container>

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
            <button
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                setShow(true);
              }}
            >
              Edit Profile
            </button>
            <button
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={handlelogout}
            >
              Log Out
            </button>
          </div>
          this is profile
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <MobileToolBar></MobileToolBar>
          </main>
        </div>
      )}
    </div>
  );
}
