import React, { Component } from 'react'
import Header from '../components/header';
import Slider from '../components/slider';
import Category from '../components/category/category';
import MarketPlace from '../components/marketplaceSlider';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PostsRow from '../components/posts';
import Smehub from '../components/smehub/smehub';
import Professionals from '../components/professionals'
import Footer from '../components/footer';
import '../assets/utils/typography.css'


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
            <Col xs='12' sm='4' style={{ padding: 1 }}>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{ margin: 0, backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', flex: 1, display: 'flex' }} onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
                <DropdownToggle style={{ backgroundColor: 'transparent', padding: 0, borderWidth: 0, borderColor: 'transparent', flex: 1, display: 'flex' }}>
                  <Category img={require('../assets/images/White Cart icon.png')} txt={'Marketplace'} />
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
                            maxWidth: window.screen.width * 0.8,
                            minWidth: window.screen.width * 0.4
                          },
                        };
                      },
                    }
                  }}
                >
                  <Container >
                    <Row >
                      <Col md="6" >
                        <h3 style={{ textAlign: 'justify', fontWeight: 'bold', color: '#337700', marginBottom: 16, fontSize: 16 }}>Top Categories</h3>
                        <DropdownItem >Automobile</DropdownItem>
                        <DropdownItem>Computing</DropdownItem>
                        <DropdownItem >Electronics</DropdownItem>
                        <DropdownItem>Fashion</DropdownItem>
                        <DropdownItem>Health & Beauty</DropdownItem>
                        <DropdownItem >Home & Office</DropdownItem>
                        <DropdownItem>Industrial & Scientific</DropdownItem>
                        <DropdownItem>Phones & Tablets</DropdownItem>
                        <DropdownItem>Agricultural Commodities</DropdownItem>
                        <DropdownItem>Power Solutions</DropdownItem>
                      </Col>
                      <Col md={'6'} >
                      <h3 style={{ textAlign: 'justify', fontWeight: 'bold', color: '#337700', marginBottom: 16, fontSize: 16 }}>Top Markets</h3>
                      <DropdownItem>Alaba</DropdownItem>
                        <DropdownItem>Computer Village</DropdownItem>
                        <DropdownItem>Aba</DropdownItem>
                        <DropdownItem>Akpanda</DropdownItem>
                        <DropdownItem >Idumota</DropdownItem>
                        <DropdownItem>Ariaria</DropdownItem>
                        <DropdownItem>Onitsha</DropdownItem>
                        </Col>
                    </Row>
                  </Container>

                </DropdownMenu>
              </Dropdown>

            </Col>
            <Col xs='12' sm='4' style={{ padding: 1 }}>

              <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2} style={{ backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', flex: 1, display: 'flex' }} onMouseEnter={this.toggle2} onMouseLeave={this.toggle2}>
                <DropdownToggle style={{ backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', flex: 1, display: 'flex', padding: 0 }}>
                  <Category img={require('../assets/images/Knowledge Hub icon.png')} txt={'SME Knowledge Hub'} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem >Knowledge Base</DropdownItem>
                  <DropdownItem>SME Hub</DropdownItem>
                  <DropdownItem>Events</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col xs='12' sm='4' style={{ padding: 1 }}>
              <Dropdown isOpen={this.state.dropdownOpen3} toggle={this.toggle3} style={{ backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', flex: 1, display: 'flex' }} onMouseEnter={this.toggle3} onMouseLeave={this.toggle3}>
                <DropdownToggle style={{ backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', flex: 1, display: 'flex', padding: 0 }}>
                  <Category img={require('../assets/images/Biz Xchange Icon.png')} txt={'Business Exchange'} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem >Register your business</DropdownItem>
                  <DropdownItem >Buy a Business</DropdownItem>
                  <DropdownItem>Become a Professional</DropdownItem>
                  <DropdownItem>Hire a Professional</DropdownItem>
                </DropdownMenu>
              </Dropdown>

            </Col>
          </Row>
        </Container>
        <MarketPlace />
        <div style={{ width: '100%', height: 8, backgroundColor: '#e8e9e7', marginTop: 10, marginBottom: 20 }} />
        <PostsRow />
        <div style={{ width: '100%', height: 8, backgroundColor: '#e8e9e7', marginTop: 10, marginBottom: 20 }} />
        <Smehub />
        <div style={{ width: '100%', height: 8, backgroundColor: '#e8e9e7', marginTop: 10 }} />
        <Professionals />
        <Footer />
      </div>
    )
  }
}

export default Demo1;
