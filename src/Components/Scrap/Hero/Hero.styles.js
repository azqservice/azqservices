import styled from "styled-components";
import Scrapyard from 'Images/scrapyard.jpg';
import { Stack } from "@mui/material";

export const Herocontainer = styled(Stack)`
    position: relative;
    width: 100%;
    height: 100%;
    background: url(${Scrapyard});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;    
`;

export const Overlay = styled.div`

    position: absolute;
    height: 100%;
    width: 100%;
    display: block;
    /* background: #000; */
    background-image: linear-gradient(to right, black, #929083);
    opacity:0.5;
    z-index: 2;
`;