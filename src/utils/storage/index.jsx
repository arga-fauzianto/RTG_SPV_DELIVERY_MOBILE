import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const storeData = async (key, value) => {
    storage.set(key, value);
};

export const getData = async (key) => {
    return storage.getString(key);
};

export const removeData = async (key) => {
    storage.delete(key);
};
