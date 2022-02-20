import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        // primary: {
        //     main: '#6b62ff'
        // },
        secondary: {
            main: '#FF7F50'
        },       
       
    }
});

theme = responsiveFontSizes(theme);
export default theme;