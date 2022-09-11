import React from 'react'
import { Container, Grid, Typography, Box, Button } from '@mui/material'
import Image from 'next/image';
import styles from '../../styles/Projects.module.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ProjectDetail from '../../components/Project/ProjectDetail'
import getProjects from '../../components/data/projects.json'
import Head from 'next/head'
import Tab from '../../components/Project/Tab'

function Projects() {

    const [projects, setProjects] = React.useState([])
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setProjects(getProjects)
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div className='content'>

            <Container maxWidth="xl" sx={{ mt: 27, mb: 6 }} >

                <Head>
                    <title>Projects - DubiSign</title>
                    <meta name="description" content="DubiSign projects" />
                </Head>

                <ProjectDetail
                    open={open}
                    setOpen={setOpen}
                />

                <Box sx={{ width: '100%', display: "flex", alignItems: 'center', justifyContent: "center" }}>
                    <Tab />
                </Box>
                <Box sx={{ width: '100%', display: "flex", alignItems: 'center', justifyContent: "center" }}>
                    <Grid className={styles.container} container spacing={8} sx={{ mt: 1, width: "80%" }}>

                        {
                            projects.map(item =>
                                <Grid key={item.index} item xs={12} sm={6} md={4} onClick={handleClickOpen}>
                                    <Box className={styles.image}>
                                        <Image
                                            src={item.image}
                                            width={5}
                                            height={4}
                                            alt="project"
                                            layout="responsive"
                                        />
                                    </Box>
                                </Grid>
                            )
                        }

                    </Grid>
                </Box>
                <Box className={styles.button}>
                    <Button endIcon={<ArrowDownwardIcon />} variant="contained" color="primary">
                        View More
                    </Button>
                </Box>
            </Container>
        </div>
    )
}

export default Projects