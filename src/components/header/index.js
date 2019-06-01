import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';
import Icon from '../icon';

import './header.css';


export class Header extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row style={{height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <Col >
            <div style={{alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
              <img src={require('../../assets/images/site logo.png')} alt={'Logo'} style={{alignSelf: 'center'}}/>
            </div>
          </Col>
          <Col style={{paddingTop: 15}}>
          <FormGroup>
          <Input type="text" name="search" id="searchField" placeholder="Search for Products, Articles, Services etc" />
        </FormGroup>
          </Col>
          <Col >
            <div className={'Icon-Container'}>
              <Icon src={require('../../assets/images/accountIcon.png')} alt={'Account Icon'} />
              <Icon src={require('../../assets/images/cartIcon.png')} alt={'Cart Icon'} />
            </div>
          </Col>
        </Row>



      </Container>
    )
  }
}

export default Header;
