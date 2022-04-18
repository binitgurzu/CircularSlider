import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Svg} from './svg-component';

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SvgPlayGroundComponent = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <Svg />
    </SafeAreaView>
  );
};

export default SvgPlayGroundComponent;
