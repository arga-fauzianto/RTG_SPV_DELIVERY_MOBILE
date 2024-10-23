import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors, fonts } from '../../utils';
import { IcTruck, IlBackground } from '../../assets';
import { Card, Gap } from '../../components';
import MMKVStorage from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize();
const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    if (hours >= 5 && hours < 12) {
      setTimeOfDay('pagi');
    } else if (hours >= 12 && hours < 15) {
      setTimeOfDay('siang');
    } else if (hours >= 16 && hours < 17) {
      setTimeOfDay('Sore');
    } else {
      setTimeOfDay('Malam');
    }

    setCurrentDate(` ${day} ${month} ${year}`);

    // Ambil data user dari MMKV

    const storedUserData = MMKV.getString('User');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <SafeAreaView style={styles.coverContent}>
      <ImageBackground source={IlBackground} style={styles.backgroundCover}>
        <View style={styles.headerContent}>
          <View style={styles.wrapSubHeader}>
            <IcTruck />
            <Text style={styles.subText}>RTG SPV DELIVERY</Text>
          </View>
        </View>
        <Gap height={25} />
        <Text style={styles.textWelcome}>Selamat {timeOfDay}</Text>
        <Gap height={5} />
        <Text style={styles.textNamaProfile}>{userData ? userData.nama : 'User'}</Text>
        <Gap height={4} />
        <Text style={styles.textDetail}>{userData ? userData.nik : 'N/A'} - {userData ? userData.lokasi : 'N/A'}</Text>
        <View style={styles.wrapCard}>
          <Card title="Checlist Armada" type="checklist" desc="Cek armada rutin untuk keselamatan kita semua!" />
          <Card title="History Checklist" type="history" desc="Lihat riwayat checklist agar tidak ada yang terlewat!" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  coverContent: {
    flex: 1,
    backgroundColor: "#ffff"
  },

  backgroundCover: {
    height: height * 0.35,
    padding: 25,
    flex: 1,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapSubHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subText: {
    fontFamily: fonts.primary[600],
    left: 8,
    fontSize: 17,
    color: colors.grow
  },
  textWelcome: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: colors.grow
  },
  textNamaProfile: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.grow
  },
  textDetail: {
    fontFamily: fonts.primary[400],
    fontSize: 20,
    color: colors.grow
  },
  wrapCard: {
    top: 115,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})