import { defineStore } from "pinia";
import { api, authApi } from "../apis/instances";

interface CategoryGroups {
  id: number;
  name: string;
}

interface Categories {
  category_group_id: number;
  name: string;
  category_groups: CategoryGroups[];
}

interface Image {
  id: number;
  image_path: string;
}

interface Product {
  category_id: number;
  name: string;
  price: number;
  inventory: number;
  summary: "string";
  detail: "string";
  categories: Categories[];
  images: Image[];
}

interface ParamsGetProduct {
  keyword?: string;
  category_id?: number[];
  page?: number;
  size?: number;
}

enum ProductTypes {
  ALL = 0,
  TOP_SELLER = 2,
}

export const useProductsStore = defineStore("products", {
  state: () => ({
    allProducts: [] as Product[],
    topSellerProducts: [] as Product[],
    allCategory: [] as Categories[],
    params: {} as ParamsGetProduct,
    detailProduct: [] as Product[],
    totalProduct: Number,
    image_path: [],
  }),

  actions: {
    // get categorise
    async getCategories(params: ParamsGetProduct) {
      try {
        const res = await api.get(
          `/category-groups/?page=${params.page}&size=${params.size}`,
          { params }
        );
        if (res.status === 200) {
          this.allCategory = res.data;
          // console.log("getCategories", res.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getCategory(params: ParamsGetProduct) {
      try {
        const res = await api.get(
          `/category-groups/categories?page=${params.page}&size=${params.size}`,
          { params }
        );
        if (res.status === 200) {
          this.allCategory = res.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    // phân trang
    // async paginatinon(params: ParamsGetProduct) {
    //   try {
    //   } catch (error) {}
    // },

    // create category group
    async postCategoryGroup(categorieGroup: String) {
      try {
        const res = await authApi.post(`/category-groups/`, categorieGroup);
        if (res.status === 200) {
          this.allCategory = res.data;
          // console.log("postCategoryGroup", res.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    // create categories
    async postCategories(categories: String) {
      try {
        const res = await authApi.post(
          `/category-groups/categories`,
          categories
        );
        if (res.status === 200) {
          this.allCategory = res.data;
          // console.log("postCategories", res.data);
        }
      } catch (error) {
        console.log(error);
      }
    },

    //update categories
    async updateCategories(id: Number, name: string) {
      console.log(name, "api");
      try {
        const res = await authApi.put(`/category-groups/categories/${id}`, {
          name,
        });
        if (res.status === 200) {
          this.allCategory = res.data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    //delete categories
    async deleteCategories(category_id: Number) {
      try {
        const res = await authApi.delete(
          `/category-groups/categories/${category_id}`
        );
        if (res.status === 200) {
          this.allCategory = res.data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    // get products
    async getProducts(params: ParamsGetProduct) {
      try {
        const res = await api.get(`/products/`, { params });
        if (res.status === 200) {
          this.allProducts = res.data.results;
          this.totalProduct = res.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    //lấy sp theo category
    async getProduct(params: ParamsGetProduct) {
      try {
        const res = await api.get(
          `/products/?category_id=${params.category_id}`,
          { params }
        );
        if (res.status === 200) {
          this.allProducts = res.data.results;
          this.totalProduct = res.data;
        }
      } catch (error) {
        console.error(error);
      }
    },

    //upoad image
    async uploadImage(image: any, data: any, cb: any) {
      console.log("upload image", image);
      var form = new FormData();
      form.append("file", image[0]);
      try {
        const res = await authApi.post("/products/uploadfile/", form);
        if (res.status === 200) {
          this.image_path = res.data;
          cb(data, res.data);
        }
      } catch (error) {
        console.log(error);
      }
    },

    // create product
    async postProducts(Product: String) {
      try {
        const res = await authApi.post(`/products/`, Product);
        if (res.status === 200) {
          this.allProducts = res.data;
          console.log("postProducts", res.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    // update product
    async putProducts(id: Number, Product: Object) {
      console.log("Product123", Product, id);
      try {
        const res = await authApi.put(`/products/${id}`, Product);
        if (res.status === 200) {
          // this.allProducts = res.data;
          // console.log("putProducts", res.data);
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    },
    // delete sp
    async deleteProduct(product_id: Number) {
      try {
        await authApi.delete(`/products/product_id/${product_id}`);
      } catch (error) {
        console.log(error);
      }
    },

    // chi tiết sản phẩm
    async DetailProduct(product_id: Number) {
      try {
        const res = await api.get(`/products/${product_id}`);
        if (res.status === 200) {
          this.detailProduct = res.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
