import React, { Component } from 'react'
import Header from '../components/header';
import Slider from '../components/slider';
import Category from '../components/category/category';
import MarketPlace from '../components/marketplaceSlider';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import PostsRow from '../components/posts';
import Smehub from '../components/smehub/smehub';
import Professionals from '../components/professionals'
import Footer from '../components/footer';

export class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen2: false,
      dropdownOpen3: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggle2() {
    this.setState(prevState => ({
      dropdownOpen2: !prevState.dropdownOpen2
    }));
  }

  toggle3() {
    this.setState(prevState => ({
      dropdownOpen3: !prevState.dropdownOpen3
    }));
  }

  render() {
    return (
      <div>
        <Header />
        <Slider />
        <Container fluid={true} >
          <Row >
            <Col xs='12' sm='4'  style={{padding: 1}}>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{ margin: 0, backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', flex: 1, display: 'flex'}} onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
                  <DropdownToggle style={{ backgroundColor: 'transparent', padding: 0, borderWidth: 0, borderColor: 'transparent', flex: 1, display: 'flex'}}>
                  <Category img={require('../assets/images/White Cart icon.png')} txt={'Marketplace'}/>
                  </DropdownToggle>
                  <DropdownMenu
                    modifiers={{
                      width: {
                        enabled: true,
                        order: 890,
                        fn: (data) => {
                          return {
                            ...data,
                            styles: {
                              ...data.styles,
                              overflow: 'auto',
                              width: window.screen.width*0.6
                            },
                          };
                        },
                      }
                    }}
                  >
                    <Container >
                      <Row >
                        <Col >
                          <DropdownItem >Automobile</DropdownItem>
                          <DropdownItem>Baby Products</DropdownItem>
                          <DropdownItem>Books, Movies and Music</DropdownItem>
                          <DropdownItem>Computing</DropdownItem>
                          <DropdownItem >Electronics</DropdownItem>
                          <DropdownItem>Fashion</DropdownItem>
                        </Col>
                        <Col >
                          <DropdownItem>Gaming</DropdownItem>
                          <DropdownItem>Health & Beauty</DropdownItem>
                          <DropdownItem >Home & Office</DropdownItem>
                          <DropdownItem>Industrial & Scientific</DropdownItem>
                          <DropdownItem>Musical Instruments</DropdownItem>
                          <DropdownItem>Pet Supplies</DropdownItem>
                        </Col>
                        <Col >
                          <DropdownItem>Phones & Tablets</DropdownItem>
                          <DropdownItem >Services</DropdownItem>
                          <DropdownItem>Sporting Goods</DropdownItem>
                          <DropdownItem>Toys & Games</DropdownItem>
                          <DropdownItem>Agricultural Commodities</DropdownItem>
                          <DropdownItem>Generators and Power Solutions</DropdownItem>
                        </Col>
                      </Row>
                    </Container>

                  </DropdownMenu>
                </Dropdown>
              
            </Col>
            <Col xs='12' sm='4'  style={{padding: 1}}>

            <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2} style={{backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', flex: 1, display: 'flex'}} onMouseEnter={this.toggle2} onMouseLeave={this.toggle2}>
                  <DropdownToggle style={{backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', flex: 1, display: 'flex', padding: 0}}>
                    <Category img={require('../assets/images/Knowledge Hub icon.png')} txt={'SME Knowledge Hub'}/> 
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem >Knowledge Base</DropdownItem>
                    <DropdownItem>SME Hub</DropdownItem>
                    <DropdownItem>Events</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
            </Col>
            <Col xs='12' sm='4' style={{padding: 1}}>
            <Dropdown isOpen={this.state.dropdownOpen3} toggle={this.toggle3} style={{backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', flex: 1, display: 'flex'}} onMouseEnter={this.toggle3} onMouseLeave={this.toggle3}>
                  <DropdownToggle style={{backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', flex: 1, display: 'flex', padding: 0}}>
                    <Category img={require('../assets/images/Biz Xchange Icon.png')} txt={'Business Exchange'}/>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem >Register your business</DropdownItem>
                    <DropdownItem>Become a Pro</DropdownItem>
                    <DropdownItem>Find a Pro</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              
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
