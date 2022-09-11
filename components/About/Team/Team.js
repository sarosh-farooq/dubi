import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import styles from './Team.module.css'
import { Box, Typography, IconButton } from '@mui/material';
import getTeamDetail from '../../data/Team.json'
import Image from 'next/image'
import RightIcon from '@mui/icons-material/ArrowRightAlt';
import LeftIcon from '@mui/icons-material/KeyboardBackspace';




function Team() {

    const [teamDetail, setTeamDetail] = useState([])

    useEffect(() => {
        setTeamDetail(getTeamDetail)
    }, [])


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (

        <Box className={styles.slider}>

            <Slider {...settings} className={styles.container}>
                {
                    teamDetail.map((item, index) =>
                        <div key={index}>
                            <Box className="teamDetail">
                                <Box className="image">
                                    <Image
                                        src={item.image}
                                        width={374}
                                        height={374}
                                        alt={item.name}
                                    />
                                </Box>
                                <Typography className="name" variant="h6" component='h4' sx={{mt:1}}>{item.name}</Typography>
                                <Typography className="title" variant="subtitle1" component='p'>{item.title}</Typography>
                            </Box>
                        </div>
                    )
                }




            </Slider>
        </Box>

    );
}

export default Team


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (

        <IconButton style={{ position: 'absolute', display: 'block', top: '50%', right: '-25px', transform: "translate(0,-50%)", width: "50px" }} color="primary" aria-label="upload picture" component="label" onClick={onClick}>
            <RightIcon />
        </IconButton>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <IconButton style={{ position: 'absolute', display: 'block', top: '50%', left: '-25px', transform: "translate(0,-50%)", width: "50px" }} color="primary" aria-label="upload picture" component="label" onClick={onClick}>
            <LeftIcon />
        </IconButton>
    );
}