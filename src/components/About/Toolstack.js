import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  SiKubernetes,
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiGitlab,
  SiTerraform,
  SiAnsible,
  SiAmazonaws,
  SiMicrosoftazure,
  SiPrometheus,
  SiGrafana,
  // SiElastic,
  SiProxmox,
  SiAzuredevops,
  SiNginx,
  // SiGooglecloud,
  // SiCloudflare,
  // SiCivicrm,
  SiVault,
  SiHelm,
  SiPostman,
  SiSonarqube,
  SiApache,
  // SiCircleci,
  // SiConsul,
  // SiRedis,
  SiGithub,
  SiBitbucket,
} from "react-icons/si";

import {
  DiGoogleCloudPlatform,
} from "react-icons/di";

import { FaGitlab } from "react-icons/fa";

function Toolstack() {
  const navigate = useNavigate(); // Хук для навигации

  // Функция перехода к отфильтрованным проектам
  const navigateToFilteredProjects = (skill) => {
    // Сохраняем выбранный навык в локальное хранилище
    localStorage.setItem('selectedSkill', skill);
    // Переходим на страницу с проектами
    navigate('/project');
  };

  // Компонент с иконкой и тултипом
  const ToolIcon = ({ skill, icon }) => (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-${skill}`}>{skill}</Tooltip>}
    >
      <Col xs={4} md={2} className="tech-icons" onClick={() => navigateToFilteredProjects(skill)}>
        {icon}
      </Col>
    </OverlayTrigger>
  );

  // Только инструменты DevOps (конкретные программы и платформы)
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Облачные платформы */}
      <ToolIcon skill="AWS" icon={<SiAmazonaws />} />
      <ToolIcon skill="Azure" icon={<SiMicrosoftazure />} />
      <ToolIcon skill="GCP" icon={<DiGoogleCloudPlatform />} />
      
      {/* CI/CD инструменты */}
      <ToolIcon skill="Jenkins" icon={<SiJenkins />} />
      <ToolIcon skill="GitHub Actions" icon={<SiGithubactions />} />
      <ToolIcon skill="GitLab CI" icon={<FaGitlab />} />
      <ToolIcon skill="Azure DevOps" icon={<SiAzuredevops />} />
      {/* <ToolIcon skill="CircleCI" icon={<SiCircleci />} /> */}
      
      {/* IaC инструменты */}
      <ToolIcon skill="Terraform" icon={<SiTerraform />} />
      <ToolIcon skill="Ansible" icon={<SiAnsible />} />

      {/* Контейнеризация */}
      <ToolIcon skill="Docker" icon={<SiDocker />} />
      <ToolIcon skill="Kubernetes" icon={<SiKubernetes />} />
      <ToolIcon skill="Helm" icon={<SiHelm />} />
      
      {/* Мониторинг */}
      <ToolIcon skill="Prometheus" icon={<SiPrometheus />} />
      <ToolIcon skill="Grafana" icon={<SiGrafana />} />
      {/* <ToolIcon skill="Elastic" icon={<SiElastic />} /> */}
      
      {/* Безопасность */}
      <ToolIcon skill="Vault" icon={<SiVault />} />
      {/* <ToolIcon skill="Consul" icon={<SiConsul />} /> */}
      <ToolIcon skill="SonarQube" icon={<SiSonarqube />} />
      
      {/* Контроль версий */}
      <ToolIcon skill="GitHub" icon={<SiGithub />} />
      <ToolIcon skill="GitLab" icon={<SiGitlab />} />
      <ToolIcon skill="BitBucket" icon={<SiBitbucket />} />
      
      {/* Базы данных и хранилища */}
      {/* <ToolIcon skill="Redis" icon={<SiRedis />} /> */}
      
      {/* Инфраструктура */}
      <ToolIcon skill="Nginx" icon={<SiNginx />} />
      <ToolIcon skill="Apache" icon={<SiApache />} />
      <ToolIcon skill="Proxmox" icon={<SiProxmox />} />
      
      {/* Тестирование API */}
      <ToolIcon skill="Postman" icon={<SiPostman />} />
    </Row>
  );
}

export default Toolstack;