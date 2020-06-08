import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default ({ video, onVideoSelect }) => {

  const useStyles = makeStyles({
    root: {
      maxWidth: "100",
    },
    media: {
      height: "50",
    },
    body : {
      height : 50
    }
  });
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={() => onVideoSelect(video)}>
      <CardActionArea>
      <img className={classes.media} src={video.snippet.thumbnails.medium.url} />
   
        <CardContent className={classes.body}>
          <Typography gutterBottom variant="h5" component="h2">
          {video.snippet.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
