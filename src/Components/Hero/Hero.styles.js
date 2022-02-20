import styled from "styled-components";
import Clean from 'Images/clean.jpg';
import { keyframes, css } from 'styled-components';
import { Button } from "@mui/material";


// import { TextAnimation, ImgAnimation, txtStyles, imgStyles } from "Components/Cleaning/Cleaning.styles";

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


export const HeroCleaningContainer = styled('div')` ${({ theme }) => `  
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0;
`};
 
`;

export const HeroScrapContainer = styled('div')` ${({ theme }) => `  
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0;
`};

`;

export const StyledButton = styled(Button)`
  ${({ theme }) => `    
   font-weight: bold;     
   border-radius: 2em;
   padding: .8em 2em;
     
  `}
`;

export const TransparentDiv = styled('div')`
  
  background-color: rgba(255,255,255,0.5);
  
  padding: 2em 0;
`;