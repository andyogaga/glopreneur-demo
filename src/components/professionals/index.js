import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './professionals.css';
import '../../assets/utils/typography.css'

class Professionals extends Component {
  render() {
    return (
      <Container fluid={true}>
        <div className={'background'} style={{ height: 450, width: '100%' }}>
          <Row style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Col xs={1} md={2}></Col>
            <Col xs={10} md={8} style={{ alignSelf: 'center' }}>
              <h1 style={{ alignSelf: 'center', textAlign: 'center', marginTop: 20, color: '#fff' }}>Hire <strong style={{ fontWeight: 500 }}>Trusted Professionals</strong> for your Business, Office and Home Services</h1>
              <Row style={{marginTop: 60}}>
                <Col xs={12} md={5}>
                  <Button style={{ width: '60%', backgroundColor: '#337700', borderRadius: 0, alignSelf: 'flex-start', marginLeft: 15, fontWeight: 'bold' }}>Hire a Pro</Button>
                </Col>
                <Col xs={1} md={2}></Col>
                <Col xs={12} md={5}>
                  <Button style={{ width: '60%', backgroundColor: 'transparent', borderRadius: 0, alignSelf: 'flex-start', marginLeft: 15, borderWidth: 2, borderColor: '#fff', fontWeight: 'bold' }}>Become a Pro</Button>
                </Col>

              </Row>
            </Col>
            <Col xs={1} md={2}></Col>
          </Row>

        </div>
      </Container>
    )
  }
}

export default Professionals;
