import styled from "styled-components";

export const NavbarStyle = styled.nav`
    display: flex;
    align-items: center;
    position: fixed;
    top: ${props => (props.active ? "-120%" : 0)};
    left: 0;
    width: 100%;
    z-index: 10;
    transition: 0.3s all ease-in-out;
    opacity: 0;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;

    background-color: var(--main-color);
    transition: 0.3s all ease-in-out;
    padding: ${props => (props.padding === 0 ? "45px 25px 20px" : "15px 25px")};
    @media (min-width: 992px) {
        padding: ${props => (props.padding === 0 ? "30px 85px " : "20px 85px")};
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    @media (min-width: 568px) {
        width: 115px;
    }
    @media (min-width: 992px) {
        width: 124px;
    }
    & img {
        width: 100%;
    }
`;

export const Menu = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: right;
    @media (min-width: 992px) {
        order: 1;
        margin-left: 35px;
    }
    & button {
        border: none;
        background-color: var(--orange-color);
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        padding: 12px 20px;
        border-radius: 10px;
        cursor: pointer;
        @media (min-width: 992px) {
            padding: 15px 30px;
        }
    }

    & div {
        width: 33px;
        cursor: pointer;
        height: 21px;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
        justify-content: flex-end;
        margin-left: 15px;
        @media (min-width: 568px) {
            margin-left: 25px;
        }
        @media (min-width: 992px) {
            display: none;
        }
        & span {
            display: block;
            width: 100%;
            height: 3px;
            background-color: var(--green-color);
            &:nth-of-type(1) {
                width: 82%;
            }
            &:nth-of-type(2) {
                width: 100%;
            }
            &:nth-of-type(3) {
                width: 66.6%;
            }
        }
    }
`;

export const Links = styled.div`
    position: absolute;
    transition: 0.3s all ease-in-out;
    width: 100%;
    top: ${props => (props.open ? "100%" : "-200%")};
    left: 0;
    background-color: var(--main-color);
    padding-left: 25px;
    z-index: -1;
    @media (min-width: 992px) {
        position: initial;
        width: auto;
        transition: initial;
        top: initial;
        left: initial;
        z-index: initial;
        background-color: initial;
        margin-left: auto;
        order: 0;
    }
    & ul {
        li {
            &:not(:last-of-type) {
                margin-bottom: 5px;
                @media (min-width: 992px) {
                    margin-bottom: 0;
                    margin-right: 35px;
                }
            }
            @media (min-width: 992px) {
                display: inline-block;
            }
            a {
                display: inline-block;
                padding: 5px 0;
                color: var(--green-color);
                font-weight: bold;
                @media (min-width: 568px) {
                    font-size: 18px;
                }
                @media (min-width: 992px) {
                    font-size: 16px;
                    padding: initial;
                }
            }
        }
    }
`;
