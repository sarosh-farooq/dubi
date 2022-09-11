import Navbar from './Header/Header'
import Box from '@mui/material'
import { Container } from '@mui/system'
// import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Container sx={{mt:10}}>
                {children}
            </Container>
            {/* <Footer /> */}
        </>
    )
}