import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useTranslation } from 'react-i18next';

// Import images
import phbt from "../../Assets/Projects/phbt.png";
import calc from "../../Assets/Projects/calc.png";
import nginx from "../../Assets/Projects/nginx.png";
import chess from "../../Assets/Projects/chess.png";
import dockercompose from "../../Assets/Projects/dockercompose.png";
import fakestore from "../../Assets/Projects/fakestore.png";
import foxtar from "../../Assets/Projects/foxtar.png";
import git from "../../Assets/Projects/git.png";
import jenkins from "../../Assets/Projects/jenkins.png";
import jira from "../../Assets/Projects/jira.png";
import landing from "../../Assets/Projects/landing.png";
import proxmox from "../../Assets/Projects/proxmox.png";

import gke from "../../Assets/Projects/gke.png";
import mach from "../../Assets/Projects/mach.png";
import mirroring from "../../Assets/Projects/mirroring.png";
// import canary from "../../Assets/Projects/canary.png";
import logicapp from "../../Assets/Projects/logicapp.png";
import monitoring from "../../Assets/Projects/monitoring.png";
import cicd from "../../Assets/Projects/cicd.png";
import gcpkube from "../../Assets/Projects/gcpkube.png";
import marathon from "../../Assets/Projects/marathon.png";
import lambda from "../../Assets/Projects/lambda.png";
import azure from "../../Assets/Projects/azure.png";

// DevOps categories with their respective skills
const CATEGORIES = {
  category_cloud_engineering: [
    "AWS", "Azure", "GCP",
    "Cloud Architecture",
    "Cost Optimization",
    "Cloud Security",
    "Serverless"
  ],
  
  category_containerization: [
    "Kubernetes", "GKE",
    "Docker", "Docker Compose",
    "Microservices",
    "Container Security",
    "Service Mesh"
  ],

  category_automation_cicd: [
    "Jenkins", "GitHub Actions",
    "Azure DevOps", "GitLab CI",
    "CI/CD", "Pipeline Automation",
    "Commercetools"
  ],

  category_infrastructure: [
    "Terraform", "Ansible",
    "Infrastructure as Code",
    "Networking",
    "Load Balancing",
    "High Availability",
    "Proxmox"
  ],

  category_monitoring_reliability: [
    "Prometheus", "Grafana",
    "Zabbix", "Monitoring",
    "Incident Response",
    "SLA Management",
    "Performance"
  ],

  category_security: [
    "IAM", "Security Groups",
    "SSL/TLS", "VPN",
    "IAP", "Compliance",
    "Access Management"
  ]
};

