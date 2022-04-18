import React, {PureComponent} from 'react';
import {G, Circle, Text, Line, RadialGradient, Stop} from 'react-native-svg';
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
          <Circle cx="0" cy="0" r={r - stroke / 2} fill="pink" />
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
