import { createGlobalStyle } from "styled-components";
import headerLinePhone from "./assets/website/svg/header-line-phone-portrait.svg";
import headerLineDesktop from "./assets/website/svg/header-line-desktop.svg";

import SpoofTrialLight from "./assets/website/fonts/SpoofTrial/SpoofTrial-Light.otf";
import SpoofTrialBold from "./assets/website/fonts/SpoofTrial/SpoofTrial-Bold.otf";

import FaibleRegular from "./assets/website/fonts/Faible/Faible-Regular.otf";
import FaibleBold from "./assets/website/fonts/Faible/Faible-Bold.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Spoof Trial';
        src: url(${SpoofTrialLight});
        font-weight: lighter;
    }
    @font-face {
        font-family: 'Spoof Trial';
        src: url(${SpoofTrialBold});
        font-weight: bold;
    }
    @font-face {
        font-family: 'Faible';
        src: url(${FaibleRegular});
        font-weight: 400;
    }
    @font-face {
        font-family: 'Faible';
        src: url(${FaibleBold});
        font-weight: bold;
    }
    :root{
        --main-color:#FFF8EF;
        --orange-color:#faa834;
        --green-color:#004e4c;

    }
*,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
    body{
        font-family: 'Faible', sans-serif;
        ;
        /* background: url(${headerLinePhone}) no-repeat 60% 93%;
        background-color:var(--main-color) ;
        @media(min-width:992px){
            background-image: url(${headerLineDesktop});
            background-position:60% 180%;
        }
        @media (min-width: 1200px) {
            background-position: 59% 155%;
        } */
    }
    ul{
        list-style: none !important;
    }
    a{
        text-decoration: none;
    }


`;
