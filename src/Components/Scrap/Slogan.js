import { Container, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { useTheme } from '@mui/styles';
import { ReactComponent as Commitment } from 'Images/commitment.svg';
import { ReactComponent as Quality } from 'Images/quality.svg';
import TagFacesIcon from '@mui/icons-material/TagFaces';

export const SloganScrap = () => {

    const theme = useTheme();

    return (
        <React.Fragment>
            <Box style={{ width: '100%', backgroundColor: theme.palette.primary.main, padding: '2em 0' }}>
                <Container maxWidth='lg'>
                    <Stack direction='row' justifyContent='space-around' alignItems='center'>
                        <Stack alignItems='center'>
                            <Commitment fill='white' height={100} />
                            <Typography color='white' variant="h6">Commitment</Typography>
                        </Stack>
                        <Stack alignItems='center'>
                            <Quality height={100} fill='white' />
                            <Typography color='white' variant="h6">Quality</Typography>
                        </Stack>
                        <Stack alignItems='center'>
                            <TagFacesIcon style={{ fontSize: '100', color: 'white' }} />
                            <Typography color='white' variant="h6">Satisfaction</Typography>
                        </Stack>


                    </Stack>
                </Container>
            </Box>
        </React.Fragment>
    )
}