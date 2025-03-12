import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ 
  imgPath, 
  title, 
  description, 
  ghLink, 
  demoLink, 
  isBlog, 
  skills = [], 
  // type,
  onSkillClick,
  activeSkill
}) {
  return (
    <Card className="project-card-view h-100">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        {/* <div className="mb-2">
          <Badge bg={type === 'project' ? 'primary' : 'secondary'}>
            {type === 'project' ? 'Project' : 'Task'}
          </Badge>
        </div> */}
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <div className="mt-2 mb-3">
          {skills.map((skill) => (
            <Button
              key={skill}
              variant={activeSkill === skill ? "primary" : "outline-primary"}
              size="sm"
              className="me-1 mb-1 skill-button"
              onClick={() => onSkillClick(skill)}
            >
              {skill}
            </Button>
          ))}
        </div>
        <div className="mt-auto">
          {ghLink && (
            <Button variant="primary" href={ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;