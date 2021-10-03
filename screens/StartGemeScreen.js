import React, {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Keyboard,
    TouchableWithoutFeedback,
    Alert
 } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState(''); //string state
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, '')); // replace number
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
        Keyboard.dismiss();
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', 'Number should be 1 to 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setEnteredValue('');
    }
    let confirmedOutput;

    if(confirmed) {
        confirmedOutput = (
            <Card style={StyleSheet.summaryContainer}>
                <Text>You selected {selectedNumber}</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title='Start Game' />
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                macLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                <Button 
                    title="Reset" 
                    onPress={resetInputHandler} 
                    color={Colors.accent} />
                </View>
                <View style={styles.button}>
                <Button 
                    title="Confirm" 
                    onPress={confirmInputHandler} 
                    color={Colors.primary} />
                </View>
            </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
      marginTop: 20,
      alignItems: 'center'
  }
});

export default StartGameScreen;
