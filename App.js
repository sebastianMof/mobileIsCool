import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const takePicture = () => {
    const options = {
      title: 'testTitle',
      mediaType: 'photo',
    };
    launchCamera(options, response => {
      console.log('response: ', response);
    });
  };

  const searchInGallery = () => {
    const options = {
      title: 'testTitle2',
      mediaType: 'photo',
      selectionLimit: 0,
    };
    launchImageLibrary(options, response => {
      console.log('response 2: ', response);
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={styles.text}>MOBILE IS COOL</Text>
          <Button onPress={takePicture()} title="launchCamera" />
          <Button onPress={searchInGallery()} title="launchImageLibrary" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  text: {
    alignSelf: 'center',
    fontSize: 35,
  },
});

export default App;