function Projects() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const projectTypes = ['all', 'project', 'task'];

  // Projects data moved inside the component
  const ITEMS_DATA = [
    {
      type: 'project',
      imgPath: azure,
      title: t('project_apim_title'),
      description: t('project_apim_description'),
      skills: [
        "Azure",
        "Cloud Architecture",
        "High Availability",
        "Infrastructure as Code",
        "Terraform",
        "Cost Optimization"
      ],
      ghLink: "https://github.com/ASKoshelenko/apim/tree/main#readme",
    },
    {
      type: 'project',
      imgPath: gke,
      title: t('project_gke_migration_title'),
      description: t('project_gke_migration_description'),
      skills: [
        "GCP",
        "Cloud Architecture",
        "Cost Optimization",
        "Kubernetes",
        "Container Security",
        "Microservices"
      ],
      ghLink: "https://github.com/ASKoshelenko/devopsdive/blob/feature/project_reworking/devopsdive/GKE%20Migration%20Project.md",
    },
    {
      type: 'project',
      imgPath: azure,
      title: t('project_azure_infrastructure_title'),
      description: t('project_azure_infrastructure_description'),
      skills: [
        "Azure",
        "Cloud Architecture",
        "High Availability",
        "Infrastructure as Code",
        "Terraform",
        "Cost Optimization"
      ],
      ghLink: "https://github.com/ASKoshelenko/devopsdive/blob/feature/project_reworking/devopsdive/Azure%20Infrastructure%20Project.md",
    },
    {
      type: 'project',
      imgPath: lambda,
      title: t('project_aws_lambda_title'),
      description: t('project_aws_lambda_description'),
      skills: [
        "AWS",
        "Serverless",
        "Cloud Architecture",
        "Cost Optimization",
        "High Availability",
        "Security"
      ],
      ghLink: "https://github.com/ASKoshelenko/devopsdive/blob/feature/project_reworking/devopsdive/AWS%20Lambda%20Migration%20%26%20Security%20Enhancement.md",
    },
    {
      type: 'project',
      imgPath: marathon,
      title: t('project_terraform_infrastructure_title'),
      description: t('project_terraform_infrastructure_description'),
      skills: [
        "Infrastructure as Code",
        "Terraform",
        "High Availability",
        "Cloud Architecture",
        "Networking",
        "Security"
      ],
      ghLink: "https://github.com/ASKoshelenko/devopsdive/blob/feature/project_reworking/devopsdive/IT%20Marathon.md",
    },
    {
      type: 'project',
      imgPath: proxmox,
      title: t('project_proxmox_title'),
      description: t('project_proxmox_description'),
      skills: [
        "Infrastructure as Code",
        "High Availability",
        "Virtualization",
        "Networking",
        "Proxmox",
        "Load Balancing"
      ],
      ghLink: "",
    },
  
    // Containerization Projects
    {
      type: 'project',
      imgPath: gcpkube,
      title: t('project_gcp_kubernetes_title'),
      description: t('project_gcp_kubernetes_description'),
      skills: [
        "Kubernetes",
        "GKE",
        "Container Security",
        "Service Mesh",
        "Docker",
        "Microservices"
      ],
      ghLink: "https://github.com/ASKoshelenko/devopsdive/blob/feature/project_reworking/devopsdive/GCP%20Kubernetes%20Infrastructure%20Project.md",
    },
    {
      type: 'project',
      imgPath: dockercompose,
      title: t('project_docker_compose_title'),
      description: t('project_docker_compose_description'),
      skills: [
        "Docker",
        "Docker Compose",
        "Container Security",
        "Microservices",
        "Service Mesh",
        "Container Registry"
      ],
      ghLink: "",
    },
  
    // Automation & CI/CD Projects
    {
      type: 'project',
      imgPath: cicd,
      title: t('project_bosch_cicd_title'),
      description: t('project_bosch_cicd_description'),
      skills: [
        "Jenkins",
        "Azure DevOps",
        "Pipeline Automation",
        "CI/CD",
        "GitHub Actions",
        "GitLab CI"
      ],
      ghLink: "https://github.com/ASKoshelenko/devopsdive/blob/feature/project_reworking/devopsdive/Enterprise%20E-Commerce%20CICD%20Pipeline.md",
    },
    {
      type: 'project',
      imgPath: jenkins,
      title: t('project_jenkins_title'),
      description: t('project_jenkins_description'),
      skills: [
        "Jenkins",
        "Pipeline Automation",
        "CI/CD",
        "Docker",
        "GitLab CI",
        "GitHub Actions"
      ],
      ghLink: "",
    },
  {
    type: 'project',
    imgPath: nginx,
    title: t('project_nginx_title'),
    description: t('project_nginx_description'),
    skills: [
      "SSL/TLS",
      "Security Groups",
      "Access Management",
      "Networking",
      "High Availability",
      "Load Balancing"
    ],
    ghLink: "https://github.com/ASKoshelenko/devopsdive/blob/feature/project_reworking/devopsdive/Nginx%20Configuration%20and%20SSL%20Implementation.md",
  },

  // Monitoring & Reliability Projects
  {
    type: 'project',
    imgPath: monitoring,
    title: t('project_monitoring_platform_title'),
    description: t('project_monitoring_platform_description'),
    skills: [
      "Prometheus",
      "Grafana",
      "Incident Response",
      "SLA Management",
      "Performance",
      "Alerting"
    ],
    ghLink: "https://github.com/ASKoshelenko/devopsdive/blob/feature/project_reworking/devopsdive/Enterprise%20Monitoring%20Solution%20Project.md",
  },

  // Cloud Services & Integration Projects
  {
    type: 'project',
    imgPath: logicapp,
    title: t('project_commercetools_backup_title'),
    description: t('project_commercetools_backup_description'),
    skills: [
      "Azure",
      "Azure Logic Apps",
      "Cloud Architecture",
      "Azure Storage",
      "High Availability",
      "Azure Monitor"
    ],
    ghLink: "https://github.com/ASKoshelenko/devopsdive/blob/feature/project_reworking/devopsdive/Commercetools%20Data%20Backup%20Solution.md",
  },
  // Git & Version Control Projects
  {
    type: 'project',
    imgPath: mirroring,
    title: t('project_git_mirror_title'),
    description: t('project_git_mirror_description'),
    skills: [
      "GitLab CI",
      "Pipeline Automation",
      "CI/CD",
      "Security",
      "Access Management",
      "High Availability"
    ],
    ghLink: "https://github.com/ASKoshelenko/devopsdive/blob/feature/project_reworking/devopsdive/Cross-Platform%20Git%20Synchronization%20Solution.md",
  },
  {
    type: 'project',
    imgPath: git,
    title: t('project_git_optimization_title'),
    description: t('project_git_optimization_description'),
    skills: [
      "Git",
      "GitLab",
      "BitBucket",
      "CI/CD",
      "Pipeline Automation",
      "Access Management"
    ],
    ghLink: "",
  },
  // MACH & Modern Architecture Projects
  {
    type: 'project',
    imgPath: mach,
    title: t('project_mach_deployment_title'),
    description: t('project_mach_deployment_description'),
    skills: [
      "Microservices",
      "Cloud Native",
      "GitHub Actions",
      "Pipeline Automation",
      "Infrastructure as Code",
      "Service Mesh"
    ],
    ghLink: "https://github.com/ASKoshelenko/devopsdive/blob/feature/project_reworking/devopsdive/MACH%20Composer%20Automation%20Platform.md",
  },

  // Web Development Projects (если они нужны в портфолио)
  {
    type: 'project',
    imgPath: phbt,
    title: t('project_phbt_title'),
    description: t('project_phbt_description'),
    skills: ["React", "Firebase", "JavaScript", "CSS"],
    ghLink: "https://github.com/ASKoshelenko/phbt",
    demoLink: "https://crm-phbt.web.app/",
  },
  {
    type: 'project',
    imgPath: jira,
    title: t('project_jira_title'),
    description: t('project_jira_description'),
    skills: ["React", "Firebase", "JavaScript", "CSS"],
    ghLink: "",
  },
  {
    type: 'project',
    imgPath: landing,
    title: t('project_landing_title'),
    description: t('project_landing_description'),
    skills: ["HTML", "CSS", "JavaScript"],
    ghLink: "https://github.com/ASKoshelenko/Landing-page#readme",
  },
  {
    type: 'project',
    imgPath: foxtar,
    title: t('project_multipage_title'),
    description: t('project_multipage_description'),
    skills: ["React", "Redux", "Node.js", "MongoDB"],
    ghLink: "https://github.com/ASKoshelenko/Project-Store#readme",
  },
  {
    type: 'project',
    imgPath: calc,
    title: t('project_calculator_title'),
    description: t('project_calculator_description'),
    skills: ["JavaScript", "HTML", "CSS"],
    ghLink: "https://github.com/ASKoshelenko/calculator",
  },
  {
    type: 'project',
    imgPath: chess,
    title: t('project_chess_title'),
    description: t('project_chess_description'),
    skills: ["React", "TypeScript"],
    ghLink: "https://github.com/ASKoshelenko/chess#readme",
  },
  {
    type: 'project',
    imgPath: fakestore,
    title: t('project_fakestore_title'),
    description: t('project_fakestore_description'),
    skills: ["React", "REST API"],
    ghLink: "https://github.com/ASKoshelenko/fakeStoreAPI#readme",
  },
  {
    type: 'project',
    imgPath: git,
    title: t('project_searchapp_title'),
    description: t('project_searchapp_description'),
    skills: ["React", "REST API", "GitHub API"],
    ghLink: "https://github.com/ASKoshelenko/react_githubSearch#readme",
  }
];

  const hasSkillsFromCategory = (projectSkills, category) => {
    return projectSkills.some(skill => CATEGORIES[category]?.includes(skill));
  };

  const filteredItems = useMemo(() => {
    return ITEMS_DATA.filter(item => {
      const matchesType = selectedType === 'all' || item.type === selectedType;
      const matchesCategory = !selectedCategory || hasSkillsFromCategory(item.skills, selectedCategory);
      const matchesSkill = !selectedSkill || item.skills.includes(selectedSkill);
      
      return matchesType && matchesCategory && matchesSkill;
    });
  }, [selectedType, selectedCategory, selectedSkill]);

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setSelectedSkill(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSelectedSkill(null);
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
    setSelectedCategory(null);
  };

  const handleReset = () => {
    setSelectedType('all');
    setSelectedCategory(null);
    setSelectedSkill(null);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('projects_my_recent_works')}
        </h1>

        {/* Main filters */}
        {/* <div className="main-filters">
          {projectTypes.map((type) => (
            <Button
              key={type}
              onClick={() => handleTypeClick(type)}
              className={`btn ${selectedType === type ? 'active' : ''}`}
            >
              {type === 'all' ? t('all') : t(`type_${type}`)}
            </Button>
          ))}
        </div> */}

        {/* Category filters */}
        <div className="category-filters">
          {Object.keys(CATEGORIES).map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {t(category)}
            </Button>
          ))}
        </div>

        {/* Active filters */}
        {(selectedType !== 'all' || selectedCategory || selectedSkill) && (
          <div className="active-filters">
            <span className="active-filters-label">{t('active_filters')}:</span>
            {selectedType !== 'all' && (
              <span className="filter-tag">{t(`type_${selectedType}`)}</span>
            )}
            {selectedCategory && (
              <span className="filter-tag">{t(selectedCategory)}</span>
            )}
            {selectedSkill && (
              <span className="filter-tag">{selectedSkill}</span>
            )}
            <Button
              variant="link"
              className="clear-filters"
              onClick={handleReset}
            >
              {t('clear_all')}
            </Button>
          </div>
        )}

        {/* Results count */}
        <div className="results-count">
          {t('showing_results', { count: filteredItems.length })}
        </div>

        {/* Projects grid */}
        <Row className="project-cards-container">
          {filteredItems.map((item, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                {...item}
                isBlog={false}
                onSkillClick={handleSkillClick}
                activeSkill={selectedSkill}
              />
            </Col>
          ))}
        </Row>

        {/* No results message */}
        {filteredItems.length === 0 && (
          <div className="no-results">
            <h3>{t('no_results')}</h3>
            <p>{t('try_different_filters')}</p>
            <Button 
              className="reset-button"
              onClick={handleReset}
            >
              {t('reset_all_filters')}
            </Button>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Projects;
