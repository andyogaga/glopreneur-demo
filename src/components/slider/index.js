import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../../assets/utils/typography.css'

class Slider extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Col md='1'></Col>
          <Col xs='12' md='4' style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{alignSelf: 'center'}}>
              <h2>BE THE <strong style={{ fontWeight: 700, color: '#337700' }}>GRANDMASTER</strong> </h2>
              <h2>OF YOUR BUSINESS </h2>
              <h5>with the glopreneur platform for SMEs</h5>
            </div>
          </Col>
          <Col xs='12' md='7' style={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}>
            <img src={require('../../assets/images/bizPartners.png')} alt={'Business Partners'} width={'100%'} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Slider;
