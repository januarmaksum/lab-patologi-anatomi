import { create } from 'zustand';

const useStore = create((set) => ({
  userData: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userData')) : null,
  isAuthenticated: typeof window !== 'undefined' ? !!localStorage.getItem('userData') : false,
  setUserData: (data) => {
    set({ userData: data, isAuthenticated: !!data });
    if (typeof window !== 'undefined') {
      localStorage.setItem('userData', JSON.stringify(data));
    }
  },
  logout: () => {
    set({ userData: null, isAuthenticated: false });
    if (typeof window !== 'undefined') {
      localStorage.clear();
      document.cookie = "datauserlogin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  },
}));

export default useStore;