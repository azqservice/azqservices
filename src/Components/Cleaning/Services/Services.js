import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { SubHeading } from "Components/Cleaning/Cleaning.styles";

import { Service } from "Components/Cleaning/Services/Service";

import { Data } from "./Data";
import { StyledContainer } from "Components/Cleaning/Services/Services.styles";

export const Services = () => {

    const services = Data.map((data,index) => {
        
        return(
            <Service {...data} key={index} />
            
        )
    });
    return (
        <Box style={{ backgroundColor: '#f7f7f7', padding: '2em 0', }}>
            
            <StyledContainer maxWidth='lg' >
                <Stack spacing={{xs: 1, md: 4}} textAlign='center'>
                    <SubHeading>
                        Vores Services
                    </SubHeading>
                    <Stack spacing={{xs: 5, md: 15}}>
                        {services}
                    </Stack>


                </Stack>
            </StyledContainer>
        </Box>
    );
}