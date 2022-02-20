import styled from "styled-components";
import Paper from '@mui/material/Paper';
import { Container } from "@mui/material";

export const StyledContainer = styled(Container)`
    ${props => props.theme.breakpoints.down("lg")} {
      padding-left: 0;
      padding-right: 0;              
    } 
`;

export const ImgContainer = styled.div`
    width: 30.625rem;
    background-color: aliceblue;
    height: 20em;
    border-radius: 8px;
    border: .5px solid #ccc;
    ${props => props.theme.breakpoints.down("lg")} {        
        width: 22rem;
    }
    ${props => props.theme.breakpoints.down("md")} {
        border-radius: 0;
        width: 100%;        
    }
    
    img {
        height: 100%;  
        object-fit: cover;
        border-radius: 8px;      
    }
`;

export const TextContainer = styled.div`
    margin-left: 16.66667%;
    border-radius: 8px;
    background-color: white;
    margin-bottom: -17em;
`;

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    fontWeight: 600,
    color: theme.palette.text.main,
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    boxShadow: '0px 0px 10px 0px rgb(0 0 0 / 2%)',
    borderRadius: 8,
    border: '1px solid #e5e5e5',

    [theme.breakpoints.down('lg')]: {
        borderRadius: 0,
      }
    
  }));

  export const Img = styled.img`
    margin: 0 auto;
    display: block;
    max-width: 100%;
    max-height: 100%;    
    transform: rotateY(180deg);    
  `;    
    
  