import {create} from 'zustand';

export const useApiKeyStore = create((set) => ({
  apiKey: sessionStorage.getItem('apiKey') || null,
  setApiKey: (key) => {
    sessionStorage.setItem('apiKey', key);
    set({ apiKey: key });
  },
  clearApiKey: () => {
    sessionStorage.removeItem('apiKey');
    set({ apiKey: null });
  },
}));
