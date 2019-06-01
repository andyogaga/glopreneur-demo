import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';

class Smehub extends Component {
  render() {
    return (
      <Container >
        <Row >
          <Col>
            <div style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
              <h3 style={{ alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', }}>SME Hub</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={7}>
            <img src={require('../../assets/images/Network.png')} alt={'Business Partners'} width={'100%'} />
          </Col>
          <Col style={{ alignSelf: 'center'}}>
            <div style={{ }} >
              <h4 style={{ alignSelf: 'center', textAlign: 'justify', fontWeight: 'bold', color: '#7c7c7c', marginBottom: 20 }}>Join the Hub</h4>
              <h5 style={{ alignSelf: 'center', textAlign: 'left', marginTop: 20, color: '#7c7c7c', marginBottom: 20, fontWeight: 300 }}>Fastest growing network of Entreprenuers in Nigeria</h5>
              <h5 style={{ alignSelf: 'center', textAlign: 'left', marginTop: 20, color: '#7c7c7c', marginBottom: 20, fontWeight: 300 }}>Expert Advice from Industry Leaders</h5>
              <h5 style={{ alignSelf: 'center', textAlign: 'left', marginTop: 20, color: '#7c7c7c', marginBottom: 20, fontWeight: 300 }}>Engaging Forums</h5>
              <h5 style={{ alignSelf: 'center', textAlign: 'left', marginTop: 20, color: '#7c7c7c', marginBottom: 20, fontWeight: 300 }}>Live Webinars and Events</h5>
              <Row>
                <Button style={{ width: '30%', backgroundColor: '#337700', borderRadius: 0, alignSelf: 'flex-start', marginLeft: 15 }}>Learn More</Button>
              </Row>
              
            </div>

          </Col>
        </Row>
      </Container>
    )
  }
}

export default Smehub



