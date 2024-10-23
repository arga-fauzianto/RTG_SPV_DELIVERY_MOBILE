import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { colors, fonts } from '../../../utils'

const Input = ({ placeholder, onChangeText, keyboardType, label, value, secureTextEntry, autoCapitalize, disable }) => {
    const [border, setBorder] = useState(colors.border)
    const onFocusForm = () => {
        setBorder(colors.primary);
    }

    const onBlurForm = () => {
        setBorder("#DBD9D9")
    }

  return (
    <View>
        <Text style={styles.label}>{label}</Text>
      <KeyboardAvoidingView>
        <TextInput 
       onFocus={onFocusForm} 
       onBlur={onBlurForm} 
       style={styles.input(border)}
       onChangeText={onChangeText}
       value={value}
       secureTextEntry={secureTextEntry}
       placeholder= {placeholder}
       autoCapitalize= {autoCapitalize}
       keyboardType={keyboardType}
       editable={!disable}
       selectTextOnFocus={!disable}
        />
      </KeyboardAvoidingView>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    label: {
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: "#0A0A0A",
        marginBottom: 7
    },

    input: (border) => ({
        borderWidth: 1.3,
        borderColor: border,
        borderRadius: 8,
        padding: 10,
    })
})