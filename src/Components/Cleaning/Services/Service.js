import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ImgContainer, TextContainer, Item, Img } from "Components/Cleaning/Services/Services.styles";
import { Title } from "Components/Cleaning/Cleaning.styles";
import ImgOffice from 'Images/office.png';

export const Service = (props) => {
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} >
                    <Box zIndex={1}>
                        <ImgContainer>
                            <Img src={props.img} />
                        </ImgContainer>
                    </Box>
                    <Box zIndex={0} mt={{ md: '5em' }} mb={{ md: '-4em' }} ml={{ md: '-16em' }} flex={1} >
                        <Item>
                            {/* <Stack spacing={2} ml={{md:40}} pt={{lg: 2}} pr={{lg: 4}}> */}
                            <Stack spacing={2} ml={{ md: 40 }} pt={{ md: 2 }} pr={{ md: 4 }}>
                                <Title>
                                    {props.title}
                                </Title>
                                <Typography variant="body1" color='gray' lineHeight={2} pl={{xs: 2, sm: 4}} pr={{xs: 2, sm: 4}}>
                                    {props.description}
                                </Typography>
                            </Stack>
                        </Item>
                    </Box>

                </Box>
            </Container>
        </React.Fragment>
    );
}