import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/img/proj1.png";
import proj2 from "../assets/img/proj2.png";
import proj3 from "../assets/img/proj3.png";
import github from "../assets/img/github.svg";
import eye from "../assets/img/eye.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Website ReactJS",
            description: (
                <a
                    href="https://github.com/bncoanh/web-reactjs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={github} alt="" className="small_img" />
                </a>
            ),
            link: (
                <a
                    href="https://github.com/bncoanh/web-reactjs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={eye} alt="" className="small_img" />
                </a>
            ),
            imgUrl: proj1,
        },
        {
            title: "Web Shopping Assistant",
            description: (
                <a href="https://github.com/bncoanh/WebShopping-assistant" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="" className="small_img" />
                </a>
            ),
            link: (
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={eye} alt="" className="small_img" />
                </a>
            ),
            imgUrl: proj3,
        },
        {
            title: "Shopping Assistant",
            description: (
                <a
                    href="https://github.com/bncoanh/UngDungHotroMuaSamTrucTuyen"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={github} alt="" className="small_img" />
                </a>
            ),
            link: (
                <a
                    href="https://github.com/bncoanh/WebShopping-assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={eye} alt="" className="small_img" />
                </a>
            ),
            imgUrl: proj2,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book.
                                    </p>
                                    <Tab.Container
                                        id="projects-tabs"
                                        defaultActiveKey="first"
                                    >
                                        {/* <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">
                                                    Tab 1
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">
                                                    Tab 2
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">
                                                    Tab 3
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav> */}
                                        <Tab.Content
                                            id="slideInUp"
                                            className={
                                                isVisible
                                                    ? "animate__animated animate__slideInUp"
                                                    : ""
                                            }
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map(
                                                        (project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Cumque quam, quod
                                                    neque provident velit, rem
                                                    explicabo excepturi id illo
                                                    molestiae blanditiis,
                                                    eligendi dicta officiis
                                                    asperiores delectus quasi
                                                    inventore debitis quo.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Cumque quam, quod
                                                    neque provident velit, rem
                                                    explicabo excepturi id illo
                                                    molestiae blanditiis,
                                                    eligendi dicta officiis
                                                    asperiores delectus quasi
                                                    inventore debitis quo.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
};
