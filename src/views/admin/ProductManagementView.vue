<template>
  <div class="content">
    <!-- Hiển thị sản phẩm -->
    <div class="show-products" v-if="show == false">
      <div class="head">
        <div class="title1">Quản lý sản phẩm</div>
        <userSearch></userSearch>
      </div>
      <button class="btn-adduser" href="#edit" @click="addProducts">
        <i class="fa-light fa-circle-plus"></i>&nbsp;Thêm sản phẩm
      </button>
      <table class="container">
        <thead>
          <th>Id sản phẩm</th>
          <th>Tên sản phẩm</th>
          <th>Hình ảnh</th>
          <th>Giá sản phẩm</th>
          <th>Số lượng</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr v-for="(product, i) in allProducts" :key="i">
            <td>#{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>
              <img
                style="width: 200px; height: 200px"
                :src="product.product_images[0].image_path"
              />
            </td>
            <td>{{ totalPrice(product.price) }}</td>
            <td>{{ product.inventory }}</td>
            <td>
              <a @click="addProducts"
                ><i
                  class="fa fa-file-pen"
                  title="edit"
                  @click="idProduct(product)"
                ></i
              ></a>
              <a
                ><i
                  @click="handleDelete(product.id)"
                  class="fa-regular fa-trash-can"
                  title="delete"
                  style="--fa-primary-color: crimson"
                ></i
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="totalPages"
          rounded="circle"
          @update:modelValue="updatePage(page, size)"
        >
        </v-pagination>
      </div>
    </div>
    <!-- thêm sản phẩm -->
    <div class="show-addProducts" v-if="show == true">
      <form>
        <h2 class="title1">Thông tin sản phẩm</h2>
        <!--  -->
        <div class="form-input">
          <label>Nhóm danh mục <a title="trường bắt buộc">(*)</a></label>
          <div class="form-categories" v-if="!this.id_product">
            <select
              class="category-groups"
              v-model="modal"
              @change="idGroup(modal.categories)"
            >
              <option disabled selected>Vui lòng chọn nhóm danh mục !</option>
              <option
                v-for="(item, i) in allCategory.results"
                :key="i"
                :value="item"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="form-categories" v-else>
            <p>{{ this.newProduct?.name_group }}</p>
          </div>
        </div>
        <!--  -->
        <div class="form-input">
          <label>Loại sản phẩm <a title="trường bắt buộc">(*)</a></label>
          <div class="form-categories" v-if="!this.id_product">
            <select
              class="categories"
              v-model="modal"
              @change="idCategory(modal.id)"
            >
              <option disabled selected>Vui lòng chọn danh mục !</option>
              <option v-for="(item, i) in valCategory" :key="i" :value="item">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="form-categories" v-else>
            <p>{{ this.name_category }}</p>
          </div>
        </div>
        <!--  -->
        <div class="form-input">
          <label>Tên sản phẩm <a title="trường bắt buộc">(*)</a></label>
          <input type="text" v-model="this.newProduct.name" required />
        </div>
        <!--  -->
        <div class="form-input">
          <label>Hình ảnh <a title="trường bắt buộc">(*)</a></label>
          <div class="list-img">
            <div class="img" v-for="(image, index) in images" :key="index">
              <img
                :src="
                  image ||
                  'https://www.namepros.com/attachments/empty-png.89209/'
                "
              />
              <button class="btn-del-img" @click="remoteImage(index)">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <input
            style="border: none; top: -1px"
            accept="image/*"
            type="file"
            @change="changeImage"
            multiple
            required
          />
        </div>
        <!--  -->
        <div class="form-input">
          <label>Mô tả <a title="trường bắt buộc">(*)</a></label>
          <textarea
            type="text"
            v-model="this.newProduct.summary"
            required
          ></textarea>
        </div>
        <!--  -->
        <div class="form-input">
          <label>Chi tiết <a title="trường bắt buộc">(*)</a></label>
          <textarea
            type="text"
            v-model="this.newProduct.detail"
            required
          ></textarea>
        </div>
        <!--  -->
        <div class="form-input">
          <label>Số lượng hàng <a title="trường bắt buộc">(*)</a></label>
          <input type="number" v-model="this.newProduct.inventory" required />
        </div>
        <!--  -->
        <div class="form-input">
          <label>Giá sản phẩm <a title="trường bắt buộc">(*)</a></label>
          <input type="number" v-model="this.newProduct.price" required />
        </div>
        <div class="footer">
          <button
            class="btn-adduser"
            type="submit"
            @click="createNewProduct"
            v-if="!this.id_product"
          >
            Lưu
          </button>
          <button
            class="btn-adduser"
            type="submit"
            @click="updateNewProduct"
            v-else
          >
            Cập nhật
          </button>
          <button class="btn-adduser" type="reset" @click="addProducts">
            Hủy
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import userSearch from "./UserSearch.vue";
import { mapState, mapActions } from "pinia";
import { useProductsStore } from "../../stores/products";
export default {
  data() {
    return {
      page: 1,
      size: 6,
      show: false,
      uploadImg: null,
      newImage: "",
      images: [], // khi ảnh hiển thị thì ảnh có trong này rồi
      store: useProductsStore,
      valCategory: [],
      newProduct: {
        category_id: "",
        name: "",
        price: "",
        inventory: "",
        summary: "",
        detail: "",
      },
      id_product: "",
      name_category: "",
    };
  },
  //hien thi thong tin
  async created() {
    try {
      this.params.page = this.page;
      this.params.size = this.size;
      await this.getProducts(this.params);
      await this.getCategories(this.params);
      // console.log("product", this.allProducts[0].product_images[0].image_path);
      console.log(this.allCategory, "pro");
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    ...mapActions(useProductsStore, [
      "getProducts",
      "getCategories",
      "uploadImage",
      "postProducts",
      "putProducts",
      "deleteProduct",
    ]),
    addProducts() {
      this.show = !this.show;
    },
    //lay thong tin group
    idGroup(categories) {
      console.log("id-cre", categories);
      this.valCategory = categories;
    },
    //lay id category
    idCategory(id) {
      console.log("id-cate", id);
      this.newProduct.category_id = id;
    },
    //update anh
    changeImage(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files);
      this.uploadImg = files;
      console.log(files, "filess");
    },
    createImage(files) {
      var vm = this;
      for (var index = 0; index < files.length; index++) {
        var reader = new FileReader();
        reader.onload = function (event) {
          const imageUrl = event.target.result;
          vm.images.push(imageUrl);
        };
        reader.readAsDataURL(files[index]);
      }
    },
    remoteImage(index) {
      this.images.splice(index, 1);
    },

    //Lưu thông tin them sp
    async createNewProduct() {
      try {
        let images;
        const cb = (data, image_path) => {
          images = { ...data, product_images: [{ image_path }] };
          return;
        };
        await this.uploadImage(this.uploadImg, { ...this.newProduct }, cb);
        console.log(images, "this.newProduct.image_path");
        await this.postProducts(images);
        // alert("Thêm thành công!");
        console.log(1);
      } catch (error) {
        console.log(error);
      }
    },

    // lay id pro update
    idProduct(product) {
      this.id_product = product.id;
      this.name_category = product.category?.name;
      this.newProduct.category_id = product.category?.id;
      this.newProduct.name = product.name;
      this.newProduct.price = product.price;
      this.newProduct.inventory = product.inventory;
      this.newProduct.summary = product.summary;
      this.newProduct.detail = product.detail;
      console.log(product, "id_upPro");
      console.log(this.name_category, "new");
    },

    //sua thong tin sp
    async updateNewProduct() {
      try {
        let images;
        const cb = (data, image_path) => {
          images = { ...data, product_images: [{ image_path }] };
          return;
        };
        await this.uploadImage(this.uploadImg, { ...this.newProduct }, cb);
        console.log(images, "this.newProduct.image_path");
        await this.putProducts(this.id_product, images);
        // await this.getProduct(this.params);
        // alert("Thêm thành công!");
        console.log(1.1);
      } catch (error) {
        console.log(error);
      }
    },

    // xóa phần tử
    async handleDelete(id) {
      try {
        if (confirm("Bạn có chắc muốn xóa") == true) {
          await this.deleteProduct(id);
          this.params.page = this.page;
          this.params.size = this.size;
          await this.getProduct(this.params);
        } else {
          return 0;
        }
      } catch (error) {
        console.log("không thể xóa");
      }
      // console.log("id-dele", id);
    },

    // phan trang
    async updatePage(page, size) {
      try {
        // console.log('page',page);
        // console.log('size',size);
        this.params.page = page;
        this.params.size = size;
        await this.getProducts(this.params);
      } catch (error) {
        console.log(error);
      }
    },

    // doi tien
    totalPrice(price) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(price);
    },
  },
  computed: {
    ...mapState(useProductsStore, [
      "params",
      "totalProduct",
      "image_path",
      "allProducts",
      "allCategory",
    ]),
    totalPages() {
      let number = this.totalProduct.total / this.size;
      // console.log(number, "number");
      return Math.ceil(number);
    },
  },
  components: {
    userSearch,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/FormManagement.scss";
.form-input textarea {
  border: 1px solid #ccc;
  width: 50rem;
  height: 10rem;
  padding: 5px;
  margin: 0.8rem 1rem 3px 0;
}
.form-categories p {
  padding: 5px 6px;
}
</style>
