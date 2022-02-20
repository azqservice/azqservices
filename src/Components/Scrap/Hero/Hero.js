import { Container, Stack, Typography } from "@mui/material";
import { useTheme } from '@mui/styles';
import useAppBarHeight from "Components/Util/AppHeight";
import { Herocontainer, Overlay } from "Components/Scrap/Hero/Hero.styles";

import Scrapyard from 'Images/scrapyard.jpg';
import { StyledButton } from "Components/Hero/Hero.styles";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { StyledLink } from "Components/Footer/Footer.styles";
import { Heading } from "Components/Cleaning/Cleaning.styles";

export const HeroScrap = () => {

    const appBarHeight = useAppBarHeight();

    const theme = useTheme();

    return (
        
        <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            position='relative'
            style={{
                height: `calc(100vh - ${appBarHeight + 5}px)`,
                backgroundImage: `url(${Scrapyard})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                
                

            }}>
            <Container maxWidth='lg'>
                <Stack style={{textShadow: '0 3px 8px rgb(0 0 0 / 50%)'}}  direction={{ xs: 'column', md: 'row' }} width={{sm: '82%', md: '100%'}} textAlign={{sm: "center", md: 'left'}} spacing={4} alignItems='center' justifyContent='center'>
 

                    <Stack flex={1} spacing={2} pl={4} pr={4} style={{zIndex: 101}} >
                        <Typography variant="subtitle1" color='white' fontWeight={900}>
                            We offer competitive prices for all types of scrap metals.
                        </Typography>
                        <Heading variant="h3" style={{color: 'white', fontSize: '3.5rem'}}>
                            High Quality Scrap Service In the Town
                        </Heading>
                        <Typography variant="h6" color='white' >
                            We sell and buy the scrap as well as provide free transportation service to bring your scrap.
                        </Typography>
                       <StyledLink to='/contact'> <StyledButton zIndex={101} style={{ backgroundColor: 'white', width: 'fit-content', zIndex: '101' }}>Contact us</StyledButton></StyledLink>
                    </Stack>
                    <Stack spacing={2} flex={1} zIndex={101} alignItems='flex-end' justifyContent='flex-start'  >
                        <Stack spacing={2} border={1} borderRadius={5} borderColor='white' p={4} >
                            <Typography variant="h4" fontWeight={900} color='white'>
                                We deal with following
                            </Typography>
                            <Stack direction='row' spacing={2}>
                                <CheckCircleOutlineIcon style={{ color: 'white' }} />
                                <Typography fontWeight={900} color='white'>Copper: wire, tubing, scrap</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <CheckCircleOutlineIcon style={{ color: 'white' }} />
                                <Typography fontWeight={900} color='white'>Aluminum: cast, sheet, siding, car rims</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <CheckCircleOutlineIcon style={{ color: 'white' }} />
                                <Typography fontWeight={900} color='white'>Stainless Steel</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <CheckCircleOutlineIcon style={{ color: 'white' }} />
                                <Typography fontWeight={900} color='white'>Silver and other matels</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
            <Overlay />

        </Stack>

    );
}