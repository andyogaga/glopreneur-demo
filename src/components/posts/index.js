import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Input, Button } from 'reactstrap';
import '../../assets/utils/typography.css'
import SinglePost from './singlePost';

class PostsRow extends Component {
  render() {
    return (
      <Container >
        <Row >
          <Col>
            <div style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
              <h3 style={{ alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', color: '#337700', marginBottom: 30 }}>Knowledge Base</h3>
            </div>
          </Col>
        </Row>
        <Row >
          <Col xs={12} sm={8}>
            <img src={require('../../assets/images/Ultimate Guide.png')} alt={'Recent Post'} resizeMode='contain' style={{ width: '100%' }} />
            <div style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3 style={{ alignSelf: 'center', textAlign: 'left', fontWeight: 'bold', marginTop: 20, lineHeight: 1.2 }}>Ultimate Guide to Business Growth Online 2019 </h3>
            </div>
            <Row >
              <Col xs={8}>
                <h5 style={{ alignSelf: 'center', textAlign: 'left', marginTop: 20 }}>Free Ebook & Template </h5>
              </Col>
              <Col xs={4}>
                <h5 style={{ alignSelf: 'center', textAlign: 'right', marginTop: 20 }}>03/01/19</h5>
              </Col>
            </Row>
            <Row >
              <Col >
                <p style={{ alignSelf: 'center', textAlign: 'left', marginTop: 20 }}>This is a sample text from the first paragraph of the article/summary/abstract introducing the ebook</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4} >
            <SinglePost img={require('../../assets/images/Post One.jpg')} altText={'Post One'} title={'How to come up with great business ideas'} description={'This is a sample text of an excerpt from the body of the article'} />
            <SinglePost img={require('../../assets/images/Post Two.jpg')} altText={'Post Two'} title={'Why delivering excellent customer service is important'} description={'This is a sample text of an excerpt from the body of the article'} />
            <SinglePost img={require('../../assets/images/Post Three.jpg')} altText={'Post Three'} title={'What to do when things aren’t going well in business'} description={'This is a sample text of an excerpt from the body of the article'} />
            <SinglePost img={require('../../assets/images/Post Four.jpg')} altText={'Post Four'} title={'How to promote customer loyalty'} description={'This is a sample text of an excerpt from the body of the article'} />
          </Col>
        </Row>
        <Row style={{ marginTop: 20, marginBottom: 20 }}>
          <Col xs={6} md={3}>
            <FormGroup>
              <Input type="text" name="search" id="fname" placeholder="Full Name" style={{ borderColor: '#337700', borderRadius: 0, borderWidth: 1.5 }} />
            </FormGroup>
          </Col>
          <Col xs={6} md={3} >
            <FormGroup>
              <Input type="text" name="search" id="bizname" placeholder="Business Name" style={{ borderColor: '#337700', borderRadius: 0, borderWidth: 1.5 }} />
            </FormGroup>
          </Col>
          <Col xs={6} md={3}>
            <FormGroup>
              <Input type="email" name="search" id="email" placeholder="Email Address " style={{ borderColor: '#337700', borderRadius: 0, borderWidth: 1.5 }} />
            </FormGroup>
          </Col>
          <Col xs={6} md={3}>
            <Button style={{ width: '80%', backgroundColor: '#337700', borderRadius: 0, fontWeight: 'bold' }}>Subscribe</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PostsRow;
