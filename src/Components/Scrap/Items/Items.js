import { Container, Stack, Typography, Paper } from "@mui/material"
import { Box } from "@mui/system"

import { useTheme } from '@mui/styles';
import React from "react"
import Copper from 'Images/copper.png';
import Silver from 'Images/silver.png';
import Aluminum from 'Images/aluminum.png';
import Zink from 'Images/zink.png';

export const ScrapItems = () => {

    const theme = useTheme();

    return (
        <React.Fragment>
            <Container maxWidth='lg'>

                <Box width='100%' display='flex' alignItems='center' justifyContent='center' p={4}     >
                    <Stack style={{ width: '100%' }}>
                        <Typography variant="h3" color={theme.palette.secondary.main} textAlign='center' fontWeight={600} p={4}>
                            We deal with following metals,
                        </Typography>
                        <Stack display='flex' direction='row' alignItems='center' spacing={2} pt={2}>
                            <div style={{ flex: 1, margin: 0 }}>
                                <Paper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={Copper} style={{ height: '20em', width: '100%' }} />
                                </Paper>
                            </div>
                            <div style={{ flex: 1, margin: 0, padding: '4', textAlign: 'center' }}>
                                <Typography variant="body1" fontWeight={600}>
                                    We deal with following,
                                </Typography>
                            </div>
                        </Stack>
                        <Stack display='flex' direction='row' alignItems='center' spacing={2}>
                            <div style={{ flex: 1, padding: '4', textAlign: 'center' }}>
                                <Typography variant="body1" fontWeight={600}>
                                    We deal with following,
                                </Typography>
                            </div>
                            <div style={{ flex: 1, margin: 0 }}>
                                <Paper style={{ margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={Silver} style={{ height: '20em', width: '100%' }} />
                                </Paper>
                            </div>

                        </Stack>
                        <Stack display='flex' direction='row' alignItems='center' spacing={2}>
                            <div style={{ flex: 1, margin: 0 }}>
                                <Paper style={{ margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={Aluminum} style={{ height: '20em', width: '100%' }} />
                                </Paper>
                            </div>
                            <div style={{ flex: 1, padding: '4', textAlign: 'center' }}>
                                <Typography variant="body1" fontWeight={600}>
                                    We deal with following,
                                </Typography>
                            </div>
                        </Stack>
                        <Stack display='flex' direction='row' alignItems='center' spacing={2}>
                            <div style={{ flex: 1, padding: '4', textAlign: 'center' }}>
                                <Typography variant="body1" fontWeight={600}>
                                    We deal with following,
                                </Typography>
                            </div>
                            <div style={{ flex: 1, margin: 0 }}>
                                <Paper style={{ margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={Zink} style={{ height: '20em', width: '100%' }} />
                                </Paper>
                            </div>

                        </Stack>
                    </Stack>


                </Box>
            </Container>
        </React.Fragment>
    )
}