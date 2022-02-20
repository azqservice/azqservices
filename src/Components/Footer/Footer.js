import React from 'react'

import { FooterItem, FooterWrapper, FooterListItem, SocialMediaIconsWrapper, Copywrite, StyledLink } from 'Components/Footer/Footer.styles'
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SubTitle } from 'Components/Cleaning/Cleaning.styles';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
            <Box style={{ padding: '2em 0', backgroundColor: 'white' }}>
                <Container maxWidth='lg'>
                    <Stack spacing={2} direction={{xs: 'column', md: 'row'}} textAlign={{xs: 'center', md: 'left'}} justifyContent='space-between'>
                        <Stack spacing={2}>
                            <SubTitle>Customer Service</SubTitle>

                            <Stack direction='row' spacing={1} justifyContent={{xs: 'center', md: 'left'}}>
                                <PhoneIcon color='primary' />
                                <StyledLink to='#'>0045 87554536</StyledLink>
                            </Stack>
                            <Stack direction='row' spacing={1} justifyContent={{xs: 'center', md: 'left'}}>
                                <EmailIcon color='primary' />
                                <StyledLink to='#'>contact@azqualityservice.com</StyledLink>
                            </Stack>

                        </Stack>

                        <Stack spacing={2} alignItems={{xs: 'center', md: 'flex-start'}}>
                            <SubTitle>HURTIGE LINKS</SubTitle>
                            <Stack direction='row' spacing={2}>
                            <StyledLink to='/'>Hjem</StyledLink>
                            <StyledLink to='/cleaning'>Rengøring</StyledLink>
                            <StyledLink to='/scrap'>Scrap</StyledLink>
                            <StyledLink to='/contact'>Kontakt</StyledLink>
                            </Stack>
                        </Stack>

                        <Stack spacing={3}>
                            <SubTitle>Follow us</SubTitle>
                            <Stack spacing={3} direction='row' justifyContent={{xs: 'center', md: 'left'}} >
                                <FacebookIcon fontSize='large' color='primary' />
                                <InstagramIcon fontSize='large' color='primary' />
                                <YouTubeIcon fontSize='large' color='primary' />
                                <TwitterIcon fontSize='large' color='primary' />
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

        </>
    )
}
