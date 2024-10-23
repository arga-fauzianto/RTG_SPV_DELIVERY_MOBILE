import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderDefault from './HeaderDefault'
import { IcBack } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Header = ({ onPress, title, type }) => {
    if(type === 'default') {
        return <HeaderDefault title={title}/>
    }
  return (
    <View style ={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IcBack />
      </TouchableOpacity>
      <Text style={styles.titleHeader}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        elevation: 3
      },

      titleHeader: {
        fontFamily: fonts.primary[400],
        color: colors.text.primary,
        flex: 1,
        fontSize: 19,
        textAlign: 'center'
      },
})