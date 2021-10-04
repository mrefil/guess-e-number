import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                // source={require('../assets/success.png')}
                source={{url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg'}}
                styles={styles.image} />
            </View>
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="New Game" onPress={props.onRestart} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 20

    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default GameOverScreen;