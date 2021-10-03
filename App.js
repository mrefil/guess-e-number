import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGemeScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [usernumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if(usernumber) {
    content = <GameScreen userChoice={usernumber} />;
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
