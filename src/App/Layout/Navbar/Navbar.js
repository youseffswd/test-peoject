import {
    NavbarStyle,
    Menu,
    Links,
    Logo,
    Wrapper,
} from "../../styles/_navbar.style";
import logo from "../../assets/website/svg/wiket-logo.svg";

import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap/gsap-core";
const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);
    const nav = useRef(null);
    const [scroll, setScroll] = useState({
        down: false,
        scrollPosition: 0,
    });
    let position = useRef(0);
    useLayoutEffect(() => {
        window.onscroll = () => {
            if (window.scrollY >= position.current) {
                setScroll({
                    down: true,
                    scrollPosition: window.scrollY,
                });
                position.current = window.scrollY;
            } else {
                setScroll({
                    down: false,
                    scrollPosition: window.scrollY,
                });
                position.current = window.scrollY;
            }
        };
    }, []);
    useLayoutEffect(() => {
        gsap.to(nav.current, { opacity: 1, duration: 0.5 });
    }, []);
    return (
        <NavbarStyle ref={nav} active={scroll.down}>
            <Wrapper padding={scroll.scrollPosition}>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>

                <Menu>
                    <button>Get Started</button>
                    <div onClick={() => setOpenLinks(!openLinks)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Menu>
                <Links open={openLinks}>
                    <ul>
                        <li>
                            <a href="/">Benefits</a>
                        </li>
                        <li>
                            <a href="/">Your Profile</a>
                        </li>
                        <li>
                            <a href="/">Connections</a>
                        </li>
                        <li>
                            <a href="/">Plans & Pricing</a>
                        </li>
                    </ul>
                </Links>
            </Wrapper>
        </NavbarStyle>
    );
};

export default Navbar;
