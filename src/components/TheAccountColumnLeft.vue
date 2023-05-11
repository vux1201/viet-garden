<template>
  <div class="account-col">
    <h2>
      <i> <img src="https://vuoncayviet.com/img/user2-160x160.jpg" /></i>
      <p>{{ auth.user?.fullname }}</p>
    </h2>
    <ul class="select">
      <li>
        <router-link to="/thong-tin-tai-khoan">Thông tin cá nhân</router-link>
      </li>
      <li>
        <router-link to="/thay-doi-mat-khau">Đổi mật khẩu</router-link>
      </li>
      <li>
        <router-link to="don-hang-cua-toi">Đơn Hàng Của Tôi</router-link>
      </li>
      <li>
        <router-link to="/home">Thoát</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useUsersStore } from "../stores/users";
export default {
  data() {
    return {
      store: useUsersStore(),
    };
  },
  methods: {},
  computed: {
    ...mapState(useUsersStore, ["auth"]),
  },
};
</script>

<style lang="scss" scoped>
.account-col {
  width: 300px;
  height: max-content;
  margin-right: 20px;
  float: left;
  border: 1px solid #ddd;
  h2 {
    display: flex;
    font-size: 16px;
    background: #ddd;
    i img {
      width: 70px;
      border-radius: 100%;
      overflow: hidden;
      padding: 3px;
    }
    p {
      top: 26px;
      height: 35px;
      padding: 0 10px;
    }
  }
  ul {
    padding: 15px;
    li {
      width: 100%;
      float: left;
      .sticky {
        color: #f28902;
      }
      a:hover {
        color: #f28902;
      }
      a {
        border-bottom: 1px dashed #ccc;
        padding: 10px;
        display: block;
      }
    }
  }
}
</style>
