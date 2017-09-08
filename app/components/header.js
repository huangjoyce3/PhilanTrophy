import React from 'react';
//import require from 'require';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>PhilanTrophy</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#8dfcd7',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15 
  },
  textStyle: {
    fontSize: 30
  }
};

export default Header;
