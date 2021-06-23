import styled from "styled-components";
import headerLinePhone from "../assets/website/svg/header-line-phone-portrait.svg";
import headerLineDesktop from "../assets/website/svg/header-line-desktop.svg";
export const HeaderStyle = styled.header`
    padding-top: 160px;
    min-height: 100vh;
    background-color: var(--main-color);
    @media (min-width: 992px) {
        padding-top: 200px;
    }
`;

export const Line = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${headerLinePhone}) no-repeat 55% 93%;
    opacity: 0;

    @media (min-width: 992px) {
        background-image: url(${headerLineDesktop});
        background-position: 60% 105%;
    }
    @media (min-width: 1200px) {
        background-position: 59% 127%;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 992px) {
        flex-direction: row;
    }
`;

export const Heading = styled.section`
    font-family: "Spoof Trial", sans-serif;
    color: var(--green-color);
    margin-bottom: 50px;
    @media (min-width: 992px) {
        order: 2;
        width: 40%;
        padding-left: 20px;
    }
    @media (min-width: 1200px) {
        padding: 0;
    }
    & > div {
        opacity: 0;
        transform: translate(0, 50px);
        & h4 {
            font-weight: 400;
            margin-bottom: 15px;
            font-size: 22px;
            @media (min-width: 1200px) {
                font-size: 30px;
            }
        }
        & h1 {
            font-size: 54px;
            font-weight: bold;
            line-height: 54px;
            margin-bottom: 25px;
            & span {
                color: var(--orange-color);
            }
            @media (min-width: 1200px) {
                font-size: 70px;
                line-height: 70px;
            }
        }
    }
    p {
        opacity: 0;
        transform: translate(0, 50px);
        @media (min-width: 992px) {
            margin-top: 30%;
        }

        @media (min-width: 1200px) {
            padding-left: 125px;
            margin-top: 60%;
        }
    }
`;

export const MainImagesContainer = styled.section`
    display: flex;
    flex-direction: column;
    @media (min-width: 992px) {
        order: 1;
        width: 60%;
        padding: 0 11%;
    }
`;
export const MainImagesHeading = styled.div`
    color: var(--green-color);
    margin-bottom: 15px;
    opacity: 0;
    transform: translate(0, 50px);
    @media (min-width: 992px) {
        order: 2;
        margin-bottom: 0;
        margin-top: 15px;
    }
    h3 {
        font-weight: bold;
        font-size: 17px;
    }
    h5 {
        font-weight: 400;
        font-size: 15px;
    }
`;
export const MainImages = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 992px) {
        position: relative;
        width: 100%;
        top: 0;
        left: 0;
    }
`;
export const MainImage = styled.div`
    width: 100%;
    opacity: 0;
    transform: translate(0, 50px);
    @media (min-width: 992px) {
        order: 1;
    }
    & img {
        width: 100%;
        object-fit: cover;
    }
`;
export const Cards = styled.div`
    position: relative;
    width: 100%;
    height: 540px;
    @media (min-width: 992px) {
        position: absolute;
        height: 450px;
        top: 0;
        left: 0;
    }

    & div {
        position: absolute;
        z-index: 5;
        opacity: 0;
        transform: translateX(50px) translateY(0px);

        &.card {
            padding: 5px;
            width: 140px;
            background-color: var(--main-color);
            border-radius: 12px;
            box-shadow: 0px 2px 25px 2px #999;
            &:nth-of-type(1) {
                top: 0px;
                left: 5%;
                transform: translateY(-50%) translateX(50px);
                @media (min-width: 568px) {
                    left: 10%;
                }
                @media (min-width: 992px) {
                    top: 4%;
                    left: 75%;
                    transform: translateX(0) translateY(50px);
                }
                @media (min-width: 1200px) {
                    top: 10%;
                }
            }

            &:nth-of-type(2) {
                top: 55px;
                left: 55%;
                @media (min-width: 768) {
                    left: 60%;
                }
                @media (min-width: 992px) {
                    top: 40%;
                    left: 0;
                    transform: translateX(-50%) translateY(50px);
                }
            }
            &:nth-of-type(3) {
                top: 200px;
                left: 0%;
                @media (min-width: 568px) {
                    left: 5%;
                }
                @media (min-width: 992px) {
                    top: 60%;
                    left: 85%;
                    transform: translateX(0) translateY(50px);
                }
                @media (min-width: 1200px) {
                    top: 75%;
                    left: 90%;
                }
            }
            color: var(--green-color);
        }
        & img {
            width: 100%;
        }
        & h3 {
            font-size: 15px;
            font-weight: bold;
        }
        & p {
            font-size: 13px;
        }
        &.pin {
            display: none;
            @media (min-width: 992px) {
                display: initial;
            }
            &:nth-of-type(4) {
                @media (min-width: 992px) {
                    left: 75%;
                    top: 48%;
                    transform: translateX(108px) translateY(50px);
                }
                @media (min-width: 1200px) {
                    top: 63%;
                }
            }
            &:nth-of-type(5) {
                @media (min-width: 992px) {
                    left: -20%;
                    top: 13%;
                    transform: translateX(0) translateY(50px);
                }
            }
        }
    }
`;
// @media(min-width:1200px){}
