import React from "react";
import { Col, Row } from "react-bootstrap";
import gcpBadge from "../../Assets/achievements/gcp.png";
import epam from "../../Assets/achievements/EPAM.png";
import cyberThreatBadge from "../../Assets/achievements/sm_cyber-threat-management.png";
import endpointSecurityBadge from "../../Assets/achievements/sm_endpoint-security.png";
import ethicalHackerBadge from "../../Assets/achievements/sm_ethical-hacker.png";
import juniorCybersecurityBadge from "../../Assets/achievements/sm_junior-cybersecurity-analyst-career-path.png";
import networkDefenseBadge from "../../Assets/achievements/sm_network-defense.png";
import networkTechnicianBadge from "../../Assets/achievements/sm_network-technician-career-path.png";
import az104 from "../../Assets/achievements/az104.svg";
import az900 from "../../Assets/achievements/az900.svg";
import aws_cloud_practitioner from "../../Assets/achievements/aws_cloud_practitioner.png";
import aws_serverless from "../../Assets/achievements/aws_serverless.png";
import skillbadgestar from "../../Assets/achievements/skill_badge_star.png";

function Achievements() {
  return (
     <Row className="achievements-block" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://google.accredible.com/63bc83c7-01dd-40f5-a26c-16ad53126920#gs.23goji" target="_blank" rel="noopener noreferrer">
          <img src={gcpBadge} alt="GCP Badge" className="achievements-img" style={{ width: "100px", height: "100px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://learn.microsoft.com/api/credentials/share/en-us/OleksiiKoshelenko-1674/84CDA001BB6A0E59?sharingId=15650193FBDF3232" target="_blank" rel="noopener noreferrer">
          <img src={az104} alt="AZURE 104 Badge" className="achievements-img" style={{ width: "100px", height: "100px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://learn.microsoft.com/api/credentials/share/en-us/OleksiiKoshelenko-1674/44261143F087A812?sharingId=15650193FBDF3232" target="_blank" rel="noopener noreferrer">
          <img src={az900} alt="AZURE 900 Badge" className="achievements-img" style={{ width: "100px", height: "100px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://www.credly.com/badges/0c164a60-27f4-4156-a5f7-81eb5eefa0dd/public_url" target="_blank" rel="noopener noreferrer">
          <img src={aws_cloud_practitioner} alt="AWS Cloud Practitioner" className="achievements-img" style={{ width: "100px", height: "100px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://www.credly.com/badges/7ac93d73-12d7-42ba-b867-595266d97f91/public_url" target="_blank" rel="noopener noreferrer">
          <img src={aws_serverless} alt="AWS Serverless" className="achievements-img" style={{ width: "100px", height: "100px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://www.credly.com/users/alex-koshelenko" target="_blank" rel="noopener noreferrer">
          <img src={skillbadgestar} alt="Skill badge star" className="achievements-img" style={{ width: "100px", height: "100px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://www.credly.com/badges/ecb3b494-fbe7-4ece-9e7c-97ba7bcef596" target="_blank" rel="noopener noreferrer">
          <img src={ethicalHackerBadge} alt="Ethical Hacker Badge" className="achievements-img" style={{ width: "100px", height: "100px" }}/>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://www.credly.com/badges/616b03c4-1498-4202-89f6-f05d5f7dcb03" target="_blank" rel="noopener noreferrer">
          <img src={networkDefenseBadge} alt="Network Defense Badge" className="achievements-img" style={{ width: "100px", height: "100px" }}/>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://www.credly.com/badges/8391f0a4-a945-4ee4-9688-eb07ec0a2ac1" target="_blank" rel="noopener noreferrer">
          <img src={cyberThreatBadge} alt="Cyber Threat Management Badge" className="achievements-img" style={{ width: "100px", height: "100px" }}/>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://www.credly.com/badges/79565c4d-dfcb-4efb-a416-d07cbeb43d9f" target="_blank" rel="noopener noreferrer">
          <img src={juniorCybersecurityBadge} alt="Junior Cybersecurity Analyst Career Path Badge" className="achievements-img" style={{ width: "100px", height: "100px" }}/>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://www.credly.com/badges/8edec4aa-9657-49ea-931f-90283d72b226" target="_blank" rel="noopener noreferrer">
          <img src={endpointSecurityBadge} alt="Endpoint Security Badge" className="achievements-img" style={{ width: "100px", height: "100px" }}/>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://www.credly.com/badges/9df01def-6b9b-4bc2-90e1-816a9dc4b1b2" target="_blank" rel="noopener noreferrer">
          <img src={networkTechnicianBadge} alt="Network Technician Career Path Badge" className="achievements-img" style={{ width: "100px", height: "100px" }}/>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons achievements-icon">
        <a href="https://certificates.epam.com/certificates/3419ea71-a724-4ecc-b00b-50469996fef4" target="_blank" rel="noopener noreferrer">
          <img src={epam} alt="EPAM" className="achievements-img" style={{ width: "100px", height: "100px" }}/>
        </a>
      </Col>
    </Row>
  );
}

export default Achievements;
