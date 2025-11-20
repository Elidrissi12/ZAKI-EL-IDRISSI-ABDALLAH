import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  ScrollDown,
  ScrollLink,
  Banner,
  BannerImage,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll";
import { useI18n } from "../../i18n";

function Hero() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <Banner>
          <BannerImage src="/images/zak.png" alt="Portrait" />
        </Banner>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  t('hero.greeting'),
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    t('hero.roles.fullstack'),
                    1000,
                    t('hero.roles.creative'),
                     1000,
                    t('hero.roles.problem'),
                    1000,
                    t('hero.roles.innovator'),
                   
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
              {showSubtitle && (
                <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="btn PrimaryBtn btn-shadow"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    {t('hero.viewWork')}
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="btn SecondaryBtn btn-shadow"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    {t('hero.getInTouch')}
                  </Link>
                </div>
              )}
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight></HeroRight>
        </HeroWrapper>
        {showSubtitle && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                {t('hero.scrollDown')}
                <img
                  src="/scroll-down.svg"
                  alt="scroll-down"
                />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}

export default Hero;
