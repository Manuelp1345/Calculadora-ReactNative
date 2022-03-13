import {useRef, useState} from 'react';

enum Operators {
  sum = '+',
  rest = '-',
  mult = 'x',
  div = '/',
}

const useCalculate = () => {
  const [afterNumber, setAfterNumber] = useState('0');
  const operatorRef = useRef<Operators>();
  const [number, setNumber] = useState('0');

  const clear = () => {
    setNumber('0');
    setAfterNumber('0');
  };

  const delLastNumber = () => {
    if (number.length > 2 || (number.length === 2 && !number.includes('-'))) {
      setNumber(number.slice(0, number.length - 1));
    } else {
      setNumber('0');
    }
  };

  const handleNumber = (numberText: string) => {
    // eslint-disable-next-line curly
    if (number.includes('.') && numberText === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      // punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);
        // evaluar si es otro cero y hay un punto
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
        // evaluar si es diferente de cero y no tiene un punto
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        // evitar 0000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const sumRes = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeNumber = () => {
    if (number.endsWith('.')) {
      setAfterNumber(number.slice(0, number.length - 1));
    } else {
      setAfterNumber(number);
    }
    setNumber('0');
  };

  const btnDividir = () => {
    changeNumber();
    operatorRef.current = Operators.div;
  };

  const btnMultiplicar = () => {
    changeNumber();
    operatorRef.current = Operators.mult;
  };

  const btnRestar = () => {
    changeNumber();
    operatorRef.current = Operators.rest;
  };

  const btnSumar = () => {
    changeNumber();
    operatorRef.current = Operators.sum;
  };

  const calculate = () => {
    let result = 0;
    switch (operatorRef.current) {
      case Operators.sum:
        result = Number(afterNumber) + Number(number);
        break;
      case Operators.rest:
        result = Number(afterNumber) - Number(number);
        break;
      case Operators.mult:
        result = Number(afterNumber) * Number(number);
        break;
      case Operators.div:
        result = Number(afterNumber) / Number(number);
        break;
    }
    setNumber(result.toString());
    setAfterNumber('0');
  };

  const actions = {
    clear,
    delLastNumber,
    handleNumber,
    sumRes,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calculate,
  };

  return {
    actions,
    number,
    afterNumber,
  };
};

export default useCalculate;
