import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const useStyles = makeStyles({
    root: {
      maxWidth: "100%",
    },
    media: {
      height: 500,
    },
  });
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <iframe
          className={classes.media}
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {video.snippet.title} - {video.snippet.channelTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {video.snippet.channelTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
