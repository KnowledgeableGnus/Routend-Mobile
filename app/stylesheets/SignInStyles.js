import {StyleSheet, Dimensions } from 'react-native';

let style = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  username: {
    position: 'absolute',
    top: (Dimensions.get('window').height * 0.598),
    left: (Dimensions.get('window').width * 0.23),
    borderWidth: 0,
    color: 'white',
    height: (Dimensions.get('window').height * 0.05),
    width: (Dimensions.get('window').width),
    fontSize: 13
  },
  password: {
    position: 'absolute',
    top: (Dimensions.get('window').height * 0.691),
    left: (Dimensions.get('window').width * 0.23),
    borderWidth: 0,
    color: 'white',
    height: (Dimensions.get('window').height * 0.05),
    width: (Dimensions.get('window').width),
    fontSize: 13
  },
  submit: {
    top: (Dimensions.get('window').height * 0.821),
    width: (Dimensions.get('window').width),
    height: (Dimensions.get('window').height * 0.09)
  },
  signUp: {
    left: (Dimensions.get('window').width * 0.631),
    top: (Dimensions.get('window').height * 0.851),
    width: (Dimensions.get('window').width * 0.12),
    height: (Dimensions.get('window').height * 0.03)
  },
});

export default style;