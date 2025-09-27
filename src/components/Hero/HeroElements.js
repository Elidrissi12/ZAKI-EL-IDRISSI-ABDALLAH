import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding-bottom: 4rem;
  padding-top: 6rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.12);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`;

export const BigTitle = styled.h1`
  position: absolute;
  font-size: clamp(4rem, 12vw, 12rem);
  line-height: 0.9;
  letter-spacing: 0.08em;
  color: #e8dcc3;
  opacity: 0.9;
  z-index: 1;
`;

export const BigTitleOutline = styled.h1`
  position: absolute;
  font-size: clamp(4rem, 12vw, 12rem);
  line-height: 0.9;
  letter-spacing: 0.08em;
  color: transparent;
  -webkit-text-stroke: 2px #e8dcc3;
  text-stroke: 2px #e8dcc3;
  z-index: 2;
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 3.2rem;
    color: #ffffff;
    opacity: 0.98;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  h5 {
    font-size: 1.4rem;
    color: #cfd4ff;
    margin-bottom: 1.25rem;
    font-weight: 500;
  }

  p {
    font-size: 17px;
    color: #e8e8f2;
    opacity: 0.85;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;

    h5 {
      min-height: 5rem;
  }
      
`;

export const HeroRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  height: 360px;
  width: auto;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.35));
`;

export const BannerImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  position: absolute;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    position: relative;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;
