import React from 'react'
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap'
import projects from '../lib/projects'
import ProjectCard from './ProjectCard'
import colorSharp from '../assets/img/color-sharp3.png'

export default function Projetcs() {

  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>
                        I always want to create new projects when I learn new technology for that reason I have coded differents ones like these
                    </p>
                    <Tab.Container id='projects-tabs' defaultActiveKey={'first'}>
                        <Nav variant='pills' defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey={"first"}>Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={"second"}>Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={"third"} >Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey={"first"}>
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                           return(
                                            <ProjectCard key={index} {...project}/>
                                           )
                                        })
                                    }
                                </Row>
                                <></>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp} alt="Back-projects"/>
    </section>
  )
}
