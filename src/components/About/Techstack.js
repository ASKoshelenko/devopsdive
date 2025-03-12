import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  DiPython,
  DiGit,
  DiNodejs,
  DiMysql,
} from "react-icons/di";
import {
  SiGnubash,
  SiLinux,
  SiJavascript,
  SiTypescript,
  // SiPostgresql,
  // SiCss3,
  // SiHtml5,
  SiMongodb,
  // SiRedux,
  SiReact,
  SiAnsible,
  SiTerraform,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

import { 
  FaNetworkWired, 
  FaServer, 
  FaCloud, 
  FaLock, 
  FaDatabase, 
  FaCode, 
  FaTerminal,
  FaRocket,
  FaSitemap,
  FaRegFileCode
} from "react-icons/fa";

function Techstack() {
  const navigate = useNavigate(); // Хук для навигации

  // Функция перехода к отфильтрованным проектам
  const navigateToFilteredProjects = (skill) => {
    // Сохраняем выбранный навык в локальное хранилище
    localStorage.setItem('selectedSkill', skill);
    // Переходим на страницу с проектами
    navigate('/project');
  };

  // Компонент с иконкой и тултипом
  const TechIcon = ({ skill, icon }) => (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-${skill}`}>{skill}</Tooltip>}
    >
      <Col xs={4} md={2} className="tech-icons" onClick={() => navigateToFilteredProjects(skill)}>
        {icon}
      </Col>
    </OverlayTrigger>
  );

  // Только навыки и области знаний (не конкретные инструменты)
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Облачные технологии */}
      <TechIcon skill="Cloud Architecture" icon={<FaCloud />} />
      <TechIcon skill="Infrastructure as Code" icon={<FaRegFileCode />} />
      <TechIcon skill="CI/CD" icon={<FaRocket />} />
      <TechIcon skill="Containerization" icon={<SiDocker />} />
      <TechIcon skill="Kubernetes" icon={<SiKubernetes />} />
      <TechIcon skill="Terraform" icon={<SiTerraform />} />
      <TechIcon skill="Ansible" icon={<SiAnsible />} />
      <TechIcon skill="Microservices" icon={<FaSitemap />} />
      <TechIcon skill="Serverless" icon={<FaCloud />} />
      
      {/* Языки программирования */}
      <TechIcon skill="Python" icon={<DiPython />} />
      <TechIcon skill="Bash" icon={<SiGnubash />} />
      <TechIcon skill="JavaScript" icon={<SiJavascript />} />
      <TechIcon skill="TypeScript" icon={<SiTypescript />} />
      
      {/* Системное администрирование */}
      <TechIcon skill="Linux" icon={<SiLinux />} />
      <TechIcon skill="Networking" icon={<FaNetworkWired />} />
      <TechIcon skill="High Availability" icon={<FaServer />} />
      <TechIcon skill="Version Control" icon={<DiGit />} />
      
      {/* Мониторинг и безопасность */}
      <TechIcon skill="Monitoring" icon={<FaServer />} />
      <TechIcon skill="Security" icon={<FaLock />} />
      
      {/* Базы данных */}
      <TechIcon skill="Databases" icon={<FaDatabase />} />
      <TechIcon skill="SQL" icon={<DiMysql />} />
      <TechIcon skill="NoSQL" icon={<SiMongodb />} />
      
      {/* Веб-разработка */}
      <TechIcon skill="Web Development" icon={<FaCode />} />
      <TechIcon skill="Node.js" icon={<DiNodejs />} />
      <TechIcon skill="React" icon={<SiReact />} />
      <TechIcon skill="API Design" icon={<FaTerminal />} />
    </Row>
  );
}

export default Techstack;