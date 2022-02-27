import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import ExampleApp from './examples/Main';

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Main = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <ExampleApp />
    </SafeAreaView>
  );
};

export default Main;
