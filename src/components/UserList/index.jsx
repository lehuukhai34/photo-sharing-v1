import React from "react";
import { Divider, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

function UserList() {
  const users = models.userListModel();            // (1) lấy dữ liệu
  return (
    <List component="nav">
      {users.map((user) => (                       // (2) lặp từng user
        <React.Fragment key={user._id}>
          <ListItemButton component={Link} to={`/users/${user._id}`}>   {/* (3) link */}
            <ListItemText primary={`${user.first_name} ${user.last_name}`} />
          </ListItemButton>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default UserList;