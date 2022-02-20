import React, { useRef, useEffect } from 'react';
import { Button, Container, Grid, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Heading, ImgContainer, HeroTextContainer } from "Components/Cleaning/Cleaning.styles";
import useAppBarHeight from "Components/Util/AppHeight";
import { StyledLink } from "Components/Footer/Footer.styles";


import ImgCleaning from 'Images/cleaning1.svg';
import { useIntersection } from 'Components/Util/Intersection';
import { HeroScrapContainer } from 'Components/Hero/Hero.styles';

export const HeroCleaning = () => {

    const appBarHeight = useAppBarHeight();

    // const ref = useRef();
    // const inViewport = useIntersection(ref, '0px'); // Trigger as soon as the element becomes visible
    //const inViewport = useIntersection(ref, '-200px'); // Trigger if 200px is visible from the element            

    return (
        <React.Fragment>
            <Box pt={4} pb={4} height={{ md: `calc(100vh - ${appBarHeight + 5}px)` }} sx={{ width: '100%', backgroundColor: 'white' }}>
                <Container maxWidth='lg' sx={{ height: '100%' }}>
                    <Grid container spacing={4} sx={{ height: '100%' }} textAlign={{xs: 'center', md: 'left'}}>
                        <Grid item md={6} xs={12} display='flex' alignItems='center' >
                            <HeroTextContainer pl={{xs: '2em', sm: '4em', md: 0}} pr={{xs: 2, sm: 4, md: 0}} spacing={{xs: 2, md: 3}}>
                                <Typography variant="h6" fontWeight={600}>
                                    Don’t Stress, we clean all you mess
                                </Typography>
                                <Heading id='heading' variant="h3">
                                    Professionel rengøring med fornuftig pris
                                </Heading>
                                <Typography>
                                    Vores ambition er at kunne være danskernes foretrukne rengøringshjælp til private og erhverv.
                                    Vi har et veletableret hold af medarbejdere, der har mange års erfaring med rengøring og dét at
                                    begå sig i andres hjem og arbejdspladser.
                                </Typography>
                                <StyledLink to='/contact'> <Button variant='contained' sx={{ maxWidth: 'fit-content' }} > Contact now </Button> </StyledLink>
                            </HeroTextContainer>
                        </Grid>
                        <Grid item alignItems='center' md={6} xs={12}>
                            <ImgContainer >
                                <img src={ImgCleaning} />
                            </ImgContainer>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    );

}