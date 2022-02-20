import { Button, Grid, Stack, Typography } from "@mui/material";
import { HeroCleaningContainer, HeroScrapContainer, StyledButton } from "Components/Hero/Hero.styles";
import { useTheme } from '@mui/styles';
import useAppBarHeight from "Components/Util/AppHeight";
import { ReactComponent as Scrap } from 'Images/scrap5.svg';
import { ReactComponent as ImgCleaning } from 'Images/cleaning1.svg';
import { Link } from "react-router-dom";
import { StyledLink } from "Components/Footer/Footer.styles";
export const Hero = () => {

    const appBarHeight = useAppBarHeight();

    const theme = useTheme();

    return (
        <Grid container spacing={{ xs: 4 }} height={{ md: `calc(100vh - ${appBarHeight + 5}px)` }} style={{ backgroundColor: 'white' }} mt={{ xs: 0 }}>
            <Grid item xs={12} md={6}>
                <HeroCleaningContainer>                    
                        <Typography variant="h3" fontWeight={900} style={{ color: theme.palette.secondary.main }} >
                            Rengøring Service
                        </Typography>
                        <StyledLink to='/cleaning'><ImgCleaning style={{ transform: 'rotateY(180deg)', padding: '1em 0' }} /> </StyledLink>
                        <StyledLink to='/cleaning'> <StyledButton variant="contained" >Go to Cleaning</StyledButton> </StyledLink>
                   
                </HeroCleaningContainer>
            </Grid>
            <Grid item xs={12} md={6}>
                <HeroScrapContainer>
                    
                        <Typography variant="h3" fontWeight={900} style={{ color: theme.palette.secondary.main }} >
                            Scrap Service
                        </Typography>
                        <StyledLink to='/scrap'>  <Scrap fill={theme.palette.primary.main} style={{ padding: '1em 0' }} /></StyledLink>
                        <StyledLink to='/scrap'> <StyledButton variant="contained" >Go to Scrap</StyledButton> </StyledLink>
                 
                </HeroScrapContainer>
            </Grid>
        </Grid>

    );
}