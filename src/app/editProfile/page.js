"use client";
// import { Form, Button, Card } from "react-bootstrap";
import Link from "next/link";
import { useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { Card, ListItem, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import CircularProgress from "@mui/material/CircularProgress";
import "../firebaseConfig";
// import "./uploaddialogui.css";
import { app } from "../firebaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addDoc, collection, doc } from "firebase/firestore/lite";
import { firestore } from "../firebaseConfig";
import { document } from "postcss";

function EditProfile(prop) {
  const [onIcon, setOnIcon] = useState(false);
  const route = useRouter();
  const { user } = useAuthContext();
  const [open, setOpen] = useState(prop.name);
  const [image, setImage] = useState([]);
  const handleClose = () => {
    setOpen(false);
    prop.onClose();
  };
  const [progressUp, setProgressUp] = useState(0);
  const handleSelectedFile = (file) => {
    if (file.size < 1000000000000) {
      console.log(file);
      setImage(file);
      setOnIcon(true);
    } else {
      alert("File too large");
    }
  };
  const handleFileRemove = () => {
    setImage([]);
    setOnIcon(false);
  };
  const submitDetail = async (e) => {
    console.log("is uploading");
    e.preventDefault();
    console.log(e);
    if (image) {
      const name = image.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, `image/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgressUp(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          message.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            upTotheFireBaseDB(downloadURL);
            console.log(downloadURL);
          });
        }
      );
    } else {
      alert("File not found");
    }
    const upTotheFireBaseDB = (url) => {
      let docDate = {
        UserName: e.target[0].value,
        FirstName: e.target[1].value,
        LastName: e.target[2].value,
        Desrciption: e.target[3].value,
        imageLink: url,
      };
      const ref = doc(firestore, `users/${user.uid}`);
      addDoc(ref, docDate, { merge: true })
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
          alert(error);
        });
    };
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Please Input Your Related Information</DialogTitle>
        <form class="w-full max-w-lg" onSubmit={submitDetail}>
          <DialogContent>
            <div class="divide-y divide-slate-700">
              <input
                className="UserName"
                required
                placeholder="Username"
                type={"text"}
                maxLength={25}
              />
            </div>
            <div class="divide-y divide-slate-700">
              <input
                className="FirstName"
                required
                placeholder="First Name"
                type={"text"}
                maxLength={25}
              />
            </div>
            <div>
              <input
                className="LastName"
                required
                placeholder="Last Name"
                type={"text"}
              />
            </div>
            <div>
              <textarea
                className="inputdes"
                required
                placeholder="Desrciption"
                rows={2}
              ></textarea>
            </div>

            <p>Upload Your Profile Image Here</p>
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-zinc-950 dark:text-zinc-950"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-zinc-950 dark:text-zinc-950">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-zinc-950 dark:text-zinc-950">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept="image/*"
                  class="hidden"
                  onChange={(e) => {
                    handleSelectedFile(...e.target.files);
                  }}
                />
              </label>
            </div>
            {onIcon && (
              <Card>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem
                    secondaryAction={
                      <button onClick={handleFileRemove}>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
                        </svg>
                      </button>
                    }
                  >
                    <CircularProgress
                      className="progressbar"
                      aria-busy="true"
                      variant="determinate"
                      value={progressUp}
                      size={20}
                    />
                    <ListItemText primary={image.name} secondary={image.size} />
                  </ListItem>
                </List>
              </Card>
            )}
            <div className="uploadformbutton">
              <div className="closebutton">
                <button onClick={handleClose}>Close</button>
              </div>
              <div className="uploadbutton">
                <button type="submit">Submit</button>
              </div>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
export default EditProfile;
