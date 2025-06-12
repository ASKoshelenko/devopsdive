import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import LanguageStickers from "../LanguageStickers";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Achievements from "./Achievements";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useTranslation } from 'react-i18next';


function About() {
  const { t } = useTranslation(); 

  return (
    <Container fluid className="about-section">
      <Particle />
      <LanguageStickers />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t('about_title')}
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          {t('bages_and_certificates')}
          {/* <p style={{ color: "rgb(155 126 172)" }}>{t('click_to_verify')}</p> */}
        </h1>
        <Achievements />

        <h1 className="project-heading">
          {t('professional_skillset')}
        </h1>

        <Techstack />

        <h1 className="project-heading">
          {t('tools_i_use')}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
