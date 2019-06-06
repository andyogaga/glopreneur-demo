import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class category extends Component {
  render() {
    return (
      <Container fluid={true} style={{backgroundColor: '#337700'}}>
        <Row style={{height: 55, justifyContent: 'center', alignItems: 'center'}}>
          <Col xs='2'>
          <img src={this.props.img} alt={'Logo'} />
          </Col>
          <Col xs='8'>
          <h5 style={{color: '#fff', fontWeight: 'bold'}}>{this.props.txt}</h5>
          </Col>
          <Col xs='2' style={{justifyContent: 'center', alignItems: 'center'}}>
          <img src={require('../../assets/images/arrow-down-white.png')} alt={'Logo'} style={{ height: 20, width: 20, alignSelf: 'center' }} />
          </Col>
        </Row>
      </Container>
    )
  }
}
