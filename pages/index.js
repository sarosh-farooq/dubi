import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Grid, Box, Typography, Button, Container } from '@mui/material'
import getServicesDetail from '../components/data/services.json'
import React, { useState } from 'react'
import Service from '../components/Home/Services/Service'
import Reviews from '../components/Reviews/Reviews'
import HorizontalScroll from 'react-scroll-horizontal'
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from "../components/Layout/Footer/Footer"
import Divider from '@mui/material/Divider';
import Projects from '../components/Home/projects/Projects'
import ReviewSlider from '../components/Home/reviews/reviews'
import ContactForm from '../components/Contact/ContactForm'



export default function Home({ setSelectedTheme }) {


  const [servicesDetail, setServicesDetail] = useState(getServicesDetail)

  const child = { width: `100%`, height: `100%` }
  const parent = { width: `100%`, minHeight: `100vh`, height: "620px" }


  return (
    <div>
      <Head>
        <title>DubiSign</title>
        <meta name="description" content="DubiSign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Box sx={{ display: { xs: "none", sm: "block" } }}>

        <Container maxWidth="xl" sx={{ mt: 0, mb: 0 }} className={styles.wrapper}>
          <Box className={styles.subWrapper}>
            <ReactFullpage
              // pluginWrapper={pluginWrapper}

              //fullpage options
              licenseKey={'YOUR_KEY_HERE'}
              scrollingSpeed={1000} /* Options here */
              scrollHorizontally={true}  /* Because we are using the extension */
              scrollHorizontallyKey={'YOUR KEY HERE'}
              responsiveWidth={600}
              render={({ state, fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <div className="section">

                      <Box className={`${styles.flexContainer1} ${styles.section1}`}>

                        <Box className={styles.image}>
                          <Image
                            src='/home/dubai.png'
                            alt='dubai'
                            width={1000}
                            height={707.84}
                          />
                        </Box>

                        <Box className={styles.flexCenter}>
                          <Typography variant="h2" component='h1'>
                            Creative
                            <br />
                            Solutions,<br />
                            Creative Results.
                          </Typography>
                          <Typography variant="h6" component='p' className={styles.p} sx={{ mt: 1 }}>More Than Just Your Usual Digital Marketing Agency & Developer.</Typography>
                          <Button variant="contained" size='large' color="primary" sx={{ mt: 4 }}>
                            Grow Your Business
                          </Button>

                        </Box>

                      </Box>
                    </div>
                    <div className="section">
                      <Box sx={{ mt: 8 }} className={`${styles.flexContainer} ${styles.section2} ${styles.SectionService}`}>
                        <Box className={styles.serviceSection}>
                          <Typography variant="h2" component='h2' sx={{ mb: 3 }}>Let&#39;s start your case together</Typography>

                          <Box className={styles.services}>

                            {servicesDetail.slice(0, 3).map(item =>

                              <Service title={item.title} key={item.index} image={item.image} alt={item.alt} description={item.description} />

                            )}
                          </Box>
                          <Box className={styles.services2}>
                            <Box className={styles.services}>
                              <Box className={styles.button}>
                                <Button variant="contained" size='large' color="primary" sx={{ mt: 2 }}>
                                  View In Detail
                                </Button>
                              </Box>
                              {servicesDetail.slice(3, 5).map(item =>
                                <Service title={item.title} key={item.index} image={item.image} alt={item.alt} description={item.description} />
                              )}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </div>
                    <div className="section">

                      <Box sx={{ px: 10, mt: 5 }} className={`${styles.flexContainer} ${styles.section3}`}>
                        <Box className={styles.works}>
                          <Grid container spacing={2}>
                            <Grid item xs={4}>
                              <Box className={styles.box}>
                                <Box className={styles.text}>
                                  <Typography variant="h2" component="h2" >Our latest work</Typography>
                                </Box>
                                <Box className={styles.image1}>
                                  <Image
                                    src="/projects/project1.png"
                                    width={500}
                                    height={350}
                                    alt="project"
                                  />
                                </Box>
                              </Box>
                            </Grid>
                            <Grid item xs={4}>
                              <Box className={styles.image}>
                                <Image
                                  src="/projects/project22.png"
                                  width={540}
                                  height={700}
                                  alt="project"
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={4}>
                              <Box className={styles.box}>

                                <Box className={styles.image1}>
                                  <Image
                                    src="/projects/project3.png"
                                    width={500}
                                    height={350}
                                    alt="project"
                                  />
                                </Box>
                                <Box className={styles.text}>
                                  <Button variant="contained" size='large' color="primary" sx={{ mt: 2 }}>
                                    View More
                                  </Button>
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </div>
                    <div className="section">
                      <Box sx={{ mt: 10 }} className={`${styles.flexContainer} ${styles.section4}`}>
                        <Grid container alignItems="Center" justifyContent="space-between" sx={{ mt: 0, width: "100%" }}>
                          <Grid item xs={5}>
                            <Typography variant="h2" component="h2">
                              What our
                              clients say about us
                            </Typography>
                          </Grid>
                          <Grid container item xs={7} spacing={2}>
                            <Grid item xs={6.4}>
                              <Reviews
                                name="Jacob Jones"
                                image="/reviews/jacob_jones.png"
                                title="CEO, xyz Company"
                                description="We have a great business relationship with Dubisign. We had worked with several other marketing companies in the past who didn't deliver results and I'm happy to say Dubisign is doing that for us. They help bring our vision to life in a way that makes sense."
                              />
                            </Grid>
                            <Grid item xs={5.6}>
                              <Reviews
                                name="Floyd Miles"
                                image="/reviews/floyd_miles.png"
                                title="Entrepreneur"
                                description="Dubisign has done a wonderful job redesigning our website to take it from plain and functional to amazingly professional. We would highly recommend to any business that needs a hand improving their services."
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <Reviews
                                name="Marvin McKinney"
                                image="/reviews/marvin_mcKinney.png"
                                title="Sales Manager, abc Co."
                                description="we were shown promising new ways to market our company. Today we work with statistics and more accurate data and realize the digital space is an essential tool for Clinica da Mama to position itself in an increasingly competitive field."
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Box>

                        </Box>
                      </Box>
                    </div>
                    <div className="section">
                      <Box className={`${styles.flexContainer} ${styles.section5}`} >
                        <Box>
                          <Grid container spacing={5}>

                            <Grid item xs={6}>
                              <Box className={styles.projects}>
                                <Box className={`${styles.image} ${styles.image1}`}>
                                  <Box className={styles.imageBox}>
                                    <Image
                                      src="/porject1.png"
                                      width={190}
                                      height={190}
                                      alt="project1"
                                    />
                                  </Box>
                                </Box>
                                <Box className={`${styles.image} ${styles.image2}`}>
                                  <Box className={styles.imageBox}>
                                    <Image
                                      src="/porject2.png"
                                      width={160}
                                      height={160}
                                      alt="project1"
                                    />
                                  </Box>
                                </Box>
                                <Box className={`${styles.image} ${styles.image3}`}>
                                  <Box className={styles.imageBox}>
                                    <Image
                                      src="/porject3.png"
                                      width={160}
                                      height={160}
                                      alt="project1"
                                    />
                                  </Box>
                                </Box>
                                <Box className={`${styles.image} ${styles.image4}`}>
                                  <Box className={styles.imageBox}>
                                    <Image
                                      src="/porject4.png"
                                      width={190}
                                      height={190}
                                      alt="project1"
                                    />
                                  </Box>
                                </Box>
                                <Box className={`${styles.image} ${styles.image5}`}>
                                  <Box className={styles.imageBox}>
                                    <Image
                                      src="/porject5.png"
                                      width={160}
                                      height={160}
                                      alt="project1"
                                    />
                                  </Box>
                                </Box>
                                <Box className={`${styles.image} ${styles.image6}`}>
                                  <Box className={styles.imageBox}>
                                    <Image
                                      src="/porject6.png"
                                      width={160}
                                      height={160}
                                      alt="project1"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Grid>
                            <Grid item xs={6}>
                              <Box className={styles.BoxDetail}>
                                <Typography variant="h2" component="h2">We work for the best</Typography>
                                <Typography variant="subtitle1" component="p" className={styles.p}>
                                  We offer a depth and breadth of services to meet our clients&#39; unique needs. Our initial meetings will help us ascertain which services are the best fit for your company&#39;s goals, objectives and budget.
                                </Typography>
                                <Button variant="contained" size='large' color="primary" sx={{ mt: 1 }}>
                                  View Case Studies
                                </Button>
                              </Box>

                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </div>

                    <div className="section fp-auto-height">
                      <Footer setSelectedTheme={setSelectedTheme} />
                    </div>
                  </ReactFullpage.Wrapper>
                );
              }}
            />


          </Box >

        </Container >

      </Box>

      <Box sx={{ display: { xs: "block", sm: "none" } }}>

        <Box sx={{ mt: 15, mb: 0, width: "100%" }} className={styles.wrapper}>
          <Box className={styles.subWrapper}>
            <Container sx={{ width: "100%" }}>
              <Box className={`${styles.flexContainer1} ${styles.section1}`}>

                <Button variant="contained" size='large' color="primary" sx={{ mt: 4, alignSelf: "center" }}>
                  Grow Your Business
                </Button>

                <Box className={styles.image}>
                  <Image
                    src='/home/dubai.png'
                    alt='dubai'
                    width={1000}
                    height={707.84}
                  />
                </Box>


                <Box className={styles.flexCenter}>
                  <Typography variant="h2" component='h1'>
                    Creative
                    <br />
                    Solutions,<br />
                    Creative Results.
                  </Typography>
                  <Typography variant="h6" component='p' className={styles.p} sx={{ mt: 1 }}>More Than Just Your Usual Digital Marketing Agency & Developer.</Typography>

                </Box>


              </Box>
            </Container>

            <Divider sx={{ width: "100%", mt: 5 }}>
              <Typography variant="h2" component='h2'>Our Services</Typography>
            </Divider>
            <Container sx={{ width: "100%" }}>
              <Box className={`${styles.flexContainer2}`}>
                <Box className={styles.serviceSection}>
                  <Box className={styles.services}>
                    {servicesDetail.slice(0, 3).map(item =>
                      <Service title={item.title} key={item.index} image={item.image} alt={item.alt} description={item.description} />
                    )}
                  </Box>

                  <Box className={styles.serviceButton}>

                    <Button variant="contained" size='large' color="primary" sx={{ my: 2, mt:4 }}>
                      View all services          </Button>

                  </Box>
                </Box>
              </Box>
            </Container>

            <Divider sx={{ width: "100%", mt: 5 }}>
              <Typography variant="h2" component='h2'>Recent Projects</Typography>
            </Divider>

            <Container sx={{ width: "100%" }}>


              <Box>
                <Projects />
              </Box>
              <Box className={styles.serviceButton}>

                <Button variant="contained" size='large' color="primary" sx={{ my: 2 }}>
                  View all projects
                </Button>

              </Box>
            </Container>

            <Divider sx={{ width: "100%", mt: 5 }}>
              <Typography variant="h2" component='h2'>Testimonials</Typography>
            </Divider>

            <Container sx={{ width: "100%" }}>

              <Typography variant="h2" component="h2" sx={{ my: 2, ml: 2.5, mb: 3 }}>
                What our
                clients say about us
              </Typography>

              <Box>
                <ReviewSlider />
              </Box>
            </Container>

            <Divider sx={{ width: "100%", mt: 0 }}>
              <Typography variant="h2" component='h2'>Our Clients</Typography>
            </Divider>

            <Container sx={{ width: "100%" }}>

              <Typography variant="h2" component="h2" sx={{ my: 2, ml: 2.5, mb: 8, textAlign: "center !important" }}>
                We Work for the best
              </Typography>

              <Box className={styles.projects}>
                <Box className={`${styles.image} ${styles.image1}`}>
                  <Box className={styles.imageBox}>
                    <Image
                      src="/porject1.png"
                      width={120}
                      height={120}
                      alt="project1"
                    />
                  </Box>
                </Box>
                <Box className={`${styles.image} ${styles.image2}`}>
                  <Box className={styles.imageBox}>
                    <Image
                      src="/porject2.png"
                      width={100}
                      height={100}
                      alt="project1"
                    />
                  </Box>
                </Box>
                <Box className={`${styles.image} ${styles.image3}`}>
                  <Box className={styles.imageBox}>
                    <Image
                      src="/porject3.png"
                      width={100}
                      height={100}
                      alt="project1"
                    />
                  </Box>
                </Box>
                <Box className={`${styles.image} ${styles.image4}`}>
                  <Box className={styles.imageBox}>
                    <Image
                      src="/porject4.png"
                      width={120}
                      height={120}
                      alt="project1"
                    />
                  </Box>
                </Box>
                <Box className={`${styles.image} ${styles.image5}`}>
                  <Box className={styles.imageBox}>
                    <Image
                      src="/porject5.png"
                      width={100}
                      height={100}
                      alt="project1"
                    />
                  </Box>
                </Box>
                <Box className={`${styles.image} ${styles.image6}`}>
                  <Box className={styles.imageBox}>
                    <Image
                      src="/porject6.png"
                      width={120}
                      height={120}
                      alt="project1"
                    />
                  </Box>
                </Box>
              </Box>

            </Container>

            <Container sx={{mb:5}}>
              <Typography variant="h3" component="h2" >Let&#39;s connect</Typography>
              <Typography variant="subtitle1" component="p" >We&#39;d love to help your business. Simply reach out to us.</Typography>
              <Box className={styles.secondItem2}>
                <ContactForm />
              </Box>
            </Container>

          </Box>
        </Box>


      </Box>







      {/* <Container maxWidth="xl" sx={{ mt: 20, mb: 0 }} className={styles.wrapper}>
        <Box className={styles.subWrapper}>


          <div style={parent}>
            <HorizontalScroll
              reverseScroll={true}
            >
              <div style={child} >
                <Box className={`${styles.flexContainer1} ${styles.section1}`}>

                  <Box className={styles.image}>
                    <Image
                      src='/home/dubai.png'
                      alt='dubai'
                      width={1000}
                      height={707.84}
                    />
                  </Box>

                  <Box className={styles.flexCenter}>
                    <Typography variant="h2" component='h1'>
                      Creative
                      <br />
                      Solutions,<br />
                      Creative Results.
                    </Typography>
                    <Typography variant="h6" component='p' className={styles.p} sx={{ mt: 1 }}>More Than Just Your Usual Digital Marketing Agency & Developer.</Typography>
                    <Button variant="contained" size='large' color="primary" sx={{ mt: 4 }}>
                      Grow Your Business
                    </Button>

                  </Box>

                </Box>
              </div>
              <div style={child} >
                <Box className={`${styles.flexContainer} ${styles.section2} ${styles.SectionService}`}>
                  <Box className={styles.serviceSection}>
                    <Typography variant="h2" component='h2' sx={{ mb: 3 }}>Let&#39;s start your case together</Typography>

                    <Box className={styles.services}>

                      {servicesDetail.slice(0, 3).map(item =>

                        <Service title={item.title} key={item.index} image={item.image} alt={item.alt} description={item.description} />

                      )}
                    </Box>
                    <Box className={styles.services2}>
                      <Box className={styles.services}>
                        <Box className={styles.button}>
                          <Button variant="contained" size='large' color="primary" sx={{ mt: 2 }}>
                            View In Detail
                          </Button>
                        </Box>
                        {servicesDetail.slice(3, 5).map(item =>
                          <Service title={item.title} key={item.index} image={item.image} alt={item.alt} description={item.description} />
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </div>
              <div style={child} >
                <Box className={`${styles.flexContainer} ${styles.section3}`}>
                  <Box className={styles.works}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Box className={styles.box}>
                          <Box className={styles.text}>
                            <Typography variant="h2" component="h2" >Our latest work</Typography>
                          </Box>
                          <Box className={styles.image1}>
                            <Image
                              src="/projects/project1.png"
                              width={500}
                              height={350}
                              alt="project"
                            />
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box className={styles.image}>
                          <Image
                            src="/projects/project22.png"
                            width={500}
                            height={630}
                            alt="project"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box className={styles.box}>

                          <Box className={styles.image1}>
                            <Image
                              src="/projects/project3.png"
                              width={500}
                              height={350}
                              alt="project"
                            />
                          </Box>
                          <Box className={styles.text}>
                            <Button variant="contained" size='large' color="primary" sx={{ mt: 2 }}>
                              View More
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </div>
              <div style={child} >
                <Box className={styles.subWrapper2}>
                  <Box className={`${styles.flexContainer} ${styles.section4}`}>
                    <Grid container alignItems="Center" justifyContent="space-between" sx={{ mt: 0, width: "100%" }}>
                      <Grid item xs={5}>
                        <Typography variant="h2" component="h2">
                          What our
                          clients say about us
                        </Typography>
                      </Grid>
                      <Grid container item xs={7} spacing={2}>
                        <Grid item xs={6.4}>
                          <Reviews
                            name="Jacob Jones"
                            image="/reviews/jacob_jones.png"
                            title="CEO, xyz Company"
                            description="We have a great business relationship with Dubisign. We had worked with several other marketing companies in the past who didn't deliver results and I'm happy to say Dubisign is doing that for us. They help bring our vision to life in a way that makes sense."
                          />
                        </Grid>
                        <Grid item xs={5.6}>
                          <Reviews
                            name="Floyd Miles"
                            image="/reviews/floyd_miles.png"
                            title="Entrepreneur"
                            description="Dubisign has done a wonderful job redesigning our website to take it from plain and functional to amazingly professional. We would highly recommend to any business that needs a hand improving their services."
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Reviews
                            name="Marvin McKinney"
                            image="/reviews/marvin_mcKinney.png"
                            title="Sales Manager, abc Co."
                            description="we were shown promising new ways to market our company. Today we work with statistics and more accurate data and realize the digital space is an essential tool for Clinica da Mama to position itself in an increasingly competitive field."
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Box>

                    </Box>
                  </Box>
                  <Box className={`${styles.flexContainer} ${styles.section5}`} >
                    <Box>
                      <Grid container>
                        <Grid item xs={6}>
                          <Box className={styles.BoxDetail}>
                            <Typography variant="h2" component="h2">We work for the best</Typography>
                            <Typography variant="subtitle1" component="p" className={styles.p}>
                              We offer a depth and breadth of services to meet our clients&#39; unique needs. Our initial meetings will help us ascertain which services are the best fit for your company&#39;s goals, objectives and budget.
                            </Typography>
                            <Button variant="contained" size='large' color="primary" sx={{ mt: 1 }}>
                              View Case Studies
                            </Button>
                          </Box>

                        </Grid>
                        <Grid item xs={6}>
                          <Box className={styles.projects}>
                            <Box className={`${styles.image} ${styles.image1}`}>
                              <Box className={styles.imageBox}>
                                <Image
                                  src="/porject1.png"
                                  width={190}
                                  height={190}
                                  alt="project1"
                                />
                              </Box>
                            </Box>
                            <Box className={`${styles.image} ${styles.image2}`}>
                              <Box className={styles.imageBox}>
                                <Image
                                  src="/porject2.png"
                                  width={160}
                                  height={160}
                                  alt="project1"
                                />
                              </Box>
                            </Box>
                            <Box className={`${styles.image} ${styles.image3}`}>
                              <Box className={styles.imageBox}>
                                <Image
                                  src="/porject3.png"
                                  width={160}
                                  height={160}
                                  alt="project1"
                                />
                              </Box>
                            </Box>
                            <Box className={`${styles.image} ${styles.image4}`}>
                              <Box className={styles.imageBox}>
                                <Image
                                  src="/porject4.png"
                                  width={190}
                                  height={190}
                                  alt="project1"
                                />
                              </Box>
                            </Box>
                            <Box className={`${styles.image} ${styles.image5}`}>
                              <Box className={styles.imageBox}>
                                <Image
                                  src="/porject5.png"
                                  width={160}
                                  height={160}
                                  alt="project1"
                                />
                              </Box>
                            </Box>
                            <Box className={`${styles.image} ${styles.image6}`}>
                              <Box className={styles.imageBox}>
                                <Image
                                  src="/porject6.png"
                                  width={160}
                                  height={160}
                                  alt="project1"
                                />
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </div>
              {/* <div style={child} ></div> */}
      {/* <div style={child} ></div> */}
      {/* </HorizontalScroll> */}

      {/* </div> */}

      {/* </Box > */}

      {/* <Box className={styles.subWrapper}>
          
           
         
          
        </Box> */}

      {/* </Container >  */}
    </div >
  )
}
