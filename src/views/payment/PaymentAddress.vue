<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="payment-address">
    <section class="sub-bg">
      <div class="container">
        <div class="sub-head">
          <a href="/home"><i class="fa fa-home"></i>Trang chủ </a>
          <span> Thông tin giao hàng</span>
        </div>
      </div>
    </section>
    <div class="bg-dark" style="padding-top: 20px">
      <div class="container">
        <div class="content-page">
          <div class="title-signin">
            <h2>Thông tin giao hàng</h2>
          </div>
          <div class="part-buy">
            <ul>
              <li class="left active">
                <h4>Đăng nhập</h4>
                <span>1</span>
                <div class="part-line"></div>
              </li>
              <li class="mid active">
                <h4>Địa chỉ giao hàng</h4>
                <span>2</span>
                <div class="part-line"></div>
              </li>
              <li class="right">
                <h4>Thanh Toán</h4>
                <span>3</span>
                <div class="part-line"></div>
              </li>
            </ul>
          </div>
          <div class="content-payment">
            <div class="col-signin-left address-delivery">
              <h3>Thông tin giao hàng</h3>
              <p style="color: #f00"></p>
              <ul>
                <li>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-user"></i>
                    </div>
                    <input
                      type="text"
                      v-model="this.auth.user.fullname"
                      class="form-control"
                      placeholder="Nhập họ &amp; tên"
                    />
                  </div>
                </li>
                <li>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-phone"></i>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="this.auth.user.phone_number"
                    />
                  </div>
                </li>
                <li>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-home"></i>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="this.auth.user.address"
                    />
                  </div>
                </li>
              </ul>
              <div class="button-signin">
                <router-link to="/PayView">
                  <button>
                    <i class="fa-solid fa-floppy-disk"></i>&nbsp;Tiếp tục
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUsersStore } from "../../stores/users";
export default {
  data() {
    return {};
  },

  async created() {
    try {
      await this.getProfile();
      console.log(this.auth.user, "user");
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    ...mapActions(useUsersStore, ["getProfile"]),
  },
  computed: {
    ...mapState(useUsersStore, ["auth"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/payment.scss";

.content-payment {
  width: auto;
  padding: 20px;
  margin-left: 25%;
  float: left;
  margin-top: 20px;
  .address-delivery h3 {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 0 0 6px 3px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
