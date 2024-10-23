import { View, Text, ScrollView, SafeAreaView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { IlCompany, IlLogo } from '../../assets/illustration';
import { colors, fonts, useForm } from '../../utils';
import { Button, Gap, Input } from '../../components';
import { useAtom } from 'jotai';
import axios from 'axios';
import { API_URL } from '../../config/API';
import { setLoginAtom, authAtom } from '../../store/AuthStore';
import base64 from 'react-native-base64';
import MMKVStorage from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize();

const Login = () => {
    const [form, setForm] = useForm({ nik: '', password: '' });
    const [, setLogin] = useAtom(setLoginAtom);
    const [, setAuth] = useAtom(authAtom); // Status autentikasi
    const [validation, setValidation] = useState({ nik: true, password: true });
    const currentYear = new Date().getFullYear();

    const onSubmit = async () => {
        // Validasi input
        if (!form.nik || !form.password) {
            setValidation({ nik: !!form.nik, password: !!form.password });
            console.log('Nik dan password harus diisi!');
            return;
        }

        let username = 'admin';
        let adminPassword = 'Databa53';
        const authHeader = 'Basic ' + base64.encode(`${username}:${adminPassword}`);

        try {
            // API request untuk login
            const response = await axios.post(`${API_URL.url_staging}/login`, form, {
                headers: { Authorization: authHeader }
            });

            console.log('Response dari API:', response.data); // Logging response dari API

            if (response.data.data) {
                const userData = response.data.data;
                setLogin(userData); // Simpan di Jotai (state management)
                setAuth(true);      // Set status autentikasi

                // Simpan di MMKV
                MMKV.setString('userData', JSON.stringify(userData));
                MMKV.setBool('isLoggedIn', true);
                
                console.log('Login sukses, data tersimpan di Jotai dan MMKV:', JSON.stringify(userData));
            } else {
                console.log('Login gagal: Data dari API kosong atau null');
            }
        } catch (error) {
            console.error('Error saat login:', error.message); // Tangani error
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapLogo}>
                    <IlLogo />
                    <View style={styles.wrapHeader}>
                        <Text style={styles.textHeader}>Ready to Go:</Text>
                        <Text style={styles.textSubHeader}>SuperVisor Delivery</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.wrapContent}>
                        <Text style={styles.textHallo}>Hallo,</Text>
                        <Text style={styles.textWelcoming}>Selamat Datang</Text>
                    </View>
                    <Gap height={40} />
                    <KeyboardAvoidingView>
                        <Input
                            label="Nik Karyawan"
                            value={form.nik}
                            placeholder="Input Nik Karyawan"
                            onChangeText={(value) => {
                                setForm('nik', value);
                                setValidation(prevState => ({ ...prevState, nik: true }));
                            }}
                            style={{ borderColor: validation.nik ? colors.border : colors.fivetery }}
                        />
                        <Gap height={14} />
                        <Input
                            label="Password"
                            placeholder="Password"
                            value={form.password}
                            secureTextEntry={true}
                            onChangeText={(value) => {
                                setForm('password', value);
                                setValidation(prevState => ({ ...prevState, password: true }));
                            }}
                            style={{ borderColor: validation.password ? colors.border : colors.fivetery }}
                        />
                    </KeyboardAvoidingView>
                    <Gap height={35} />
                    <Button title="Masuk" onPress={onSubmit} />
                </View>
                <Gap height={40} />
                <View style={styles.wrapCopyRight}>
                    <IlCompany />
                    <Text style={styles.footer}>RTG SPV DELIVERY &copy; {currentYear} ICT Development</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};


export default Login;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 100,
        // backgroundColor: colors.primary
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFF'
        
    },
    wrapLogo: {
        top: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapHeader: {
        top: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 26,
        fontFamily: fonts.primary[400],
        color: "#000",
    },

    textSubHeader: {
        fontSize: 26,
        fontFamily: fonts.primary[600],
        color: "#000"
    },
    wrapContent: {
        padding: 10,
    },
    textHallo: {
        fontFamily: fonts.primary[600],
        fontSize: 35,
        color: "#000"
    },

    textWelcoming: {
        fontSize: 36,
        fontFamily: fonts.primary[600],
        color: "#000"
    },
    footer: {
        fontFamily: fonts.primary[400],
        fontSize: 12,
        color: "#000",
        top: 10,
      },
  
      wrapCopyRight: {
        margin: 5,
        flex: 1,
        top: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }
})