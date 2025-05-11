import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  
  getters: {
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    
    totalAmount: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  },
  
  actions: {
    addItem(item) {
      const existingItem = this.items.find(i => i.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.items.push({ ...item });
      }
    },
    
    updateQuantity(itemId, quantity) {
      const item = this.items.find(i => i.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
    
    removeItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    },
    
    clearCart() {
      this.items = [];
    }
  },
  
  persist: true
});