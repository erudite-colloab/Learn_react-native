import { View, Text } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View style={{
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 20

    }}>
      <Text>Welcome</Text>
    </View>
  )
}