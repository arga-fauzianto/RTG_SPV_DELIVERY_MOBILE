import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from '../../../utils'

const HeaderDefault = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>{title}</Text>
    </View>
  )
}

export default HeaderDefault

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#FFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleHeader: {
        fontFamily: fonts.primary[400],
        color: "#0000",
        fontSize: 16
    }
})