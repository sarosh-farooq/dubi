import '../styles/globals.css'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'
import React, { useState, useEffect } from 'react'
import { Container, Box } from '@mui/system'
import { CssBaseline } from '@mui/material/';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "#fff",
      paper: "#fff",
    },
    primary: {
      main: '#A58C3B',
    },
    secondary: {
      main: '#000000',
    },
    // divider: 'rgba(40, 40, 40, 1)',
  },
  typography: {
    allVariants: {
      fontFamily: 'Kumbh Sans',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: 'secondary', variant: 'text' },
          style: {
            color: '#7C7B7B',
            ':hover': {
              color: '#7C7B7B',
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'capitalize',
            fontSize: '20px',
          },
        },
      ]
    },
  }
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#161616",
      paper: "#161616",
    },
    primary: {
      main: '#A58C3B',
    },
    secondary: {
      main: '#fff',
    },

    // divider: '#ffffff',
  },
  typography: {
    allVariants: {
      fontFamily: 'Kumbh Sans',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: 'secondary', variant: 'text' },
          style: {
            color: '#7C7B7B',
            ':hover': {
              color: '#7C7B7B',
            },
          },
        },

      ]
    },
  }
})

function MyApp({ Component, pageProps }) {

  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState('dark');

  const getActiveTheme = (themeMode) => {
    return themeMode === 'light' ? lightTheme : darkTheme;
  }

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme))
  }, [selectedTheme]);



  return (
    <ThemeProvider theme={activeTheme} >
      <CssBaseline />
      <Header setSelectedTheme={setSelectedTheme} />

      <Component setSelectedTheme={setSelectedTheme} {...pageProps} />

      <div className='footer'>
        <Footer setSelectedTheme={setSelectedTheme} />
      </div>

    </ThemeProvider>

  )
}

export default MyApp

