import React from "react";
import { Button, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();                  // (1) lấy id từ URL
  const user = models.userModel(userId);           // (2) tìm user

  if (!user) {                                     // phòng trường hợp URL sai
    return <Typography variant="body1">User not found.</Typography>;
  }

  return (
    <div className="user-detail">
      <Typography variant="h4" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="body1"><b>Location:</b> {user.location}</Typography>
      <Typography variant="body1"><b>Occupation:</b> {user.occupation}</Typography>
      <Typography variant="body1" gutterBottom>
        <b>Description:</b> {user.description}
      </Typography>
      <Button variant="contained" component={Link} to={`/photos/${user._id}`} sx={{ mt: 1 }}>
        View photos
      </Button>
    </div>
  );
}

export default UserDetail;