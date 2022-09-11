import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styles from './ServiceButton.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const ServicesButton = ({ url }) => {

    const router = useRouter();


    return (
        <div>
            <Box className={styles.ServiceButton}>
                {/* <Box className={styles.button2}>
                            <Box>
                                <Image
                                    src="/home/focus_2.png"
                                    alt="focus"
                                    width={44.81}
                                    height={44.81}
                                />
                            </Box>
                            <Typography variant="h6" component="h2">
                                Digital Marketing
                            </Typography>
                        </Box> */}

                <Box className={url == "digital" ? styles.button2 : styles.button} onClick={()=> router.push("/services/digital-marketing")}>
                    <Box>
                        <Image
                            src={url == "digital" ? "/home/focus_2.png" : "/home/focus.png"}
                            alt="focus"
                            width={44.81}
                            height={44.81}
                        />
                    </Box>
                    <Typography variant="h6" component="h2">
                        Digital Marketing
                    </Typography>
                </Box>
                <Box className={styles.button}>
                    <Box>
                        <Image
                            src="/home/creative.png"
                            alt="creative"
                            width={44.81}
                            height={44.81}
                        />
                    </Box>
                    <Typography variant="h6" component="h2">
                        Creative Design
                    </Typography>
                </Box>
                <Box className={styles.button}>
                    <Box>
                        <Image
                            src="/home/deploy.png"
                            alt="deploy"
                            width={44.81}
                            height={44.81}
                        />
                    </Box>
                    <Typography variant="h6" component="h2">
                        Deployment
                    </Typography>
                </Box>
                <Box className={styles.button}>
                    <Box>
                        <Image
                            src="/home/web.png"
                            alt="web"
                            width={44.81}
                            height={44.81}
                        />
                    </Box>
                    <Typography variant="h6" component="h2">
                        Web Design
                    </Typography>
                </Box>
                <Box className={styles.button}>
                    <Box>
                        <Image
                            src="/home/mobile.png"
                            alt="mobile"
                            width={44.81}
                            height={44.81}
                        />
                    </Box>
                    <Typography variant="h6" component="h2">
                        App Development
                    </Typography>
                </Box>
            </Box >
        </div >
    )
}

export default ServicesButton