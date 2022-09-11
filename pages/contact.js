import React from 'react'
import { Box, Container, Grid, Button, Typography } from '@mui/material'
import styles from '../styles/Contact.module.css'
import ContactTab from '../components/Contact/ContactTab'
import ContactDetail from '../components/Contact/ContactDetail'
import ContactForm from '../components/Contact/ContactForm'
import Head from 'next/head'

const Contact = () => {

  const [tabIndex, setTabIndex] = React.useState(0)
  return (
    <div className='content'>
      <Head>
        <title>Contact Support Team - DubiSign</title>
        <meta name="description" content="DubiSign - Contact Support Team " />
      </Head>
      <Container maxWidth="xl" sx={{ mt: 27, mb: 6 }} >
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <Typography variant="h3" component="h1" >How to find us</Typography>
            <Box className={styles.secondItem1}>
              <Box className={styles.contactBox}>
                <ContactTab setTabIndex={setTabIndex} />
                {tabIndex == 0 ?
                  <ContactDetail
                    address='Uae, Dubai, Sheikh Zayed Road, Aspin Commercial tower, Office 702'
                    mobile='+97143336337'
                    phone='+97143336337'
                    mail='info@dubisign.ae'
                  />
                  :
                  <>
                    <ContactDetail
                      address='Egypt, Doha, Sheikh Zayed Road, Aspin Commercial tower, Office 702'
                      mobile='+97143336337'
                      phone='+97143336337'
                      mail='info@dubisign.ae'
                    />
                  </>
                }
              </Box>
            </Box>
          </Grid>

          <Grid item xs={5} className={styles.contactForm}>
            <Typography variant="h3" component="h2" >Let&#39;s connect</Typography>
            <Typography variant="subtitle1" component="p" >We&#39;d love to help your business. Simply reach out to us.</Typography>
            <Box className={styles.secondItem2}>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}


export default Contact