import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
