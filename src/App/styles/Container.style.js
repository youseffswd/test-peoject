import styled from "styled-components";
export default styled.div`
    padding: 0 15px;
    width: 100%;
    margin: 0 auto;
    min-height: calc(100vh - 160px);
    position: relative;
    @media (min-width: 568px) {
        width: 540px;
    }
    @media (min-width: 768) {
        width: 720px;
    }
    @media (min-width: 992px) {
        width: 960px;
        min-height: calc(100vh - 200px);
    }
    @media (min-width: 1200px) {
        width: 1140px;
    }
`;
