import { Button, Container, Grid, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Heading, SmallButton, TextAnimation } from "Components/Cleaning/Cleaning.styles";
import useAppBarHeight from "Components/Util/AppHeight";
import React from "react";
import { HeroCleaning } from "Components/Cleaning/Hero";
import { Services } from "Components/Cleaning/Services/Services";
import { Reviews } from "Components/Reviews/Reviews";
import { Footer } from "Components/Footer/Footer";
import { Slogan } from "Components/Cleaning/Slogan";


export const Cleaning = () => {

    return (
        <React.Fragment>

            <HeroCleaning />
            <Services />
            <Slogan />
            <Reviews />

        </React.Fragment>
    );

}