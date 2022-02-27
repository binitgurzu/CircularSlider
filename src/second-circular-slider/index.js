import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const BedTimeSlider = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

export default BedTimeSlider;
