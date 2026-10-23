import React from "react";
import { Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

function formatDate(dateTime) {
  const d = new Date(dateTime.replace(" ", "T").replace(/T(\d):/, "T0$1:"));
  const date = Number.isNaN(d.getTime()) ? new Date(dateTime) : d;
  return Number.isNaN(date.getTime()) ? dateTime : date.toLocaleString();
}

function Comment({ comment }) {
  return (
    <div className="comment">
      <Divider sx={{ my: 1 }} />
      <Typography variant="subtitle2">
        <Link to={`/users/${comment.user._id}`}>
          {comment.user.first_name} {comment.user.last_name}
        </Link>
        {" · "}
        {formatDate(comment.date_time)}
      </Typography>
      <Typography variant="body2">{comment.comment}</Typography>
    </div>
  );
}

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  if (photos.length === 0) {
    return <Typography variant="body1">This user has no photos.</Typography>;
  }

  return (
    <div>
      {photos.map((photo) => (
        <Card key={photo._id} className="photo-card" sx={{ mb: 3 }}>
          <CardMedia
            component="img"
            image={require(`../../images/${photo.file_name}`)}
            alt={photo.file_name}
            sx={{ maxHeight: 400, objectFit: "contain" }}
          />
          <CardContent>
            <Typography variant="caption" color="text.secondary">
              Posted: {formatDate(photo.date_time)}
            </Typography>
            {photo.comments && photo.comments.length > 0 && (
              <Typography variant="h6" sx={{ mt: 1 }}>Comments</Typography>
            )}
            {(photo.comments || []).map((c) => (
              <Comment key={c._id} comment={c} />
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;