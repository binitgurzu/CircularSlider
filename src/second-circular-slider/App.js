import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import BedTime from './BedTime';

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <BedTime />
    </SafeAreaView>
  );
};

export default App;
