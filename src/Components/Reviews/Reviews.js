
import React from 'react'
import Carousel from "react-elastic-carousel";
import { ReviewCard } from 'Components/Reviews/ReviewCard';
import { Container, Box, Stack } from '@mui/material';
import { Heading, SubHeading } from 'Components/Cleaning/Cleaning.styles';

import { Comments } from 'Components/Cleaning/Services/Data';

export const Reviews = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    const comments = Comments.map((comment, index) => {
        return(
            <ReviewCard {...comment} key={index} />
        );
    }); 
    return (

        <Box>
            <Box style={{ backgroundColor: '#eff8fe', padding: '2em 0' }}>
                <Container maxWidth='lg'>
                    <Stack spacing={4} textAlign='center'>
                        <SubHeading>
                            Det er, hvad folk siger om os
                        </SubHeading>

                        <Carousel breakPoints={breakPoints}  >
                            {comments}
                        </Carousel>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}
