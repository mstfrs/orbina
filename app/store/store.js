import { create } from 'zustand';

export const useApiKeyStore = create((set) => ({
  apiKey: null, // Başlangıçta null
  setApiKey: (key) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('apiKey', key); // Sadece tarayıcıda ayarla
    }
    set({ apiKey: key }); // State'i güncelle
  },
  clearApiKey: () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('apiKey'); // Sadece tarayıcıda kaldır
    }
    set({ apiKey: null }); // State'i temizle
  },
}));
