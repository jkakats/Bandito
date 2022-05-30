import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import * as Icon from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup'
import '../custom.scss';

const MusicianMain = () => {

  return (
    <div className="bg-primary App" style={{ marginLeft: 0, marginRight: 0 }}>
      <Navbar sticky="top" bg="secondary" expand="lg" style={{ marginLeft: 0, marginRight: 0}}>
        <Container>
          <Image className='fluid' width="100" height="100" src="images/Logo.png" alt="logo"></Image>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-info" href="/aboutUs" style={{ marginLeft: 0, marginRight: 0, textDecorationLine: 'underline' }}><h1>ABOUT US</h1></Nav.Link>
              <Nav.Link className="text-info" href="/help" style={{ marginLeft: 0, marginRight: 0, textDecorationLine: 'underline' }}><h1>HELP</h1></Nav.Link>
              <Nav.Link className="text-info" href="/" style={{ marginLeft: 0, marginRight: 0, textDecorationLine: 'underline' }}><h1>LOGOUT</h1></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container bg="primary" fluid style={{ paddingLeft: 0, paddingRight: 0}}>
        <Row style={{ marginLeft: 0, marginRight: 0}}>
          <Col className="border border-info" style={{ marginLeft: 0, marginRight: 0}}>
            <Row className="border-bottom border-info" style={{ marginLeft: 0, marginRight: 0}}>
              <h1 className="text-secondary"  style={{ marginTop: "0.5rem"}}>BAND</h1>
            </Row>
            <Row className="border-bottom border-info" style={{ marginLeft: 0, marginRight: 0 }}>
              <div style={{ marginTop: "5rem", marginBottom: "30rem" }}>
                <Button variant="secondary">Band Name</Button>
              </div>
            </Row>
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
              <div style={{ marginTop: "5rem", marginBottom: "4rem" }}>
                <Button variant="secondary">Edit Profile</Button>
              </div>
            </Row>
          </Col>
          <Col className="border border-info" xs={6} style={{ marginLeft: 0, marginRight: 0}}>
            <Row className="border-bottom border-info" style={{ marginLeft: 0, marginRight: 0 }}>
              <Col style={{ marginLeft: 0, marginRight: 0}}>
                <Image className='fluid' width="200" height="200" src="images/profile.jpg" alt="logo" style={{ marginTop: "1rem", marginBottom: "1rem"}}></Image>
              </Col>
              <Col xs={9} style={{ marginLeft: 0, marginRight: 0}}>
                <h1 className="text-light" style={{ marginTop: "1rem", marginBottom: "1rem"}}>username</h1>
                <h3 className="text-light">first name</h3>
                <h3 className="text-light">last name</h3> 
                <h3 className="text-light">address</h3>
              </Col>      
            </Row>
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
              <Table className="text-light fs-2">
                <thead>
                  <tr>
                    <th></th>
                    <th>Instrument</th>
                    <th>Years Of Experience</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Image className='fluid' width="90" height="90" src="images/VoicePic.jpg" alt="logo" style={{ marginTop: "1rem", marginBottom: "1rem"}}></Image></td>
                    <td>Voice</td>
                    <td>7</td>
                    <td>
                      <Button className="d-flex" variant="primary" style={{ padding:0, marginTop: "1rem", marginBottom: "1rem"}}>
                          <Icon.DashCircle className="text-danger fs-2" />
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td><Image className='fluid' width="90" height="90" src="images/GuitarPic.jpg" alt="logo" style={{ marginTop: "1rem", marginBottom: "1rem"}}></Image></td>
                    <td>Guitar</td>
                    <td>5</td>
                    <td>
                      <Button className="d-flex" variant="primary" style={{ padding:0, marginTop: "1rem", marginBottom: "1rem"}}>
                        <Icon.DashCircle className="text-danger fs-2" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div style={{ marginLeft: 0, marginRight: 0}}>
                <Button className="d-flex" variant="primary" style={{ padding:0, marginTop: "1rem", marginBottom: "1rem"}}>
                  <Icon.PlusCircle className="text-secondary fs-2" />
                </Button>
              </div>
              <div style={{ marginLeft: 0, marginRight: 0}}>
                <ListGroup style={{ float:"left", marginTop:"3rem"}}>
                  <ListGroup.Item variant="dark" className="text-info fs-2">Music Genres</ListGroup.Item>
                  <ListGroup.Item variant="dark" className="text-dark fs-4">
                    <p style={{float:"left", marginRight:"5rem"}}>Pop</p>
                    <Button className="d-flex" variant="primary" style={{ padding:0, float:"right"}}>
                      <Icon.DashCircle className="text-danger fs-2" />
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark" className="text-dark fs-4">
                    <p style={{float:"left", marginRight:"5rem"}}>Rock</p>
                    <Button className="d-flex" variant="primary" style={{ padding:0, float:"right"}}>
                      <Icon.DashCircle className="text-danger fs-2" />
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark" className="text-dark fs-4">
                    <p style={{float:"left", marginRight:"5rem"}}>Metal</p>
                    <Button className="d-flex" variant="primary" style={{ padding:0, float:"right"}}>
                      <Icon.DashCircle className="text-danger fs-2" />
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <div style={{ marginLeft: 0, marginRight: 0}}>
                <Button className="d-flex" variant="primary" style={{ padding:0, marginTop: "1rem", marginBottom: "1rem"}}>
                  <Icon.PlusCircle className="text-secondary fs-2" />
                </Button>
              </div>
            </Row>
          </Col>
          <Col className="border border-info" style={{ marginLeft: 0, marginRight: 0}}>
            <h1 className="text-warning" style={{ marginTop: "0.5rem"}}>CHAT</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
  
export default MusicianMain;