import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { CardItemCategory, Header } from '../../components';


const FormCheckListScreen = () => {
  // State untuk menyimpan daftar kategori dan item yang akan dilooping
  const [categories, setCategories] = useState([
    {
      id: 0,
      HeaderTitle: 'Document',
      items: ['STNK', 'SIM', 'KEUR'],
    },
    {
      id: 1,
      HeaderTitle: 'Body',
      items: [
        'PENYOK KABIN KECIL & GORESAN (<10 CM)', 
        'PENYOK KABIN SEDANG (11 s/d 30 CM)', 
        'PENYOK Kabin BERAT (> 30 CM)', 
        'PECAH/RETAK MIKA SEN KANAN', 
        'PECAH/RETAK MIKA SEN KIRI',
        'PATAH / BENGKOK GAGANG SPION KANAN',
        'PATAH / BENGKOK GAGANG SPION KIRI',
        'SEATBELT DRIVER TIDAK ADA',
        'SEATBELT HELPER TIDAK ADA'
      ],
    },
    // Tambahkan kategori lain jika diperlukan
  ]);

  const handleSave = (selectedOptions) => {
    // Logika untuk aksi simpan
    Alert.alert('Data Saved', JSON.stringify(selectedOptions));
  };

  const handleEdit = () => {
    // Logika untuk aksi edit
    Alert.alert('Edit Mode', 'Now you can edit the checklist.');
  };

  return (
    <SafeAreaView style={styles.content}>
      <Header title= 'Form Checklist '/>
      <ScrollView>
        {/* Looping untuk setiap kategori */}
        {categories.map((category) => (
          <CardItemCategory
            key={category.id}
            HeaderTitle={category.HeaderTitle}
            items={category.items}
            onSave={''}
            onEdit={''}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormCheckListScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
});
