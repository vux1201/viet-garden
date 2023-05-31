<template>
  <div class="manage-user">
    <div class="sidenav">
      <h2 class="logo">
        <router-link to="home"
          ><i class="fa-light fa-seedling"></i>&nbsp;Vườn Cây Việt</router-link
        >
      </h2>
      <ul style="top: 20px">
        <v-tabs v-model="tab" direction="vertical" color="error">
          <router-link to="/quan-ly-nguoi-dung">
            <v-tab value="option-1">
              <i class="fa-solid fa-user"></i>&nbsp;Quản lý người dùng
            </v-tab>
          </router-link>
          <router-link to="/quan-ly-danh-muc">
            <v-tab value="option-2">
              <i class="fa fa-solid fa-clipboard-list"></i>&nbsp;Quản lý danh
              mục
            </v-tab>
          </router-link>
          <router-link to="/quan-ly-san-pham">
            <v-tab value="option-3">
              <i class="fa fa-list-check"></i>&nbsp;Quản lý sản phẩm
            </v-tab>
          </router-link>
          <router-link to="/quan-ly-don-hang">
            <v-tab value="option-4">
              <i class="fa-solid fa-cart-shopping"></i>&nbsp;Quản lý đơn hàng
            </v-tab>
          </router-link>
          <div>
            <v-tab value="option-5">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;Đăng
              xuất
            </v-tab>
          </div>
        </v-tabs>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useUsersStore } from "../stores/users";
export default {
  data() {
    return {
      store: useUsersStore,
      tab: "option-1",
    };
  },
  methods: {
    ...mapActions(useUsersStore, ["logout"]),
    handleLogout() {
      this.logout();
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.manage-user {
  display: flex;
  --spacing: 10px;
}
.sidenav {
  width: 30%;
  max-width: 275px;
  height: 100vh;
  min-height: 47rem;
  color: #fff;
  position: fixed;
  background: #3daa12;
  padding: 20px;
  .logo {
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid #fff;
    border-bottom: 3px solid #fff;
    a {
      color: #fff;
    }
  }
  ul div {
    list-style: none;
    color: #000;
    // &:hover {
    //   color: #000;
    //   background: #e6dddd;
    //   transition: 0.5s ease;
    //   border-radius: 6px;
    // }
  }
  .setting {
    cursor: pointer;
    .select-setting {
      display: none;
      li {
        width: 180px;
      }
      .btn-logout {
        top: -10px;
        padding: 10px;
        margin: 8px 16px;
        width: 180px;
        text-align: left;
        &:hover {
          color: #000;
          background: #e6dddd;
          transition: 0.5s ease;
          border-radius: 6px;
        }
      }
    }
    &:hover {
      background: none;
      color: #fff;
      .select-setting {
        display: block;
      }
    }
  }
}
::v-deep .v-tab--selected .v-tab__slider {
  opacity: 0;
}
</style>
