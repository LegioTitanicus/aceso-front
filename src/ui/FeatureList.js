import React from "react";
import { Grid } from "@material-ui/core";

import FeatureTile from "./FeatureTile";
import image1 from "../images/doctor-handshake.jpg";
import image2 from "../images/doctors-masks-using-tablet.jpg";
import image3 from "../images/doctor-hands-computer.jpg";
import image4 from "../images/masked-tab-woman.jpg";

const FeatureList = () => {
  const testFill = () => {
    console.log("Hello World!");
  };

  const features = [
    {
      id: 1,
      imgPath: image1,
      mediaTitle: "x",
      titleText: "Built with every user in mind",
      description: "Whether a patient, clinician, CRO or sponsor...",
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
      <Grid item xs={6} med={6}>
        <FeatureTile
          key={feature.id}
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
  return <Grid container>{mappedFeatureTiles}</Grid>;
};

export default FeatureList;
