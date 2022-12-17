import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import LanguageIcon from "@mui/icons-material/Language";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Avatar from '@mui/material/Avatar';
import { format } from "date-fns"

const GitHubCard = ({ repo }) => {
  return (
    <Card sx={{ maxWidth: 345, mt: 5, backgroundColor: "#e8eaf6", color: "#00838f", borderRadius: "10px", boxShadow: "9px 6px 5px 1px #8C8C8C", pl: 2, pr: 2 }}>
      <Avatar
        alt={repo.login}
        src={repo.avatar_url}
        sx={{ width: 56, height: 56 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {repo.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: "#006064", fontWeight: "bold" }} >
          {repo.description}
        </Typography>
      </CardContent>
      <CardActions>
        {repo.language && <Chip label={repo.language} color="primary" sx={{ mr: 10, backgroundColor: "#00838f", color: "#fff" }} />}
        <Typography>{repo.stargazers_count.toLocaleString()} stars</Typography>
      </CardActions>
      <Typography sx={{ fontSize: 12 }}>
        Last update: {format(new Date(repo.updated_at), "dd/MM/yy")}
      </Typography>
    </Card>
  );
};

export default GitHubCard;
