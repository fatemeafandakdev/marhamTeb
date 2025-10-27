import { create } from "zustand";

const useCreate = create((set) => ({
  products: [],

  // افزودن محصول
  addProduct: (product) =>
    set((state) => {
      const exist = state.products.find((item) => item.id === product.id);

      if (exist) {
        return {
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          ),
        };
      } else {
        return {
          products: [...state.products, { ...product, quantity: 1 }],
        };
      }
    }),

  // افزایش تعداد
  onIncrease: (id) =>
    set((state) => ({
      products: state.products.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  // کاهش تعداد و حذف اگر صفر شد
  onDecrease: (id) =>
    set((state) => ({
      products: state.products
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),

  // حذف کامل محصول
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((item) => item.id !== id),
    })),
}));

export default useCreate;
