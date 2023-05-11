<template>
  <div class="user">
    <div class="search">
      <input
        type="text"
        placeholder="Tìm Kiếm..."
        v-model="searchProduct"
        @keyup.enter="onSearch()"
        @input="searchText($event)"
      />
      <span><i class="fa fa-magnifying-glass" @click="onSearch()"></i></span>
    </div>
    <div class="username">
      <a
        ><i class="fa-solid fa-circle-user"></i>&nbsp;{{
          this.store.auth.user?.fullname
        }}</a
      >
    </div>
    <ul class="hover-user">
      <li>
        <router-link to="/thong-tin-tai-khoan"
          ><i class="fa-light fa-file-invoice"></i>&nbsp;Thông tin tài
          khoản</router-link
        >
      </li>
      <li href="/thay-doi-mat-khau">
        <router-link to="thay-doi-mat-khau"
          ><i class="fa-solid fa-key"></i>&nbsp;Đổi mật khẩu</router-link
        >
      </li>
      <li @click="handleLogOut">
        <i class="fa fa-arrow-right-from-bracket"></i>&nbsp;Đăng xuất
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUsersStore } from "../../stores/users";
import { useProductsStore } from "../../stores/products";
export default {
  data() {
    return {
      store: useUsersStore(),
    };
  },
  //lấy thông tin đăng nhập
  async created() {
    // console.log('object',this.store.auth.user);
    if (this.useUsersStore.auth.user.is_admin === true) {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      const userData = localStorage.getItem("user");
      if (!isLoggedIn && !userData) {
        this.$router.push({ path: "/login" });
      }
    } else {
      this.$router.push({ path: "/home" });
    }
  },
  methods: {
    ...mapActions(useUsersStore, ["logout", "getUsers"]),
    ...mapActions(useProductsStore, ["getProducts"]),

    //tim kiem
    async onSearch() {
      console.log("search", this.params);
      this.params.keyword = this.searchProduct;
      await this.getProducts(this.params);
      await this.getUsers(this.params);
      this.showSearches = false;
    },
    async searchText(event) {
      let value = event.target.value;
      console.log(value);
      if (value === "") {
        this.onSearch();
      }
    },

    // đăng xuất
    handleLogOut() {
      this.logout();
      this.$router.push({ path: "/login" });
    },
  },
  computed: {
    ...mapState(useProductsStore, ["allProducts", "params"]),
    ...mapState(useUsersStore, ["allUsers"]),
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  .username {
    padding: 1em;
    height: 100%;
    cursor: pointer;
    right: 22px;
    i {
      margin-top: 8px;
    }
    &:hover + .hover-user {
      display: block;
    }
  }
  .hover-user {
    position: absolute;
    display: none;
    list-style: none;
    padding: 10px;
    margin-top: 2.5rem;
    transform: translateX(16rem);
    li {
      padding-bottom: 10px;
      // left: 23px;
    }
    &:hover {
      display: block;
    }
    a:hover {
      display: block;
      color: #f28902;
      cursor: pointer;
    }
    li:hover {
      display: block;
      color: #f28902;
      cursor: pointer;
    }
  }
  .search {
    padding: 1em;
    margin-right: 2rem;
    height: 100%;
    display: flex;
    input {
      height: 1.8rem;
      padding: 1px 6px;
      border: 1px solid #ccc;
    }
    span {
      border-radius: 0 13px 13px 0;
      background: #ccc;
      width: 1.6rem;
      height: 1.8rem;
      i {
        padding-left: 4px;
        transform: translateY(5px);
      }
    }
  }
}
</style>
