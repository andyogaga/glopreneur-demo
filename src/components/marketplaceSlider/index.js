import React, { Component } from 'react'
import { Container, Button, Col, Row } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: require('../../assets/images/Slide One.jpg'),
    altText: 'Slide 1',
  },
  {
    src: require('../../assets/images/Slide Two.jpg'),
    altText: 'Slide 2',
  },
  {
    src: require('../../assets/images/Slide three.jpg'),
    altText: 'Slide 3',
  },
  {
    src: require('../../assets/images/Slide Four.jpg'),
    altText: 'Slide 4',
  },
  {
    src: require('../../assets/images/Slide Five.jpg'),
    altText: 'Slide 5',
  }
];


class MarketPlace extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} style={{ width: '100%' }} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <Container style={{ marginTop: 40, marginBottom: 40 }}>
        <h3 style={{ alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', color: '#337700', marginBottom: 30 }}>Discover Markets</h3>
        <Row style={{margin: 30}}>
          <Col xs='12' sm='6' md='3' style={{paddingTop: 10}}>
            <img src={require('../../assets/images/Aba.jpg')} alt={'Aba'} style={{ width: '100%' }} resizeMode='cover' />
          </Col>
          <Col xs='12' sm='6' md='3' style={{paddingTop: 10}}>
            <img src={require('../../assets/images/Alaba.jpg')} alt={'Alaba'} style={{ width: '100%' }} resizeMode='cover' />
          </Col>
          <Col xs='12' sm='6' md='3' style={{paddingTop: 10}}>
            <img src={require('../../assets/images/Aspanda.jpg')} alt={'Aspanda'} style={{ width: '100%' }} resizeMode='cover' />
          </Col>
          <Col xs='12' sm='6' md='3' style={{paddingTop: 10}}>
            <img src={require('../../assets/images/cv.jpg')} alt={'Computer Village'} style={{ width: '100%' }} resizeMode='cover' />
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Carousel
              interval='2000'
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Col xs='12' sm='6' md='4' style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            <Button style={{ width: '100%', backgroundColor: '#337700', borderRadius: 0, alignSelf: 'center' }}>Explore Products</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MarketPlace;
