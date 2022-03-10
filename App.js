import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import CircularSlider from './src/CircularSlider';
import Carousel from 'react-native-snap-carousel';

import {IMAGES} from './src/images';

class CircularSliderApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1: 0,
    };
  }
  _renderItem({item}) {
    return <Image source={item?.url} />;
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 300}}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={IMAGES}
            renderItem={this._renderItem}
            sliderWidth={400}
            itemWidth={300}
            onSnapToItem={index => this.setState({slider1: index})}
          />
        </View>

        {/* <Image source={require('./assets/images/1.png')} /> */}

        <View style={styles.root}>
          <View style={styles.container}>
            <View style={styles.slider1}>
              <CircularSlider
                width={400}
                height={400}
                meterColor="#0cd"
                textColor="#fff"
                value={this.state.slider1}
                onValueChange={value =>
                  this.setState({slider1: value}, () => {
                    //  this._carousel.snapToItem(value);
                  })
                }
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    position: 'relative',
    width: 400,
    height: 100,
  },
  slider1: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  slider2: {
    position: 'absolute',
    top: 50,
    left: 50,
  },
});

export default CircularSliderApp;
