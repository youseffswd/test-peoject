import {
    HeaderStyle,
    Heading,
    MainImagesContainer,
    MainImagesHeading,
    MainImages,
    MainImage,
    Cards,
    HeaderWrapper,
    Line,
} from "../../styles/_header.style";
import Container from "../../styles/Container.style";

import mainImage from "../../assets/website/jpg/header-img-florist.jpg";
import card1 from "../../assets/website/jpg/header-img-pottery.jpg";
import card2 from "../../assets/website/jpg/header-img-gardener.jpg";
import card3 from "../../assets/website/jpg/header-img-barista.jpg";
import pin1 from "../../assets/website/svg/pin-01.svg";
import pin2 from "../../assets/website/svg/pin-02.svg";

import Card from "./Card";

import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap/gsap-core";
const Header = () => {
    const headingTitles = useRef(null);
    const headingP = useRef(null);
    const mainImageHeading = useRef(null);
    const mainImageRef = useRef(null);
    const cards = useRef(null);
    const line = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        if (window.innerWidth < 992) {
            const tl = gsap.timeline();
            tl.to(headingTitles.current, { y: 0, opacity: 1, duration: 0.5 })
                .to(headingP.current, { duration: 0.5, y: 0, opacity: 1 })
                .to(
                    mainImageHeading.current,
                    { duration: 0.5, y: 0, opacity: 1 },
                    "-=.4"
                )
                .to(
                    mainImageRef.current,
                    { duration: 0.5, y: 0, opacity: 1 },
                    "-=.5"
                );
            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: cards.current,
                    start: "top center",
                },
            });
            scrollTl
                .to(cards.current.querySelectorAll("div"), {
                    duration: 0.5,
                    x: 0,
                    opacity: 1,
                    stagger: 0.2,
                })
                .to(
                    line.current,
                    {
                        duration: 0.5,

                        opacity: 1,
                    },
                    "-=.7"
                );
        }
    }, []);
    useLayoutEffect(() => {
        if (window.innerWidth >= 992) {
            const tl = gsap.timeline();
            gsap.set(headingP.current, { y: 0 });
            tl.to(mainImageRef.current, { duration: 0.5, y: 0, opacity: 1 })
                .to(
                    cards.current.querySelectorAll("div"),
                    {
                        duration: 0.5,
                        y: 0,
                        opacity: 1,
                        stagger: 0.15,
                    },
                    "-=.4"
                )
                .to(headingTitles.current, { y: 0, opacity: 1, duration: 0.5 })
                .to(headingP.current, { duration: 0.5, y: 0, opacity: 1 })
                .to(line.current, { duration: 0.5, opacity: 1 }, "-=.5");

           
        }
    }, []);
    return (
        <HeaderStyle>
            <Container>
                <Line ref={line} />
                <HeaderWrapper>
                    <Heading>
                        <div ref={headingTitles}>
                            <h4>Explore new opportunities</h4>
                            <h1>
                                <span>Grow</span> your <br /> business.
                            </h1>
                        </div>
                        <p ref={headingP}>
                            <strong>
                                Wiket is the first business to business network{" "}
                            </strong>
                            which let's you connect to mind like people
                        </p>
                    </Heading>
                    <MainImagesContainer>
                        <MainImagesHeading ref={mainImageHeading}>
                            <h3>Hanging Garden</h3>
                            <h5>Florist in Bangkok</h5>
                        </MainImagesHeading>
                        <MainImages>
                            <MainImage ref={mainImageRef}>
                                <img src={mainImage} alt="main" />
                            </MainImage>
                            <Cards ref={cards}>
                                <Card
                                    src={card1}
                                    title="Project"
                                    desc="Pottery in Bangkok"
                                />
                                <Card
                                    src={card2}
                                    title="GreenThunmb"
                                    desc="Gardner in CheChe"
                                />
                                <Card
                                    src={card3}
                                    title="Green Cafe"
                                    desc="Cafe in Bangkok"
                                />

                                <div className="pin">
                                    <img src={pin1} alt="pin01" />
                                </div>
                                <div className="pin">
                                    <img src={pin2} alt="pin02" />
                                </div>
                            </Cards>
                        </MainImages>
                    </MainImagesContainer>
                </HeaderWrapper>
            </Container>
        </HeaderStyle>
    );
};

export default Header;
