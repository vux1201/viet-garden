import { defineStore } from "pinia";
import { api, authApi } from "../apis/instances";

export const useOrderStore = defineStore("orders", {
  state: () => ({
    allOrders: [],
    admGetAllOrders: [],
    getOderId: {},
    orders: {},
  }),
  actions: {
    async getOrders() {
      const res = await authApi.get("/orders/me");
      if (res.status === 200) {
        this.allOrders = res.data;
      }
    },
    // xem don hang
    async getOder(id) {
      const res = await authApi.get(`/orders/${id}`);
      if (res.status === 200) {
        this.getOderId = res.data;
      }
    },
    async putOder(id_order, status) {
      const res = await authApi.put(`/orders/${id_order}`, { status });
      if (res.status === 200) {
        console.log(status, "tus");
        this.getOderId = res.data;
      }
    },
    async addOrder(orders) {
      try {
        const res = await authApi.post("/orders/me",  orders );
        if (res.status === 200) {
          this.orders = res.data;
          console.log("orders", res.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getAllOrders(skip, limit) {
      try {
        const res = await authApi.get(`/orders/?skip=${skip}&limit=${limit}`);
        if (res.status === 200) {
          this.admGetAllOrders = res.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
