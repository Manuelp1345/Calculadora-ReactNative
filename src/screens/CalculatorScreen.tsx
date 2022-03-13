import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';
import useCalculate from '../hooks/useCalculate';

const CalculatorScreen = () => {
  const {number, afterNumber, actions} = useCalculate();

  const {
    calculate,
    clear,
    delLastNumber,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    handleNumber,
    sumRes,
  } = actions;

  const {resultado, calContainer, resultadoPeq, fila} = styles;

  return (
    <View style={calContainer}>
      {afterNumber !== '0' && <Text style={resultadoPeq}>{afterNumber}</Text>}

      <Text style={resultado} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={fila}>
        <ButtonCalc onPress={clear} text="C" />
        <ButtonCalc onPress={sumRes} text="+/-" />
        <ButtonCalc onPress={delLastNumber} text="Del" />
        <ButtonCalc onPress={btnDividir} text="/" color="orange" />
      </View>

      <View style={fila}>
        <ButtonCalc onPress={handleNumber} text="7" color="grayDark" />
        <ButtonCalc onPress={handleNumber} text="8" color="grayDark" />
        <ButtonCalc onPress={handleNumber} text="9" color="grayDark" />
        <ButtonCalc onPress={btnMultiplicar} text="X" color="orange" />
      </View>

      <View style={fila}>
        <ButtonCalc onPress={handleNumber} text="4" color="grayDark" />
        <ButtonCalc onPress={handleNumber} text="5" color="grayDark" />
        <ButtonCalc onPress={handleNumber} text="6" color="grayDark" />
        <ButtonCalc onPress={btnRestar} text="-" color="orange" />
      </View>

      <View style={fila}>
        <ButtonCalc onPress={handleNumber} text="1" color="grayDark" />
        <ButtonCalc onPress={handleNumber} text="2" color="grayDark" />
        <ButtonCalc onPress={handleNumber} text="3" color="grayDark" />
        <ButtonCalc onPress={btnSumar} text="+" color="orange" />
      </View>

      <View style={fila}>
        <ButtonCalc
          onPress={handleNumber}
          text="0"
          color="grayDark"
          style="btnLarge"
        />
        <ButtonCalc onPress={handleNumber} text="." color="grayDark" />
        <ButtonCalc onPress={calculate} text="=" color="orange" />
      </View>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
          fontFamily: 'sans-serif-medium',
        }}>
        ManuelDev | curso react native | Fernando Herrera
      </Text>
    </View>
  );
};

export default CalculatorScreen;
