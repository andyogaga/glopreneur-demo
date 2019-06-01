import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class SinglePost extends Component {
  render() {
    return (
      <Container >
        <Row style={{ justifyContent: 'center', alignItems: 'center',  marginBottom: 20, marginLeft: 10 }}>
          <Col xs={12} sm={5} style={{width: '100%'}}>
            <img src={this.props.img} alt={this.props.altText} style={{ width: '100%' }} resizeMode='cover' />
          </Col>
          <Col xs={12} sm={7}>
              <Row >
                <h6 style={{ fontSize: 14, color: '#000', textAlign: 'justify' }}>
                  {this.props.title}
                </h6>
              </Row>
              <Row >
                <p style={{ fontSize: 12, color: '#4c4d4b', textAlign: 'justify', textOverflow: 'ellipsis' }} >
                  {this.props.description}
                </p>
              </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SinglePost
