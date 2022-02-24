import React from 'react';
import {StyleSheet} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {useAnimatedGestureHandler} from 'react-native-reanimated';
import {canvas2Polar, Vector} from 'react-native-redash';

import {CENTER, containedInSquare, normalize, STROKE} from './Constants';
import CursorOverlay from './CursorOverlay';

const Gesture = ({start, end, startPos, endPos}) => {
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: ({x, y}, ctx) => {
      if (containedInSquare({x, y}, startPos.value, STROKE)) {
        //  ctx.region = START;
        ctx.offset = start.value;
      } else if (containedInSquare({x, y}, endPos.value, STROKE)) {
        //  ctx.region = END;
        ctx.offset = end.value;
      } else {
        //   ctx.region = MAIN;
        const {theta} = canvas2Polar({x, y}, CENTER);
        ctx.offset = theta;
      }
    },
    onActive: ({x, y}, ctx) => {
      const {theta} = canvas2Polar({x, y}, CENTER);
      const delta = theta - ctx.offset;
      // if (ctx.region === Region.START || ctx.region === Region.MAIN) {
      //   start.value = normalize(start.value + delta);
      // }
      // if (ctx.region === Region.END || ctx.region === Region.MAIN) {
      //   end.value = normalize(end.value + delta);
      // }
      ctx.offset = theta;
    },
  });
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={StyleSheet.absoluteFill}>
        <CursorOverlay position={startPos} icon="bed" />
        <CursorOverlay position={endPos} icon="bell" />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Gesture;
