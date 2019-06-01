import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/utils/typography.css';

class Footer extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row style={{marginTop: 30, marginBottom: 30}} >
          <Col md={1}></Col>
          <Col >
          <h4 style={{ textAlign: 'justify', fontWeight: 'bold', color: '#337700' }}>Gloprenuer</h4>
          <p style={{ textAlign: 'justify', color: '#737571',  marginBottom: 5 }}>About Gloprenuer</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>The Glo Marketplace</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>SME Hub</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>Knowledge Hub</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>Business Xchange</p>
          </Col>
          <Col >
          <h4 style={{ textAlign: 'justify', fontWeight: 'bold', color: '#337700' }}>The Glo Marketplace</h4>
          <p style={{ textAlign: 'justify', color: '#737571',  marginBottom: 5 }}>Sell on the Marketplace</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>How to Shop</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>Shipping & Delivery</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>Privacy Policy </p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>Buyer’s Protection</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>Terms and Conditions</p>
          </Col>
          <Col >
          <h4 style={{ textAlign: 'justify', fontWeight: 'bold', color: '#337700' }}>Knowledge Hub</h4>
          <p style={{ textAlign: 'justify', color: '#737571',  marginBottom: 5 }}>Blog</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>Forums</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>Subscribe to Newsletter</p>
          </Col>
          <Col >
          <h4 style={{ textAlign: 'justify', fontWeight: 'bold', color: '#337700' }}>Globacom</h4>
          <p style={{ textAlign: 'justify', color: '#737571',  marginBottom: 5 }}>GloWorld</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 18}}>Contact Us</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>Globacom Limited,</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>Mike Adenuga Towers, </p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>1, Mike Adenuga Close, </p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>Off Adeola Odeku Street, </p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 18}}>Victoria Island, Lagos. Nigeria. </p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>+2348050020121</p>
          <p style={{ textAlign: 'justify', color: '#737571', marginBottom: 5}}>+2348050020200</p>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    )
  }
}

export default Footer;
