import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const CustomTextInput = ({
    text,
    onChange,
    label,
    multiline,
    numberOfLines
}) => {
    const styles = StyleSheet.create({
        textInputWrapper:{
            marginTop:20,
        },
        input:{
            borderWidth:2,
            borderColor:'#DDD',
            padding:10,
        },
    })
  return (
    <View style={styles.textInputWrapper}>
        <Text>{label}</Text>
        <TextInput
            style={styles.input}
            multiline={multiline}
            numberOfLines={numberOfLines}
            placeholder={label}
            onChangeText={onChange}
            defaultValue={text}
        />
    </View>
  )
}

export default CustomTextInput