"use client";
import * as React from "react";
import { useState } from "react";
import UploadPop from "../uploadVideo/uploadFun";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthContext } from "@/app/contexts/AuthContext";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
export default function MobileToolBar() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { user } = useAuthContext();
  const [open, setOpen] = useState(true);
  console.log(show);

  if (show && user) {
    return (
      <UploadPop
        name={show}
        onClose={() => {
          setShow(false);
        }}
      />
    );
  }
  if (!user && show) {
    return (
      <Stack
        sx={{ width: "100%", position: "absolute", top: 0, right: 0 }}
        spacing={2}
      >
        <Collapse in={open}>
          <Alert
            onClose={() => {
              setOpen(false);
            }}
            severity="error"
          >
            Please Login In Upload Video!
          </Alert>
        </Collapse>
      </Stack>
    );
  }
  return (
    <div>
      <div class="fixed bottom-0 z-50 w-full -translate-x-1/2 border-black border-t bg-black left-1/2 border-t-stone-100">
        <div class="sticky bottom-0 left-0 z-50 w-full h-16 border-black border-t border-t-stone-100">
          <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
            <button
              type="button"
              class="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
              onClick={() => router.push("/")}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M946.5 505L534.6 93.4a31.93 31.93 0 00-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
              </svg>
              <span>Home</span>
            </button>
            <button
              type="button"
              class="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M18.319 14.433A8.001 8.001 0 006.343 3.868a8 8 0 0010.564 11.976l.043.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a1.116 1.116 0 00-.045-.042zm-2.076-9.15a6 6 0 11-8.485 8.485 6 6 0 018.485-8.485z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Browse</span>
            </button>
            <button
              type="button"
              class="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
              onClick={() => {
                setShow(true);
              }}
            >
              <svg fill="none" viewBox="0 0 24 24" height="1.8em" width="1.8em">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M13 7a1 1 0 10-2 0v4H7a1 1 0 100 2h4v4a1 1 0 102 0v-4h4a1 1 0 100-2h-4V7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              class="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path d="M2 1a1 1 0 00-1 1v8a1 1 0 001 1h9.586a2 2 0 011.414.586l2 2V2a1 1 0 00-1-1H2zm12-1a2 2 0 012 2v12.793a.5.5 0 01-.854.353l-2.853-2.853a1 1 0 00-.707-.293H2a2 2 0 01-2-2V2a2 2 0 012-2h12z" />
                <path d="M5 6a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              <span>Inbox</span>
            </button>

            <button
              type="button"
              class="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
              onClick={() => router.push("/profilepage")}
            >
              <svg fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Profile</span>
            </button>
          </div>
        </div>
      </div>
      {/* {!user && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">Please Login Uo Upload Video!</Alert>
        </Stack>
      )} */}
      {/* {show && (
        <UploadPop
          name={show}
          onClose={() => {
            setShow(false);
          }}
        />
      )} */}
    </div>
  );
}
