"use client";
import * as React from "react";
import { useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Card, ListItem, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import "../../firebaseConfig";
import "./uploaddialogui.css";
import { app } from "../../firebaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
// import { sendContactForm } from "./senduploadinfo";
import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { firestore } from "../../firebaseConfig";
// import { use } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

function UploadPop(prop) {
  const [onIcon, setOnIcon] = useState(false);
  const [open, setOpen] = useState(prop.name);
  const handleClose = () => {
    setOpen(false);
    prop.onClose();
  };
  const { user } = useAuthContext();
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const [videoFile, setVideoFile] = useState([]);
  const [downloadURL, setDownloadURL] = useState("");
  // const [isUploading, setisUploading] = useState(false);
  const [progressUp, setProgressUp] = useState(0);

  const submitContact = async (e) => {
    console.log("is uploading");
    e.preventDefault();
    console.log(e);
    if (videoFile) {
      const name = videoFile.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, `video/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, videoFile);
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

    // const res = await sendContactForm({
    //   title: e.target[0].value,
    //   tag: e.target[1].value,
    //   des: e.target[2].value,
    //   videoLink: { downloadURL },
    //   user,
    // });
    const upTotheFireBaseDB = (url) => {
      let docDate = {
        title: e.target[0].value,
        tag: e.target[1].value,
        des: e.target[2].value,
        videoLink: url,
      };
      const ref = collection(firestore, `users/${user.uid}/video`);
      addDoc(ref, docDate, { merge: true })
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
          alert(error);
        });
    };
  };
  //   console.log("res", res.videoLink);
  //   if (res == 0) {
  //     setMessage("Thank you for your valuable comment!");
  //     formRef.current.reset();
  //   } else {
  //     setMessage("Something went wrong! Please try again");
  //   }
  // };

  const handleSelectedFile = (file) => {
    if (file.size < 1000000000000) {
      console.log(file);
      setVideoFile(file);
      setOnIcon(true);
    } else {
      alert("File too large");
    }
  };
  // const handleUploadFile = () => {};
  const handleFileRemove = () => {
    setVideoFile([]);
    setOnIcon(false);
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Upload Your Video and Related Information</DialogTitle>
        <form ref={formRef} onSubmit={submitContact}>
          <DialogContent>
            <div class="divide-y divide-slate-700">
              <input
                className="inputtile"
                required
                placeholder="Title*"
                type={"text"}
                maxLength={25}
              />
            </div>
            <div>
              <input
                className="tags"
                required
                placeholder="Tags*"
                type={"text"}
              />
            </div>
            <div>
              <textarea
                className="inputdes"
                required
                placeholder="Desrciption*"
                rows={2}
              ></textarea>
            </div>

            <p>Upload Here</p>
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
                  accept="video/*"
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
                    <ListItemText
                      primary={videoFile.name}
                      secondary={videoFile.size}
                    />
                  </ListItem>
                </List>
              </Card>
            )}

            <div className="uploadformbutton">
              <div className="closebutton">
                <button onClick={handleClose}>Close</button>
              </div>
              <div className="uploadbutton">
                <button type="submit">Upload</button>
              </div>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
export default UploadPop;

// const sendContactForm = async ({ title, tag, des, videoLink, user }) => {
//   console.log(user.uid);
//   try {
//     const ref = collection(firestore, `users/${user.uid}/video`);
//     await addDoc(ref, {
//       title,
//       tag,
//       des,
//       videoLink,
//       sentAt: Timestamp.now().toDate(),
//     });
//     return 0;
//   } catch (err) {
//     console.log(err);
//     return -1;
//   }
// };
