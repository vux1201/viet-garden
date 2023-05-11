<template>
  <div class="manage-user">
    <div class="sidenav">
      <h2 class="logo">
        <router-link to="home"
          ><i class="fa-light fa-seedling"></i>&nbsp;Bosai shop</router-link
        >
      </h2>
      <ul>
        <router-link to="/quan-ly-nguoi-dung">
          <li>
            <i class="fa-solid fa-user"></i>&nbsp;User management
          </li></router-link
        >
        <router-link to="/quan-ly-san-pham">
          <li>
            <i class="fa fa-list-check"></i>&nbsp;Product management
          </li></router-link
        >
        <router-link to="/quan-ly-danh-muc">
          <li>
            <i class="fa fa-solid fa-clipboard-list"></i>&nbsp;Categories
            management
          </li></router-link
        >
        <router-link to="/quan-ly-don-hang">
          <li>
            <i class="fa-solid fa-cart-shopping"></i>&nbsp;Order management
          </li></router-link
        >
        <router-link to="#">
          <li>
            <i class="fa-solid fa-bell"></i>&nbsp;Notification
          </li></router-link
        >
        <li class="setting">
          <i class="fa-light fa-gear"></i>&nbsp; Setting
          <ul class="select-setting">
            <router-link to="/thong-tin-tai-khoan">
              <li>
                <i class="fa-light fa-file-invoice"></i>&nbsp;Thông tin đăng
                nhập
              </li></router-link
            >
            <router-link to="/thay-doi-mat-khau">
              <li>
                <i class="fa-solid fa-key"></i>&nbsp;Thay đổi mật khẩu
              </li></router-link
            >
            <button class="btn-logout" @click="handleLogout">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;Logout
            </button>
          </ul>
        </li>
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
  background: #6c6b7a;
  padding: calc(var(--spacing) * 2);
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
  li {
    margin: 1rem;
    padding: var(--spacing);
    list-style: none;
    color: #fff;
    &:hover {
      color: #000;
      background: #e6dddd;
      transition: 0.5s ease;
      border-radius: 6px;
    }
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
</style>
