import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography'

const useStyles = makeStyles({
    timeline: {
        transform: "rotate(270deg)"
    },
    timelineContentContainer: {
        textAlign: "left"
    },
    timelineContent: {
        display: "inline-block",
        transform: "rotate(-270deg)",
        textAlign: "center",
        minWidth: 50
    },

});

export default function AlternateTimeline() {

    const classes = useStyles();

    return (
        <Timeline position="alternate" className={classes.timeline}>
            <TimelineItem>
                <TimelineSeparator >
                    {/* <TimelineDot /> */}
                    <TimelineConnector className={classes.timelineIcon} />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                    <Typography variant="subtitle1" className={classes.timelineContent}>
                        Mon
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator >
                    {/* <TimelineDot /> */}
                    <TimelineConnector className={classes.timelineIcon} />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                    <Typography variant="subtitle1" className={classes.timelineContent}>
                        Tue
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator >
                    {/* <TimelineDot /> */}
                    <TimelineConnector className={classes.timelineIcon} />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                    <Typography variant="subtitle1" className={classes.timelineContent}>
                        Wed
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator >
                    {/* <TimelineDot /> */}
                    <TimelineConnector className={classes.timelineIcon} />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                    <Typography variant="subtitle1" className={classes.timelineContent}>
                        Thur
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator >
                    {/* <TimelineDot /> */}
                    <TimelineConnector className={classes.timelineIcon} />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                    <Typography variant="subtitle1" className={classes.timelineContent}>
                        Fri
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator >
                    {/* <TimelineDot /> */}
                    <TimelineConnector className={classes.timelineIcon} />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                    <Typography variant="subtitle1" className={classes.timelineContent}>
                        Sat
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator >
                    {/* <TimelineDot /> */}
                    <TimelineConnector className={classes.timelineIcon} />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                    <Typography variant="subtitle1" className={classes.timelineContent}>
                        Sun
                    </Typography>
                </TimelineContent>
            </TimelineItem>

        </Timeline >
    );
}
