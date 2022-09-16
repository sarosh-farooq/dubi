import React from 'react'
import Slider from "react-slick";
import getProjects from '../../data/projects.json'
import { Container, Grid, Typography, Box, IconButton } from '@mui/material'
import Image from 'next/image';
import styles from './reviews.module.css'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Reviews from '../../Reviews/Reviews';

const Projects = () => {



    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay: true,
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
        ],
         
    };



    return (
        <Box className={styles.slider}>
            <Slider {...settings} className={styles.container}>
                <div className={styles.re}>
                    <Reviews
                        name="Jacob Jones"
                        image="/reviews/jacob_jones.png"
                        title="CEO, xyz Company"
                        description="We have a great business relationship with Dubisign. We had worked with several other marketing companies in the past who didn't deliver results and I'm happy to say Dubisign is doing that for us. They help bring our vision to life in a way that makes sense."
                    />
                </div>
                <div className={styles.re}>
                    <Reviews
                        name="Floyd Miles"
                        image="/reviews/floyd_miles.png"
                        title="Entrepreneur"
                        description="Dubisign has done a wonderful job redesigning our website to take it from plain and functional to amazingly professional. We would highly recommend to any business that needs a hand improving their services."
                    />
                </div>
                <div className={styles.re}>
                    <Reviews
                        name="Marvin McKinney"
                        image="/reviews/marvin_mcKinney.png"
                        title="Sales Manager, abc Co."
                        description="we were shown promising new ways to market our company. Today we work with statistics and more accurate data and realize the digital space is an essential tool for Clinica da Mama to position itself in an increasingly competitive field."
                    />
                </div>

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