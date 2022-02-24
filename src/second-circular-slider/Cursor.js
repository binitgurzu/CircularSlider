import React from 'react';
import Animated, {useAnimatedProps} from 'react-native-reanimated';
import {Circle} from 'react-native-svg';

import {STROKE} from './Constants';

const r = STROKE / 2;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Cursor = ({pos}) => {
  const animatedProps = useAnimatedProps(() => {
    const {x, y} = pos.value;
    return {
      cx: x,
      cy: y,
      r,
    };
  });
  return <AnimatedCircle animatedProps={animatedProps} fill="#FD9F07" />;
};

export default Cursor;
