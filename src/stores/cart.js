import { defineStore } from "pinia";

import { api, authApi } from "../apis/instances";

export const useCartStore = defineStore("cart", {
  state: () => ({
    count: 0,
    cartValue: {
      product_variant_id: 0,
      qty: 0,
    },
    allCart: [],
    totalPrice: 0,
  }),
  actions: {
    async addCart(cartValue) {
      try {
        const res = await authApi.post("/cart-products/me", cartValue);
        if (res.status === 200) {
          this.cartValue = res.data;
          this.getCarts();
        }
        // console.log('addCart', res);
      } catch (error) {
        console.log(error);
      }
    },

    async getCarts() {
      try {
        const res = await authApi.get("/cart-products/me");
        if (res.status === 200) {
          this.allCart = res.data;
          this.count = res.data.length;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async updateCart(id, cartValue) {
      try {
        const res = await authApi.put(`/cart-products/me/${id}`, cartValue);
        console.log("updateCart", res.data);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteCart(id) {
      try {
        const res = await authApi.delete(`/cart-products/me/${id}`);
        console.log("deleteCart", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    
  },
});
