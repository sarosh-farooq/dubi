import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Divider, List, Typography } from '@mui/material';
import styles from './ProjectDetail.module.css'
import BackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image'
import Timeline from './Timeline'
import { styled } from '@mui/material/styles';
import BarChart from './BarChart';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function AlertDialogSlide({ open, setOpen }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth='xl'
                fullWidth={true}
                sx={{ backgroundColor: 'transparent' }}
                scroll="body"
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        backgroundImage: 'none',
                    },
                }}
            >
                <Button variant="contained" startIcon={<BackIcon />} onClick={handleClose}>Back</Button>
                <UIBox className={styles.project}>
                    <Box className={styles.intro}
                        style={{
                            background: `url(/projects/background.png) no-repeat center center`,
                            backgroundSize: "cover"
                        }}
                    >
                        <Box className={styles.introDetail}>

                            <Box className={styles.image}>
                                <Image
                                    src="/projects/logo.png"
                                    width={250}
                                    height={250}
                                    alt="logo"
                                />
                            </Box>
                            <Typography variant="h5" sx={{ color: "white", my: 1 }}>Subheading goes here</Typography>
                            <Box className={styles.bars}>
                                <div className={styles.bar1}></div>
                                <Box className={styles.subBars}>
                                    <div className={styles.bar2}></div>
                                    <div className={styles.bar3}></div>
                                </Box>
                            </Box>
                            <Typography variant="subtitle1" component="h6" sx={{ my: 2, color: "white" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ut nibh mi commodo sollicitudin at morbi a. Mollis viverra a non duis ultricies erat. Lorem ipsum dolor sit amet, consectetur
                            </Typography>
                            <Box className={styles.fields}>
                                <Typography variant="h6" sx={{ color: "white", letterSpacing: 1.5 }}>FIELD1</Typography>
                                <Typography variant="h6" sx={{ color: "white", letterSpacing: 1.5 }}>FIELD1</Typography>
                                <Typography variant="h6" sx={{ color: "white", letterSpacing: 1.5 }}>FIELD1</Typography>
                                <Typography variant="h6" sx={{ color: "white", letterSpacing: 1.5 }}>FIELD1</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Divider sx={{ mt: 9 }}>
                        <Typography className={styles.h2} variant="h4" component="h2">Description</Typography>
                    </Divider>
                    <Box className={styles.description}>
                        <Box>
                            <Box className={styles.image}>
                                <Image
                                    src="/projects/description.png"
                                    width={490}
                                    height={370}
                                    alt="logo"
                                />
                            </Box>
                            <Typography variant="subtitle1" className={styles.p} component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod tempor enim dolor dolor sed. Suscipit at egestas laoreet aliquet. Amet praesent nisl, dolor cursus. Pharetra, consectetur morbi viverra vulputate neque, facilisis mattis ornare elementum. Eu proin proin in cras. Nam scelerisque sapien tincidunt amet. Egestas consectetur in tortor, eget ac mauris. Tellus pretium sit sit vitae aenean vel id. Varius nullam ultricies dolor euismod habitant molestie hendrerit orci, adipiscing. Tellus vitae risus volutpat lectus purus quis cursus. Lobortis aliquam nisl nisl, amet. Ligula nibh augue amet, consectetur nullam purus euismod. Pharetra auctor amet purus libero magna. Volutpat id enim nascetur hendrerit. Eu sit volutpat vel morbi. Dignissim morbi lacus turpis tempus vel, nunc nisl ut. Sit ipsum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod tempor enim dolor dolor sed. Suscipit at egestas laoreet aliquet. Amet praesent nisl, dolor cursus. Pharetra, consectetur morbi viverra vulputate neque, facilisis mattis ornare elementum. Eu proin proin in cras. Nam scelerisque sapien tincidunt amet. Egestas consectetur in tortor, eget ac mauris. Tellus pretium sit sit vitae aenean vel id. Varius nullam ultricies dolor euismod habitant molestie hendrerit orci, adipiscing. Tellus vitae risus volutpat lectus purus quis cursus.
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ mt: 9 }}>
                        <Typography className={styles.h2} variant="h4" component="h2">Project Overview</Typography>
                    </Divider>
                    <Box className={styles.overview}>
                        <Box>
                            <Typography className={styles.h3} variant="h4" component="h3" >Timeline</Typography>
                            <Box className={styles.timeline}>
                                <Box className={styles.timelineBox}>
                                    <Box className={styles.months}>
                                        <Typography variant="subtitle1" >Jan</Typography>
                                        <Typography variant="subtitle1" >Feb</Typography>
                                        <Typography variant="subtitle1" >Mar</Typography>
                                        <Typography variant="subtitle1" >Apr</Typography>

                                    </Box>
                                    <Box className={styles.line}>

                                    </Box>
                                    <Box className={styles.weekDays}>
                                        <Typography variant="subtitle1" >Mon</Typography>
                                        <Typography variant="subtitle1" >Tue</Typography>
                                        <Typography variant="subtitle1" >Wed</Typography>
                                        <Typography variant="subtitle1" >Thur</Typography>
                                        <Typography variant="subtitle1" >Fri</Typography>
                                        <Typography variant="subtitle1" >Sat</Typography>
                                        <Typography variant="subtitle1" >Sun</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box className={styles.graph}>
                                    <Box className={styles.graphBox}>
                                        <Box className={styles.graphArea}>
                                            <Box className={styles.bar1}>Strategy</Box>
                                            <Box className={styles.bar2}>Planning</Box>
                                            <Box className={styles.bar3}>Research</Box>
                                            <Box className={styles.bar4}>Digital Marketing</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={styles.problems}>
                            <Typography className={styles.h3} variant="h4" component="h3">Problems</Typography>
                            <List sx={{ ml: { md: 5, xs: 1 }, my: { md: 3, xs: 1 } }}>
                                <ListItem sx={{ p: .5 }}>
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                        <CircleIcon className={styles.icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText className={styles.p}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ p: .5 }}>
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                        <CircleIcon className={styles.icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText className={styles.p}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ p: .5 }}>
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                        <CircleIcon className={styles.icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText className={styles.p}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ p: .5, }}>
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                        <CircleIcon className={styles.icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText className={styles.p}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Box>
                        <Box className={styles.problems}>
                            <Typography className={styles.h3} variant="h4" component="h3">Solutions</Typography>
                            <List sx={{ ml: { md: 5, xs: 1 }, my: { md: 3, xs: 1 } }}>
                                <ListItem sx={{ p: .5 }}>
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                        <CircleIcon className={styles.icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText className={styles.p}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ p: .5 }}>
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                        <CircleIcon className={styles.icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText className={styles.p}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ p: .5 }}>
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                        <CircleIcon className={styles.icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText className={styles.p}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ p: .5, }}>
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                        <CircleIcon className={styles.icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText className={styles.p}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                    <Divider sx={{ mt: 9, mb: 7 }}>
                        <Typography className={styles.h2} variant="h4" component="h2">The Approach</Typography>
                    </Divider>
                    <Box className={styles.approach}>
                        <Box>
                            <Box className={styles.image}>
                                <Image
                                    src="/projects/approach.png"
                                    width={690}
                                    height={570}
                                    alt="logo"
                                />
                            </Box>
                            <Typography variant="subtitle1" className={styles.p} component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod tempor enim dolor dolor sed. Suscipit at egestas laoreet aliquet. Amet praesent nisl, dolor cursus. Pharetra, consectetur morbi viverra vulputate neque, facilisis mattis ornare elementum. Eu proin proin in cras. Nam scelerisque sapien tincidunt amet. Egestas consectetur in tortor, eget ac mauris. Tellus pretium sit sit vitae aenean vel id. Varius nullam ultricies dolor euismod habitant molestie hendrerit orci, adipiscing. Tellus vitae risus volutpat lectus purus quis cursus. Lobortis aliquam nisl nisl, amet. Ligula nibh augue amet, consectetur nullam purus euismod. Pharetra auctor amet purus libero magna. Volutpat id enim nascetur hendrerit. Eu sit volutpat vel morbi. Dignissim morbi lacus turpis tempus vel, nunc nisl ut. Sit ipsum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod tempor enim dolor dolor sed. Suscipit at egestas laoreet aliquet. Amet praesent nisl, dolor cursus. Pharetra, consectetur morbi viverra vulputate neque, facilisis mattis ornare elementum. Eu proin proin in cras. Nam scelerisque sapien tincidunt amet. Egestas consectetur in tortor,
                            </Typography>
                            <Box className={styles.image2}>
                                <Image
                                    src="/projects/approach2.png"
                                    width={1536}
                                    height={800}
                                    alt="logo"
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Divider sx={{ mt: 9, mb: 7 }}>
                        <Typography className={styles.h2} variant="h4" component="h2">Result</Typography>
                    </Divider>
                    <Box className={styles.result}>
                        <Box className={styles.results}>
                            <Box className={styles.result1}>Result 1</Box>
                            <Box className={styles.result2}>Result 2</Box>
                            <Box className={styles.result3}>Result 3</Box>
                        </Box>
                        <Box className={styles.graphs}>
                            <Box className={styles.image1}>
                                <Image
                                    src="/projects/graph.png"
                                    width={370}
                                    height={370}
                                    alt="logo"
                                />
                            </Box>
                            <Box className={styles.image2}>
                                <Image
                                    src="/projects/line_graph.png"
                                    width={590}
                                    height={300}
                                    alt="logo"
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box className={styles.companyDetail}>
                        <Box>
                            <Typography variant="h2" component="h3" sx={{ color: 'white', textAlign: "center" }}>
                                Brand Name
                            </Typography>
                            <Typography variant="subtitle1" component="h4" sx={{ color: 'white', textAlign: "center" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </Box>
                        <Box className={styles.box}>
                            <Box className={styles.image}>
                                <Image
                                    src="/projects/logo.png"
                                    width={150}
                                    height={150}
                                    alt="logo"
                                />
                            </Box>
                            <Box>
                                <Typography variant="h5" component="h5" sx={{ color: "white", letterSpacing: 1.5 }}>FIELD</Typography>
                            </Box>
                        </Box>
                    </Box>
                </UIBox>
            </Dialog>
        </div>
    );
}


const UIBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode !== 'dark' ? '#fff' : '#161616',
}))