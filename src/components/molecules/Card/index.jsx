import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { IcCheck, IcHistory } from '../../../assets'

const Card = ({ onPress, title, type, desc  }) => {
  const renderIcon = () => {
    if (type === 'checklist') {
      return <IcCheck />;
    } else if (type === 'history') {
      return <IcHistory />;
    }
    return <IcCheck />; // Jika tidak ada tipe yang cocok
  };

  return (
      <TouchableOpacity style={styles.btnCard} onPress={onPress} activeOpacity={0.6}>
        {renderIcon()}
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.titleDesc}>{desc}</Text>
      </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  titleText: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: "#0F4C81",
    top: 3,
    left: 3
  },
  btnCard: {
    backgroundColor: colors.grow,
    margin: 10,
    padding: 15,
    width: 156,
    height: 145,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  titleDesc: {
    fontFamily: fonts.primary[400],
    fontSize: 15,
    top: 5,
    color: "#C2C2C2",
    maxWidth: 200
  }
})