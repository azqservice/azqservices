import React from "react"
import { Container, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTheme } from '@mui/styles';

import WorkShop from 'Images/workshop.png';

export const SellScrapWork = () => {

    const theme = useTheme();
    return (
        <React.Fragment>
            <Container maxWidth='lg'>
                <Stack spacing={4} pb={8}>
                    <Typography variant="h4" fontWeight={900} textAlign='center' p={4} color={theme.palette.secondary.main}>
                        Sell your job site scrap metal to us
                    </Typography>
                    <Stack direction={{xs: 'column', md: 'row'}}>
                        <Stack flex={1}>
                            <img src={WorkShop} style={{ width: '100%', borderRadius: 8 }} />
                        </Stack>
                        <Stack spacing={2} p={4} flex={1} justifyContent='center' >
                            <Stack direction='row' spacing={2}>
                                <CheckCircleOutlineIcon />
                                <Typography >On site collection facility</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <CheckCircleOutlineIcon />
                                <Typography >Quick, no hassle pricing and payment</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <CheckCircleOutlineIcon />
                                <Typography >Convenient hours of operation – many facilities open on Saturday</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <CheckCircleOutlineIcon />
                                <Typography >Support for out-of-town jobs and regional companies</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <CheckCircleOutlineIcon />
                                <Typography >Locked containers and bins for large jobs</Typography>
                            </Stack>
                        </Stack>

                    </Stack>
                </Stack>
            </Container>
        </React.Fragment>
    );

}