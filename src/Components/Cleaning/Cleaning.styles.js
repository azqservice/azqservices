import { Button, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { keyframes, css } from 'styled-components';



export const TextAnimation = keyframes`
    0%   {left: -10em;}
  /* 25%  {color: yellow;}
  50%  {color: blue;} */
  /* 70% {
    
    left: -10px;
  } */
  100% {left: 0; }
`;

export const ImgAnimation = keyframes`
    0%   {right: -10em;}
  /* 25%  {color: yellow;}
  50%  {color: blue;} */
  /* 70% {
    
    left: -10px;
  } */
  100% {right: 0; }
`;

export const txtStyles = css`
  animation: ${TextAnimation} 1s ease-in;
`
export const imgStyles = css`
  animation: ${ImgAnimation} 1s ease-in;
`

export const Heading = styled(Typography)`
  
    /* text-shadow: '1px 2px 3px #1976d2'; */
    position: relative;
    font-weight: 900;    
    color: ${props => props.theme.palette.secondary.main};
    ${props => props.theme.breakpoints.down("md")} {
      font-size: 2rem;
    }

    ${props => props.theme.breakpoints.down("sm")} {
      font-size: 1.5rem;
    }

`;

export const SubHeading = styled(Typography)`
  
      
    font-size: 2.5rem;              
    font-weight: 600; 
    color: ${props => props.theme.palette.secondary.main};
    
    ${props => props.theme.breakpoints.down("md")} {
      font-size: 2rem;              
    }
    ${props => props.theme.breakpoints.down("sm")} {
      font-size: 1rem;              
    }
  
`;

export const ImgContainer = styled.div`
   
    /* text-shadow: '1px 2px 3px #1976d2'; */
    position: relative;
    height: 100%;
    width: 100%; 
    img {
      width: 100%;
      height: 100%;
      ${props => props.theme.breakpoints.down("md")} {
        width: 50%;        
      }
      
    }           
    ${imgStyles};
`;
export const Title = styled(Typography)`
      
    font-size: 2rem;  
    ${props => props.theme.breakpoints.down("md")} {
      font-size: 1.5rem;              
    }    
    font-weight: 600;
    color: ${props => props.theme.palette.primary.main};
    
`;

export const SubTitle = styled(Title)`
   font-size: 1.5rem;
   ${props => props.theme.breakpoints.down("md")} {
      font-size: 1rem;              
    } 
`;

export const HeroTextContainer = styled(Stack)`
  position: relative;
  ${txtStyles};
`;