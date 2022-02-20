import React from "react";
import { HeroScrap } from "Components/Scrap/Hero/Hero";
import { ScrapItems } from "Components/Scrap/Items/Items";
import { SellScrap } from "Components/Scrap/SellScrap";
import { SloganScrap } from "./Slogan";
import { SellScrapWork } from "Components/Scrap/SellScrapWork";



export const Scrap = () => {
    return(
        <React.Fragment>
            <HeroScrap />                            
            <SellScrap />
            <SloganScrap />
            <SellScrapWork />
        </React.Fragment>
    );
}