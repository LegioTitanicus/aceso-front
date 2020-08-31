import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import FeatureTile from "./FeatureTile";
import image1 from "../images/doctor-patient-tablet.jpg"
import image2 from "../images/doctors-masks-using-tablet.jpg";
import image3 from "../images/doctor-hands-computer.jpg";
import image4 from "../images/tablet1.jpg"
// import image5 from "../images/doc-desk.jpg"
// import image6 from "../images/doc-young-pat-tablet.png"
// import image7 from "../images/doctor-handshake.jpg";
// import image8 from "../images/doctors-masks.jpg"
// import image9 from "../images/tab-steth.jpg"
// import image10 from "../images/masked-tab-woman.jpg";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: "2.5rem 1.5rem 0 1.5rem",
  },
}));

const FeatureList = () => {
  const classes = useStyles();

  const testFill = () => {
    console.log("Hello World!");
  };

  const features = [
    {
      id: 1,
      imgPath: image1,
      mediaTitle: "x",
      titleText: "Universally ergomonic",
      description: "Built with every user in mind; whether a patient, clinician, CRO or sponsor...",
      showMore: { testFill },
      actionOne: { testFill },
    },
    {
      id: 2,
      imgPath: image2,
      mediaTitle: "x",
      titleText: "One App for Everything",
      description:
        "All from a single App\n\nPatients:\n-Appointment schedule and reminders...",
      showMore: { testFill },
      actionOne: { testFill },
    },
    {
      id: 3,
      imgPath: image3,
      mediaTitle: "x",
      titleText: "Cross-platform",
      description: "Web\nWindows\nMac\niOS\nAndroid",
      showMore: { testFill },
      actionOne: { testFill },
    },
    {
      id: 4,
      imgPath: image4,
      mediaTitle: "x",
      titleText: "Driven by Superior UX",
      description: "Taking advantage of the cutting edge Material-UI...",
      showMore: { testFill },
      actionOne: { testFill },
    },
  ];

  let mappedFeatureTiles = features.map((feature) => {
    return (
      <Grid key={feature.id} item xs={12} sm={6} md={4} >
        <FeatureTile
          imgPath={feature.imgPath}
          mediaTitle={feature.mediaTitle}
          titleText={feature.titleText}
          description={feature.description}
          showMore={testFill}
          actionOne={testFill}
        />
      </Grid>
    );
  });
  return <Grid container className={classes.grid} spacing={5} >{mappedFeatureTiles}</Grid>;
};

export default FeatureList;
