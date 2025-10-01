import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
import { useI18n } from "../../i18n";
function About() {
  const { t } = useI18n();
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">{t('sections.about')}</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
         
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hi! My name is <strong>ZAKI EL IDRISSI ABDALLAH</strong>.  originally from Morocco. I am passionate about technology and web development, constantly seeking to learn and grow in this ever-evolving field..
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Through my journey, I have gained valuable experience by working on diverse projects, which have sharpened my skills in problem-solving, adaptability, and communication. I am dedicated to delivering high-quality solutions and always strive to enhance user experiences through innovative designs and efficient code.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            I'm always excited about new opportunities and collaborations. Feel free to look around my portfolio and reach out – let's create something great together!         <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
