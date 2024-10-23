import {StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../../../utils';

const {width: screenWidth} = Dimensions.get('window'); // Get screen width

const CardItemCategory = ({HeaderTitle, items, onSave, onEdit}) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  // Function untuk menentukan teks radio berdasarkan HeaderTitle
  const getRadioText = () => {
    if (HeaderTitle === 'Body') {
      return {
        yes: 'Penyok',
        no: 'Tidak Penyok',
      };
    }
    return {
      yes: 'Ada',
      no: 'Tidak Ada',
    };
  };

  // Dapatkan teks yang sesuai
  
  const radioText = getRadioText();

  const handleSelect = (item, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [item]: value,
    });
  };

  return (
    <View style={styles.headerCard}>
      <View style={styles.wrapTextHeader}>
        <Text style={styles.textHeader}>{HeaderTitle}</Text>
      </View>
      <View style={styles.groupCardItemName}>
        {items.map((item, index) => (
          <View style={styles.cardGroup} key={index}>
            <Text style={styles.itemName}>{item}</Text>
            <View style={styles.wrapRadio}>
              <TouchableOpacity
                style={styles.radioBtn}
                onPress={() => handleSelect(item, 'yes')}>
                <View
                  style={
                    selectedOptions[item] === 'yes'
                      ? styles.activeCircle
                      : styles.inactiveCircle
                  }
                />
              </TouchableOpacity>
              <Text style={styles.radioText}>{radioText.yes}</Text>

              <TouchableOpacity
                style={styles.radioBtn}
                onPress={() => handleSelect(item, 'no')}>
                <View
                  style={
                    selectedOptions[item] === 'no'
                      ? styles.activeCircle
                      : styles.inactiveCircle
                  }
                />
              </TouchableOpacity>
              <Text style={styles.radioText}>{radioText.no}</Text>
            </View>
          </View>
        ))}
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.btnEdit}
            onPress={onEdit}>
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSave} onPress={() => onSave(selectedOptions)}>
            <Text style={styles.btnText}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardItemCategory;

const styles = StyleSheet.create({
  headerCard: {
    backgroundColor: '#2476b9',
    margin: screenWidth * 0.03, // Responsive margin
    borderRadius: 8,
    overflow: 'hidden',
  },
  wrapTextHeader: {
    justifyContent: 'center',
    padding: screenWidth * 0.03, // Dynamic padding
  },
  textHeader: {
    color: '#FFFFFF',
    fontFamily: fonts.primary[400],
    fontSize: screenWidth * 0.05, // Dynamic font size
    left: 12,
  },
  groupCardItemName: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: screenWidth * 0.03,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: '#2476b9'
  },
  cardGroup: {
    backgroundColor: '#e7e5e5',
    width: '90%', // Percentage-based width for responsiveness
    borderRadius: 4,
    padding: screenWidth * 0.03,
    marginBottom: screenWidth * 0.02, // Dynamic margin
  },
  itemName: {
    color: '#000',
    fontFamily: fonts.primary[400],
    fontSize: screenWidth * 0.04, // Dynamic font size
  },
  wrapRadio: {
    paddingVertical: screenWidth * 0.02, // Dynamic padding
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * 0.06, // Dynamic size
    height: screenWidth * 0.06,
    borderRadius: screenWidth * 0.03,
    borderColor: '#1f5480',
    borderWidth: 1,
    marginRight: screenWidth * 0.02,
  },
  radioText: {
    paddingHorizontal: screenWidth * 0.03,
    fontFamily: fonts.primary[400],
    fontSize: screenWidth * 0.04,
    color: '#000',
  },
  activeCircle: {
    backgroundColor: '#1f5480',
    width: screenWidth * 0.04, // Dynamic size
    height: screenWidth * 0.04,
    borderRadius: screenWidth * 0.02,
  },
  inactiveCircle: {
    width: screenWidth * 0.03,
    height: screenWidth * 0.03,
    borderRadius: screenWidth * 0.015,
  },
  
  // Updated actionButtons style to align buttons to the right
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align buttons to the right
    width: '100%',
    paddingVertical: screenWidth * 0.02,
    paddingRight: screenWidth * 0.05, // Add some padding on the right
  },
  btnSave: {
    backgroundColor: '#1f5480',
    paddingHorizontal: screenWidth * 0.07,
    paddingVertical: screenWidth * 0.03,
    borderRadius: 4,
    alignItems: 'center',
    marginLeft: screenWidth * 0.02, // Space between buttons
  },
  btnEdit: {
    backgroundColor: '#ffc107',
    paddingHorizontal: screenWidth * 0.07,
    paddingVertical: screenWidth * 0.03,
    borderRadius: 4,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontFamily: fonts.primary[400],
    fontSize: screenWidth * 0.045, // Dynamic font size
    textAlign: 'center',
  },
});


