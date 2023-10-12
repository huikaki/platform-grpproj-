// import React from "react";
// import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
// import { firestore } from "../../firebaseConfig";
// // import { use } from "react";
// import { useAuthContext } from "../../contexts/AuthContext";

// export const sendContactForm = async ({ title, tag, des, videoLink }) => {
//   const { user } = useAuthContext();
//   console.log(user.uid);
//   try {
//     const ref = collection(firestore, `users/${idUser}/general`);

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
