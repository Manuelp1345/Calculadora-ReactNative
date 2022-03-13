import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  color?: 'gray' | 'orange' | 'grayDark';
  style?: 'btnLarge' | 'btnSmall';
  onPress: (numberText: string) => void;
}

const ButtonCalc = ({
  text,
  color = 'gray',
  style = 'btnSmall',
  onPress,
}: Props) => {
  const setStyleBtn = style === 'btnLarge' && btnLarge;
  const setColor =
    (color === 'grayDark' && btnColorGrayDark) ||
    (color === 'orange' && btnColorOrange);
  const setColorText =
    (color === 'grayDark' && btnColorText) ||
    (color === 'orange' && btnColorText);
  return (
    <TouchableOpacity onPress={() => onPress(text)}>
      <View style={[btn, setColor, setStyleBtn]}>
        <Text style={[btnTex, setColorText]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;

const {btn, btnTex, btnColorGrayDark, btnColorOrange, btnColorText, btnLarge} =
  StyleSheet.create({
    btn: {
      height: 80,
      width: 80,
      backgroundColor: '#9b9b9b',
      borderRadius: 100,
      justifyContent: 'center',
      marginHorizontal: 10,
    },
    btnTex: {
      textAlign: 'center',
      padding: 10,
      fontSize: 30,
      color: '#000',
      fontWeight: 'bold',
    },
    btnColorGrayDark: {
      backgroundColor: '#2d2d2d',
    },
    btnColorOrange: {
      backgroundColor: '#ff9427',
    },
    btnColorText: {
      color: '#fff',
    },
    btnLarge: {
      width: 180,
    },
  });
