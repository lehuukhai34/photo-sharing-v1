import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useMatch } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

function TopBar() {
  const detailMatch = useMatch("/users/:userId");
  const photosMatch = useMatch("/photos/:userId");

  const userId = (detailMatch || photosMatch)?.params.userId;
  const user = userId ? models.userModel(userId) : null;
  const name = user ? `${user.first_name} ${user.last_name}` : "";

  let context = "";
  if (detailMatch) context = name;
  else if (photosMatch) context = `Photos of ${name}`;

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5" color="inherit">Le Huu Khai b23dcat143</Typography>
        <Typography variant="h6" color="inherit">{context}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;