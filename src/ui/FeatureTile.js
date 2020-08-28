import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const FeatureCard = (props) => {
  const classes = useStyles();
  const {
    imgPath,
    mediaTitle,
    titleText,
    description,
    showMore,
    actionOne,
  } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgPath}
          title={mediaTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {titleText}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={actionOne}>
          Share
        </Button>
        <Button size="small" color="primary" onClick={showMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeatureCard;
