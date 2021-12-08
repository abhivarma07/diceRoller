import React, {useState} from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import DiceOne from './assests/dice1.png';
import DiceTwo from './assests/dice2.png';
import DiceThree from './assests/dice3.png';
import DiceFour from './assests/dice4.png';
import DiceFive from './assests/dice5.png';
import DiceSix from './assests/dice6.png';

const App = () => {
  const [uri, setUri] = useState(DiceOne);
  const [uriTemp, setUriTemp] = useState(DiceTwo);

  const playDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
        setUriTemp(DiceSix);
        break;
      case 2:
        setUri(DiceTwo);
        setUriTemp(DiceFive);
        break;
      case 3:
        setUri(DiceThree);
        setUriTemp(DiceFour);
        break;

      case 4:
        setUri(DiceFour);
        setUriTemp(DiceThree);
        break;
      case 5:
        setUri(DiceFive);
        setUriTemp(DiceTwo);
        break;
      case 6:
        setUri(DiceSix);
        setUriTemp(DiceOne);
        break;

      default:
        setUri(DiceTwo);
        setUriTemp(DiceOne);
        break;
    }
  };

  return (
    <>
      <View style={styles.container}>
      <Image styles={styles.image} source={uriTemp} />
      <Image styles={styles.image} source={uri} />
        <TouchableOpacity onPress={playDice}>
          <Text style={styles.text}>Play!!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200,
  },

  text: {
    color: 'black',
    fontSize: 25,
    marginTop: 30,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 2,
  },
});
