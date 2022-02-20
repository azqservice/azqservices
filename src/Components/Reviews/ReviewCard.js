import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';
import { Stack } from '@mui/material';

import { useTheme } from '@mui/styles';

export const ReviewCard = (props) => {

  const theme = useTheme();

  return (
    <Card sx={{ minWidth: 275, minHeight: 300, maxHeight: 350, margin: 1, }} >
      <Stack height='100%'  justifyContent='space-between'>
        <CardContent sx={{ lineHeight: '1.5em' }}>
          <Typography textAlign={{xs: 'center', lg: 'left'}} sx={{ lineHeight: 2, }} gutterBottom>
            {props.comments}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant='caption' pl={2}>
            {props.name}
          </Typography>
        </CardActions>
        <Box pb={2}><Rating name="read-only" value={5} readOnly style={{color: theme.palette.secondary.main}} /></Box>
        
      </Stack>
    </Card>
  );
}
