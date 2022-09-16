import React from 'react'
import Slider from "react-slick";
import getProjects from '../../data/projects.json'
import { Container, Grid, Typography, Box, IconButton } from '@mui/material'
import Image from 'next/image';
import styles from './Projects.module.css'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Projects = () => {


    const [projects, setProjects] = React.useState([])

    React.useEffect(() => {
        setProjects(getProjects)
    }, [])

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },

        ]
    };



    return (
        <Box className={styles.slider}>
            <Slider {...settings} className={styles.container}>
                {
                    projects.map(item =>
                        <div key={item.index} >
                            <Box className={styles.image}>
                                <Image
                                    src={item.image}
                                    width={5}
                                    height={4}
                                    alt="project"
                                    layout="responsive"
                                />
                            </Box>
                        </div>
                    )
                }

            </Slider>
        </Box>
    )
}

export default Projects


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (

        <IconButton style={{ position: 'absolute', display: 'block', top: '50%', right: '-25px', transform: "translate(0,-50%)", width: "50px" }} color="primary" aria-label="upload picture" component="label" onClick={onClick}>
            <ArrowForwardIosIcon />
        </IconButton>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <IconButton style={{ position: 'absolute', display: 'block', top: '50%', left: '-25px', transform: "translate(0,-50%)", width: "50px" }} color="primary" aria-label="upload picture" component="label" onClick={onClick}>
            <ArrowBackIosIcon />
        </IconButton>
    );
}