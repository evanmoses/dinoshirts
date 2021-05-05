import styled from "styled-components/macro";
import splash from "../../images/splash-placeholder.jpg";

export const SplashWrapper = styled.section`
  width: 100%;
  height: calc(100vw * 0.45);
  background-size: 100%;
  background-image: url(${splash});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (max-width: 800px) {
    width: 100%;
    height: calc(80vw);
    background-size: 150%;
  }
`;
