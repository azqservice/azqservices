import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { useTheme } from '@mui/styles';

import Metal from 'Images/metal.png';



export const SellScrap = () => {

    const theme = useTheme();

    return (
        <React.Fragment>
            <Box style={{ width: '100%', backgroundColor: 'white', paddingBottom: '2em' }}>
                <Container maxWidth='lg'>
                    <Stack spacing={4}>
                        <Typography variant="h4" fontWeight={900} textAlign='center' p={4} color={theme.palette.secondary.main}>
                            Sell Your Scrap
                        </Typography>
                        <Stack direction={{xs: 'column', md: 'row'}}>
                            <Stack spacing={2} p={4} flex={1} >

                                <Typography variant="h6" >
                                    Tips for getting a faster and more accurate quote:
                                </Typography>
                                <Stack direction='row' spacing={2}>
                                    <CheckCircleOutlineIcon />
                                    <Typography >Take picture of your scrap</Typography>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <CheckCircleOutlineIcon />
                                    <Typography >Provide quantity or weight estimate</Typography>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <CheckCircleOutlineIcon />
                                    <Typography >Describe condition of scrap (mixed metal, all one material type, mixed with other waste (other than metal)</Typography>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <CheckCircleOutlineIcon />
                                    <Typography >Include address where scrap is located</Typography>
                                </Stack>
                            </Stack>
                            <Stack flex={1}>
                                <img src={Metal} style={{ width: '100%', borderRadius: 8 }} />
                            </Stack>
                        </Stack>

                    </Stack>
                </Container>
            </Box>
        </React.Fragment>
    );
}