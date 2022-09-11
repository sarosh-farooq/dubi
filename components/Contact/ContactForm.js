import React from 'react'
import TextField from '@mui/material/TextField'
import { Grid, Button } from '@mui/material'

const ContactForm = () => {
    return (
        <div>
            <form>
                <Grid container spacing={5}>
                    <Grid item xs={12} >
                        <TextField
                            fullWidth={true}
                            id="1"
                            placeholder='Full Name'
                            focused={true}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth={true}
                            id="2"
                            placeholder='Email'
                            focused={true}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth={true}
                            id="3"
                            placeholder='Your Story'
                            multiline
                            maxRows={4}
                            rows={4}
                            focused={true}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default ContactForm