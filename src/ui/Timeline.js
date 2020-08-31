import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab";
import { Paper, Typography } from "@material-ui/core";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import HelpIcon from "@material-ui/icons/Help";
import MoodIcon from "@material-ui/icons/Mood";
import StorageIcon from "@material-ui/icons/Storage";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SecurityIcon from "@material-ui/icons/Security";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  timeline: {
    marginTop: "0px",
  },
  timelineDot: {
    color: "#ed1b2e",
  },
}));

const CustomizedTimeline = () => {
  const classes = useStyles();

  return (
    <div className={classes.timeline}>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h5" color="textSecondary">
              Stage One
            </Typography>
            <Typography variant="h5">EHR</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.timelineDot}>
              <LocalHospitalIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Patient Management
              </Typography>
              <br />
              <Typography>
                • Mailers
                <br />
                • Existing database migration into Aceso
                <br />• Scheduling system for appointments
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h5" color="textSecondary">
              Stage Two
            </Typography>
            <Typography variant="h5">Placeholder</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Clinical Trial Interface
              </Typography>
              <Typography>
                Study Creation Tool •
                <br />
                eCOA •
                <br />
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined">
              <EmojiPeopleIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Patient Facing System
              </Typography>
              <Typography>
                • ePRO
                <br />
                • somethingSomething
                <br />
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined">
              <HelpIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                CRO Facing System
              </Typography>
              <Typography>
                Querying •
                <br />
                Metrics •
                <br />
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined">
              <StorageIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Complete Data Transfer From Existing Systems
              </Typography>
              <Typography>
                • somethingSomething
                <br />
                • somethingSomething
                <br />
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h5" color="textSecondary">
              Stage Three
            </Typography>
            <Typography variant="h5">UX {"&"} Penetration Testing</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <AssessmentIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Advanced Data Visualization
              </Typography>
              <Typography>
                somethingSomething •
                <br />
                somethingSomething •
                <br />
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <MoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                UX Rebuild With Real Users
              </Typography>
              <Typography>
                • somethingSomething
                <br />
                • somethingSomething
                <br />
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SecurityIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Penetration Testing
              </Typography>
              <Typography>
                Unparalleled Security •
                <br />
                HIPAA Compliant •
                <br />
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default CustomizedTimeline;
