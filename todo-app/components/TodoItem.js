import React, {useState} from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import CheckBox from 'expo-checkbox';

const TodoItem = props => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBox = () => {
        setIsChecked(!isChecked);
    };


    return (
        <View style={styles.screen}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
            <CheckBox value={isChecked} onValueChange={handleCheckBox} />
            <TouchableOpacity onPress={() => props.onDelete(props.id)} style={styles.button}>
                <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
        </View>      
    );
};



const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#eee',
        borderWidth: 1,
        width: '60%',
    },
    screen :{
        flexDirection:'row',
        marginTop: 30,
        justifyContent: 'space-between',
        width: "100%",
    },
    button: {
        display: 'flex',
        height: 40,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonGreen: {
        display: 'flex',
        height: 40,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: 'white',
    },
});

export default TodoItem;
