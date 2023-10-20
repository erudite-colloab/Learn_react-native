import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, Image, View, Button, Text, StyleSheet } from 'react-native';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import DisplayImage from './components/DisplayImage';
import Header from './components/Header';

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [addTasks, setAddTasks] = useState(false);

    const addTaskHandler = taskTitle => {
      setTasks(currentTasks => [ 
        ...currentTasks, 
        {id: Math.random().toString(), value:taskTitle } 
      ]);
      setAddTasks(false);
    };

    const deleteTaskHandler = taskId => {
      setTasks(currentTasks => {
        return currentTasks.filter(task => task.id !== taskId);
      });
    };
   
    const canceltaskAdditionHandler = () => {
      setAddTasks(false);
    };

    return (
      <View>
        <Header title="To-Do App"> </Header>
        <View style={styles.screen}>
          <Button title="Add New Task"
            onPress={() => 
            setAddTasks(true)} />
          <TodoInput 
            visible={addTasks} 
            onAddTask={addTaskHandler}
            onCancel={canceltaskAdditionHandler} 
          />
        </View>
        <DisplayImage taskStatus={tasks} />
        <View style={styles.screenList}>
          <FlatList 
            keyExtractor={(item, index) => item.id} 
            data={tasks}
            renderItem={itemData => (
              <TodoItem 
                title={itemData.item.value} 
                onDelete={deleteTaskHandler} 
                id={itemData.item.id} 
              /> 
           )} 
         />
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  screen: {
    paddingTop:70,
    paddingHorizontal: 70,
  },
  screenList:{
    marginLeft:20,
    marginRight:20,    
  },
});
