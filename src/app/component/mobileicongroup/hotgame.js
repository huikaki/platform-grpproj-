import * as React from "react";
import { green, pink } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PageviewIcon from "@mui/icons-material/Pageview";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ChaletIcon from "@mui/icons-material/Chalet";
export default function IconAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: pink[500] }}>
        <PageviewIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: green[200] }}>
        <AgricultureIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: pink[800] }}>
        <CameraAltIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: green[900] }}>
        <ChaletIcon />
      </Avatar>
    </Stack>
  );
}
