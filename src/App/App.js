import GlobalStyles from "./Global.style";
import Navbar from "./Layout/Navbar/Navbar";
import Header from "./Layout/Header/Header";
import { gsap } from "gsap";
const App = () => {
    gsap.defaults({
        ease: "power2.out",
    });

    return (
        <>
            <GlobalStyles />
            <Navbar />
            <Header />
        </>
    );
};

export default App;
