<template>
  <div class="content">
    <!-- Hiển thị sản phẩm -->
    <div class="show-products" v-if="show == false">
      <div class="head">
        <div class="title1">Quản lý danh mục</div>
        <userSearch></userSearch>
      </div>
      <button class="btn-adduser" href="#edit" @click="showAddProducts">
        <i class="fa-light fa-circle-plus"></i>&nbsp;Thêm danh mục
      </button>
      <table class="container">
        <thead>
          <tr>
            <th style="width: 20%">Loại sản phẩm</th>
            <th style="width: 20%">Nhóm danh mục</th>
            <th>Mô tả</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="(item, i) in allCategory.results" :key="i" :value="item">
          <tr v-for="(categories, i) in item.categories" :key="i">
            <td>{{ categories.name }}</td>
            <td>{{ item.name }}</td>
            <td style="text-align: justify">
              Các loại cây cảnh để bàn với nhiều kiểu dáng và kích thước khác
              nhau, giúp thanh lọc không khí, tạo không gian sống và làm việc
              tràn đầy năng lượng.
            </td>
            <td>
              <a @click="idCategory(categories, item)"
                ><i
                  @click="showAddProducts"
                  class="fa fa-file-pen"
                  title="edit"
                ></i
              ></a>
              <a @click="handleDelete(categories.id)"
                ><i class="fa-regular fa-trash-can" title="delete"></i
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <div class="text-center">
        <v-pagination
          v-model="page"
          :length="3"
          rounded="circle"
          @update:modelValue="updatePage(page, size)"
        ></v-pagination>
      </div> -->
    </div>
    <!-- thêm sản phẩm -->
    <div class="show-addProducts" v-if="show == true">
      <form>
        <h2 class="title1">Thông tin danh mục</h2>
        <!--  -->
        <div class="form-input">
          <label>Nhóm danh mục <a title="trường bắt buộc">(*)</a></label>
          <div class="form-categories" v-if="!dataCategories.id">
            <select
              class="category-groups"
              v-model="modal"
              @change="idGroup(modal.id)"
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
            <p>{{ this.dataCategories.nameGroup }}</p>
          </div>
        </div>
        <!--  -->
        <div class="form-input">
          <label>Loại sản phẩm <a title="trường bắt buộc">(*)</a></label>
          <input type="text" autocomplete="on" v-model="dataCategories.name" />
        </div>
        <!--  -->
        <div class="form-input">
          <label>Mô tả <a title="trường bắt buộc">(*)</a></label>
          <textarea class="summary" required></textarea>
        </div>
        <div class="footer">
          <button
            class="btn-adduser"
            @click="createCategories"
            v-if="!dataCategories.id"
          >
            Thêm
          </button>
          <button class="btn-adduser" @click="putCategories" v-else>
            Cập nhật
          </button>
          <button class="btn-adduser" type="reset" @click="showAddProducts">
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
      size: 30,
      show: false,
      store: useProductsStore,
      modal: [],
      dataCategory: [],
      // dataCategorieGroup: {
      //   name: "",
      // },
      dataCategories: {
        id: "",
        name: "",
        nameGroup: "",
        category_group_id: "",
      },
      // summary: "",
    };
  },

  //hien thi thong tin
  async created() {
    try {
      this.params.page = 1;
      this.params.size = 10;
      await this.getCategories(this.params);
      console.log(this.allCategory, "allCate");
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    ...mapActions(useProductsStore, [
      "getCategories",
      "getCategory",
      "postCategoryGroup",
      "postCategories",
      "updateCategories",
      "deleteCategories",
    ]),
    // addnew view
    showAddProducts() {
      this.show = !this.show;
    },
    //lay id group
    idGroup(id) {
      console.log("id-cre", id);
      this.dataCategories.category_group_id = id;
    },
    // them thu muc
    async createCategories() {
      try {
        let data = {
          category_group_id: this.dataCategories.category_group_id,
          name: this.dataCategories.name,
        };
        console.log("categories", data);
        await this.postCategories(data);
      } catch (error) {
        console.log("err create");
      }
    },

    //lay id cactegory
    idCategory(categories, item) {
      console.log("id-update", categories.id, categories.name, item.name);
      this.dataCategories.id = categories.id;
      this.dataCategories.name = categories.name;
      this.dataCategories.nameGroup = item.name;
    },

    // update thong tin
    async putCategories() {
      try {
        // let data = {
        //   category_group_id: this.dataCategories.id,
        //   name: this.dataCategories.name,
        // };
        // console.log(data, "update");
        await this.updateCategories(
          this.dataCategories.id,
          this.dataCategories.name
        );
        // this.show = true;
      } catch (error) {
        console.log("err update");
      }
    },

    // delete categories
    async handleDelete(id) {
      console.log("id-dele", id);
      if (confirm("Bạn có chắc muốn xóa") == true) {
        try {
          await this.deleteCategories(id);
          this.params.page = this.page;
          this.params.size = this.size;
          await this.getCategories(this.params);
        } catch (error) {
          console.log("ko the xoa");
        }
      } else {
        return 0;
      }
    },

    // phan trang
    async updatePage(page, size) {
      try {
        this.params.page = page;
        this.params.size = size;
        console.log(size, "size");
        await this.getCategory(this.params);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState(useProductsStore, ["params", "allCategory"]),
  },
  components: {
    userSearch,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/FormManagement.scss";
.summary {
  border: 1px solid #ccc;
  width: 50rem;
  height: 10rem;
  padding: 3px 6px;
}
.form-categories p {
  padding: 5px;
}
::v-deep .v-application__wrap {
  min-height: 50px;
}
</style>
