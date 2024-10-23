import { MMKV } from 'react-native-mmkv';

const mmkv = new MMKV();

export const storeData = async (key, value) => {
    mmkv.set(key, value);
};

export const getData = async (key) => {
    return mmkv.getString(key);
};

export const removeData = async (key) => {
    mmkv.delete(key);
};
