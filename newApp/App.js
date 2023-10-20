import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  React, { useState, useEffect } from 'react';


const Blink = props => {
    const [isShowingText,setIsShowingText] = useState(true);

    useEffect(() => {
        const toggle = setInterval(() => { setIsShowingText(!isShowingText);
            },1000 );
          return () => clearInterval(toggle);  
        });

        if (!isShowingText) {
            return null;
    }

    return <Text>{props.text}</Text>
};

const BlinkApp = () => {
    return (
        <View>
            <Blink text="I love to blink"/>
            <Blink text="Yes I'm blinking is so great"/>
            <Blink text="Why did they ever take his out"/>
            <Blink text="Look at me look at me look at me"/>
        </View>
    );
};

export default BlinkApp;




