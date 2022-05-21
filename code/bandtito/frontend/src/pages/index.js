import { Component } from 'react';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import '../custom.scss';

async function checkLogIn(){

  var myHeaders = new Headers()
    myHeaders.append("Accept", "*/*")
    myHeaders.append("Content-type", "application/json")

    var requestOptions = {
        method: 'POST',
        mode : 'cors',
        headers: myHeaders,
        body: JSON.stringify({
            "username": document.getElementById("formUsername").value,
            "password": document.getElementById("formBasicPassword").value,
        })
    };

  fetch("http://localhost:9090/log-in", requestOptions)
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');

        if(response.status == 202){
          alert("Corect credentials")
        }
        else{
            alert("Wrong credentials")
        }
  })
}

function ModalLogIn(props) {

  const login = () => checkLogIn();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-primary">
        <Modal.Title id="contained-modal-title-vcenter" className="bg-primary text-light">
          Enter Credentials
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-primary">
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label className="text-light">Username</Form.Label>
            <Form.Control type="Username" placeholder="Username" className="bg-primary text-light"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="bg-primary text-light"/>
          </Form.Group>
          <Button variant="secondary" type="submit" onClick={login}>
            Log In
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

async function find(){
/*
  console.log("hi")

  var myHeaders = new Headers()
    *///myHeaders.append("Accept", "*/*")
    /*myHeaders.append("Content-type", "application/json")

    var requestOptions = {
        method: 'POST',
        mode : 'cors',
        headers: myHeaders,
        body: JSON.stringify({
            "username": document.getElementById("formUsername").value
        })
    };

  fetch("http://localhost:9090/log-in", requestOptions)
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');

        if(response.status == 302){
          alert("User already exists")
        }
        else  if(isMusician){
          
        }
        else{

        }
  })*/
}
/*
function ModalRegisterMusitican(props) {

  const register = () => registerMusician();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-primary">
        <Modal.Title id="contained-modal-title-vcenter" className="bg-primary text-light">
          Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-primary">
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label className="text-light">Enter username</Form.Label>
            <Form.Control type="Username" placeholder="Username" className="bg-primary text-light"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="bg-primary text-light"/>
          </Form.Group>
          <Button variant="secondary" type="submit" onClick={register}>
            Next
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function ModalRegisterEmployer(props) {

  const register = () => registerEmployer();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-primary">
        <Modal.Title id="contained-modal-title-vcenter" className="bg-primary text-light">
          Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-primary">
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label className="text-light">Enter username</Form.Label>
            <Form.Control type="Username" placeholder="Username" className="bg-primary text-light"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="bg-primary text-light"/>
          </Form.Group>
          <Button variant="secondary" type="submit" onClick={register}>
            Next
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}


*/


const Home = () => {

  const [modalShowL, setModalShowL] = React.useState(false);
  const [modalShowRM, setModalShowRM] = React.useState(false);
  const [modalShowRE, setModalShowRE] = React.useState(false);

/*
  return (
    <div className="bg-primary App">
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0}}>
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Image className='fluid' width="1000" height="972" src="images/IndexBackround.jpg" alt="logo"></Image>
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h1 className="text-warning" style={{ marginTop: "2rem", marginBottom: "8rem"}}>MUSIC BRINGS US TOGETHER</h1>
          <h2 className="text-light">JOIN US TODAY</h2>
          <Button variant="secondary" style={{ marginTop: "2rem", marginBottom: "2rem"}} onClick={() => setModalShowRM(true)}>I AM A MUSICIAN</Button>{' '}
          <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Button variant="secondary" style={{ marginTop: "2rem", marginBottom: "7rem"}} onClick={() => setModalShowRE(true)}>I AM LOOKING FOR BANDS TO HIRE</Button>{' '}
          </Col>
          <h2 className="text-light">ALREADY A MEMBER ?</h2>
          <Button variant="secondary" style={{ marginTop: "2rem", marginBottom: "13rem"}} onClick={() => setModalShowL(true)}>LOG IN</Button>{' '}
          <Container fluid style={{ paddingLeft: 0, paddingRight: 0}}>
            <Row style={{ marginLeft: 0, marginRight: 0 }}>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                <a className="link-danger" href="/aboutus">ABOUT US</a>
              </Col>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                <a className="link-danger" href="/help">HELP</a>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>

    <ModalLogIn
        show={modalShowL}
        onHide={() => setModalShowL(false)}
      />

    <ModalRegisterMusitican
        show={modalShowRM}
        onHide={() => setModalShowRM(false)}
      />

    <ModalRegisterEmployer
        show={modalShowRE}
        onHide={() => setModalShowRE(false)}
      />

    <footer style={{ position: "fixed", width: "100%" }} className="bg-secondary text-light"><p>Contact : bandito@gmail.com</p></footer>
  </div>
  );*/
};

  
export default Home;