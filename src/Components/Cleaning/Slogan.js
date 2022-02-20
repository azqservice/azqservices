import { Box } from "@mui/system";
import { useTheme } from '@mui/styles';
import { Button, Stack } from "@mui/material";
import { SubHeading } from "./Cleaning.styles";
import MoodIcon from '@mui/icons-material/Mood';
import { StyledLink } from "Components/Footer/Footer.styles";
export const Slogan = () => {
    const theme = useTheme();
    return(
        <Box mt={{md: 8, lg: 8}} p={{xs: 1, sm: 2, md: 3, lg: 4}} textAlign='center' style={{backgroundColor: theme.palette.primary.main, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <Stack alignItems='center' spacing={2}>
                <SubHeading style={{color: 'white'}}>
                    Kontakt os nu, og få et godt tilbud <MoodIcon fontSize='large' />
                </SubHeading>
                <StyledLink to='/contact'>
                    <Button style={{backgroundColor: theme.palette.secondary.main, color: 'white'}}>
                        Kontakt os
                    </Button>
                </StyledLink>
            </Stack>
        </Box>
    );
}