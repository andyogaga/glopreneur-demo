import React, { Component } from 'react'
import Header from '../components/header';
import Slider from '../components/slider';
import Category from '../components/category/category';
import MarketPlace from '../components/marketplaceSlider';
import { Container, Row, Col } from 'reactstrap';
import PostsRow from '../components/posts';
import Smehub from '../components/smehub/smehub';
import Professionals from '../components/professionals'
import Footer from '../components/footer';

export class Demo1 extends Component {
  constructor(props){
    super(props);
    this.state={
      // marketPlaceImage: require('')
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Slider />
        <Container fluid={true} >
          <Row >
            <Col xs='12' sm='6' md='3' style={{padding: 1}}>
              <Category img={require('../assets/images/White Cart icon.png')} txt={'Marketplace'}/>
            </Col>
            <Col xs='12' sm='6' md='3' style={{padding: 1}}>
              <Category img={require('../assets/images/Knowledge Hub icon.png')} txt={'Knowledge Hub'}/>
            </Col>
            <Col xs='12' sm='6' md='3' style={{padding: 1}}>
              <Category img={require('../assets/images/SME hub icon.png')} txt={'SME Hub'}/>
            </Col>
            <Col xs='12' sm='6' md='3' style={{padding: 1}}>
              <Category img={require('../assets/images/Biz Xchange Icon.png')} txt={'Business Exchange'}/>
            </Col>
          </Row>
        </Container>
        <MarketPlace />
        <div style={{width: '100%', height: 8, backgroundColor: '#e8e9e7', marginTop: 10, marginBottom: 20}} />
        <PostsRow />
        <div style={{width: '100%', height: 8, backgroundColor: '#e8e9e7', marginTop: 10, marginBottom: 20}} />
        <Smehub />
        <div style={{width: '100%', height: 8, backgroundColor: '#e8e9e7', marginTop: 10}} />
        <Professionals />
        <Footer />
      </div>
    )
  }
}

export default Demo1;
