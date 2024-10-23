import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { colors, fonts } from '../../../utils'

const Button = ({type, title, onPress, disable, width, left, right}) => {
//   if(type === 'btn-icon-send') {
//       return <BtnIconSend disable={disable} onPress={onPress}/>
//    }
  if(disable) {
    return (
        <View activeOpacity={0.8} style={styles.disableBg}>
            <Text style={styles.disableText}>{title}</Text>
        </View>
    )    
  }
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container(type, width, left, right)} onPress={onPress}>
        <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({

  container: (type, width, left, right) => ({
    backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background , 
    paddingVertical: 10, 
    borderRadius: 10,
    width: width,
    left: left,
    right: right
}),
text: type => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text
}),
 disableBg: {
    paddingVertical: 10, 
    borderRadius: 10,
    backgroundColor: colors.button.disable.background
},
disableText: {
    fontSize: 18,
    fontFamily: fonts.primary[300],
    textAlign: 'center',
    color: colors.grow
}

})