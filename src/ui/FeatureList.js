import React from "react";
import FeatureTile from "./FeatureTile";

const FeatureList = () => {
  const testFill = () => {
    console.log("Hello World!");
  };

  const features = [
    {
      id: 1,
      imgPath: "x",
      mediaTitle: "x",
      titleText: "Built with every user in mind",
      description: "Whether a patient, clinician, CRO or sponsor...",
      showMore: { testFill },
      actionOne: { testFill },
    },
    {
      id: 2,
      imgPath: "x",
      mediaTitle: "x",
      titleText: "One App for Everything",
      description:
        "All from a single App\n\nPatients:\n-Appointment schedule and reminders...",
      showMore: { testFill },
      actionOne: { testFill },
    },
    {
      id: 3,
      imgPath: "x",
      mediaTitle: "x",
      titleText: "Cross-platform",
      description: "Web\nWindows\nMac\niOS\nAndroid",
      showMore: { testFill },
      actionOne: { testFill },
    },
    {
      id: 4,
      imgPath: "x",
      mediaTitle: "x",
      titleText: "Driven by Superior UX",
      description: "Taking advantage of the cutting edge Material-UI...",
      showMore: { testFill },
      actionOne: { testFill },
    },
  ];

  let mappedFeatureTiles = features.map((feature) => {
    return (
      <FeatureTile
        key={feature.id}
        imgPath={feature.imgPath}
        mediaTitle={feature.mediaTitle}
        titleText={feature.titleText}
        description={feature.description}
        showMore={testFill}
        actionOne={testFill}
      />
    );
  });
  return mappedFeatureTiles;
};

export default FeatureList;
