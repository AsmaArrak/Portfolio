import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import tutor from "../assets/img/tutor.png";
import starr from "../assets/img/starp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import rea from "../assets/img/starRea.png"
import prepa from "../assets/img/ipeim.jpg";
import poly from "../assets/img/poly.jpg";
import alfa from "../assets/img/alfa.jpg"
import run from "../assets/img/run.png"
import spring from "../assets/img/spring.png"
import weather from "../assets/img/weather.png"
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
      title: " microservice",
      description: "user and weather microservices",
      imgUrl: weather,
      githubLink: "https://github.com/AsmaArrak/Microservices-",
    },
    {
      title: "Reactjs project",
      description: "Design & Development",
      imgUrl: rea,
      githubLink: "https://github.com/AsmaArrak/REACT",
    },
    {
      title: "Spring Boot",
      description: "Product management",
      imgUrl: spring,
      githubLink: "https://github.com/AsmaArrak/SpringBoot",
    },

  ];


  const educationInfo = [

    {
      title: "Ecole Polytechnique de Sousse ",
      description: 'Pre Engineering Degree',
      imgUrl: poly,
      githubLink: "https://www.polytecsousse.tn",

    },
    {
      title: "Monastir Preparatory Engineering Institute ",
      description: 'Engineering Degree',
      imgUrl: prepa,
      githubLink: "https://ipeim.rnu.tn",
    }

  ];


  const Stage = [

    {
      title: "Internship At Run-It ",
      description: '',
      imgUrl: run,
      githubLink: "https://www.run-it.tn",

    },
    {
      title: "Internship At Alfa Computers ",
      description: '',
      imgUrl: alfa,
      githubLink: "https://alfacomputers.tn",
    }

  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  <p>Here are some projects I have worked on, my Studies,<br />and my internships.</p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Studies</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
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


                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            educationInfo.map((education, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...education}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>



                      <Tab.Pane eventKey="third">
                          <Row>

                          {
                            Stage.map((stage, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...stage}
                                />
                              )
                            })
                          }
                          </Row>
                      


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
