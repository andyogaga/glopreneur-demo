import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class category extends Component {
  render() {
    return (
      <Container fluid={true} style={{backgroundColor: '#337700'}}>
        <Row style={{height: 55, justifyContent: 'center', alignItems: 'center'}}>
          <Col xs='3'>
          <img src={this.props.img} alt={'Logo'} />
          </Col>
          <Col xs='9'>
          <h5 style={{color: '#fff'}}>{this.props.txt}</h5>
          </Col>
        </Row>
      </Container>
    )
  }
}
