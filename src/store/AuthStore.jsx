import { atom } from 'jotai';
import { storeData, getData, removeData } from '../utils/storage';

// Atom untuk login state
export const loginAtom = atom(async () => {
    const savedUser = await getData('user'); // Ambil data user dari MMKV
    return savedUser ? JSON.parse(savedUser) : null; // Parsing JSON jika perlu
});

// Atom untuk autentikasi
export const authAtom = atom(async () => {
    const isAuthenticated = await getData('isAuthenticated'); // Ambil status autentikasi dari MMKV
    return isAuthenticated === 'true'; // Pastikan mengembalikan boolean
});

// Setter atom untuk update login state
export const setLoginAtom = atom(null, async (get, set, newUser) => {
    set(loginAtom, newUser);
    await storeData('user', JSON.stringify(newUser)); // Simpan user ke MMKV
    await storeData('isAuthenticated', 'true'); // Simpan status autentikasi ke MMKV
});

// Logout atom untuk menghapus data
export const logoutAtom = atom(null, async (get, set) => {
    set(loginAtom, null);
    set(authAtom, false);
    await removeData('user'); // Hapus data user dari MMKV
    await removeData('isAuthenticated'); // Hapus status autentikasi dari MMKV
});
