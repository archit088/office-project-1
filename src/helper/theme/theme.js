import { createTheme } from '@mui/material/styles'

let theme = createTheme({
    palette : {
        primary : {
            main : '#2b3b59'
        },
        secondary : {
            main : '#fff'
        }
    }
},{
    components : {
        MuiButtonBase : {
            styleOverrides: {
                root: {
                  fontFamily: 'Poppins !important   ',
                },
            },
        },
        MuiTypography : {
            styleOverrides : {
                h1 : {
                    fontFamily : 'Poppins !important'
                }
            }
        }
    }
})

export default theme