import React, {PureComponent} from 'react';
import {
  G,
  Circle,
  Text,
  Line,
  RadialGradient,
  Stop,
  Defs,
  LinearGradient,
  Ellipse,
} from 'react-native-svg';
import range from 'lodash.range';
import PropTypes from 'prop-types'; // ES6

export default class ClockFace extends PureComponent {
  static propTypes = {
    r: PropTypes.number,
    stroke: PropTypes.string,
  };

  render() {
    const {r, stroke} = this.props;

    return (
      <G>
        <G>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#669BBA" stopOpacity="1" />
              <Stop offset="1" stopColor="#125176" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Circle cx="0" cy="0" r={r - stroke / 2} fill="url(#grad)">
            <Text fill={stroke} fontSize="16" textAnchor="middle">
              Hello
            </Text>
          </Circle>
          {/* {range(12).map((h, i) => (
            <Text
              key={i}
              fill={stroke}
              fontSize="16"
              textAnchor="middle"
              x={
                textRadius *
                Math.cos(((2 * Math.PI) / 12) * i - Math.PI / 2 + Math.PI / 6)
              }
              y={
                textRadius *
                Math.sin(((2 * Math.PI) / 12) * i - Math.PI / 2 + Math.PI / 6)
              }>
              {h + 1}
            </Text>
          ))} */}
        </G>
      </G>
    );
  }
}
