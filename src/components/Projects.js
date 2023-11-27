import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import tutor from "../assets/img/tutor.png";
import starr from "../assets/img/starp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import rea from "../assets/img/starRea.png"

export const Projects = () => {

  const projects = [
    {
      title: "HTML/CSS project",
      description: "Design & Development",
      imgUrl: starr,
      githubLink: "https://github.com/AsmaArrak/STARPRINT",
    },
    {
      title: "Tutor App",
      description: "Mobile Development",
      imgUrl: tutor,
      githubLink: "https://drive.google.com/file/d/10w0xTDDMFvftjahZ3ip2UWBjtVNJgXXy/view",
    },
    {
      title: "Reactjs project",
      description: "Design & Development",
      imgUrl: rea,
      githubLink: "https://github.com/AsmaArrak/REACT",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some projects I have worked on. I will hopefully add more soon.<br/>Find them in my Github.</p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Image"></img>
    </section>
  )
}
