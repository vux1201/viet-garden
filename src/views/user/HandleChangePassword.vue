<template>
  <div class="change-password">
    <section class="sub-bg">
      <div id="link" class="container">
        <div class="sub-head" style="top: 15px">
          <a href="https://vuoncayviet.com"
            ><i class="fa fa-home"></i>Trang chủ
          </a>
          <span> Thay đổi mật khẩu</span>
        </div>
      </div>
    </section>
    <section class="bg-dark">
      <div class="container">
        <form class="content-page" @submit.prevent="updateProfile">
          <div class="title-signin">
            <h2>Thông tin tài khoản</h2>
          </div>
          <div class="content-payment">
            <accountColLeft></accountColLeft>
            <div class="account-content">
              <div class="account-main formcus-cart">
                <h3 class="text-center">Thay đổi mật khẩu</h3>
                <div class="form-group">
                  <label> Mật khẩu cũ <span>*</span></label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-user"></i>
                    </div>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Mật khẩu cũ"
                    />
                  </div>
                  <span class="errMes">{{ errMes }}</span>
                </div>

                <div class="form-group">
                  <label> Mật khẩu mới <span>*</span></label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-user"></i>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Mật khẩu mới"
                      required
                      v-model="dataUser.password"
                    />
                  </div>
                  <span class="errMes">{{ errMes }}</span>
                </div>
                <div class="form-group">
                  <label>Xác nhận lại mật khẩu <span>*</span></label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-user"></i>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Xác nhận lại mật khẩu"
                      required
                      v-model="newpw2"
                    />
                  </div>
                  <span class="errMes">{{ errMes }}</span>
                </div>

                <div class="button-signin">
                  <button type="submit">Thay đổi</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import accountColLeft from "../../components/TheAccountColumnLeft.vue";
import { mapActions, mapState } from "pinia";
import { useUsersStore } from "../../stores/users";
export default {
  data() {
    return {
      dataUser: {
        password: "",
      },
      newpw1: "",
      newpw2: "",
      errMes: "",
      store: useUsersStore(),
    };
  },
  methods: {
    ...mapActions(useUsersStore, ["updateProfile"]),
    //cập nhật thông tin
    async updateProfile() {
      if (this.dataUser.password == this.newpw2) {
        try {
          const data = this.dataUser;
          await this.store.updateProfile({ data });
          alert("Đổi mật khẩu thành công!");
          this.errMes = "";
        } catch (error) {
          this.errMes =
            "Mật khẩu phải có ít nhất 8 kí tự, bao gồm 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 kí tự đặc biệt";
        }
      } else {
        alert("Xác nhận lại mật khẩu!");
      }
    },
  },
  computed: {
    ...mapState(useUsersStore, ["auth"]),
  },
  components: {
    accountColLeft,
  },
};
</script>

<style lang="scss" scoped>
.content-payment {
  width: 100%;
  float: left;
  display: flex;
  margin-top: 20px;
}
.account-content .account-main {
  // width: calc(100% - 320px);
  width: 808px;
  float: left;
  border: 1px solid #ddd;
  padding: 15px;
  position: relative;
  min-height: 300px;
  h3 {
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    margin: 0 0 20px 0;
  }
  .errMes {
    font-size: 12px;
    color: red;
    padding-left: 6px;
  }
  .form-group {
    margin-bottom: 10px;
    label {
      display: inline-block;
      max-width: 100%;
      margin-bottom: 5px;
      font-weight: 700;
    }
    .input-group {
      display: flex;
      position: relative;
      border-collapse: separate;
      .input-group-addon {
        padding: 8px 20px;
        background-color: #eee;
        border-radius: 5px 0 0 5px;
      }
      .form-control {
        width: 85%;
        padding: 0 2%;
        &:focus {
          border: 1px solid #66afe9;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 8px rgba(102, 175, 233, 0.6);
        }
      }
    }
  }
  .button-signin {
    clear: both;
    width: 100%;
    margin-top: 20px;
    border-top: 1px solid #ddd;
    padding-top: 20px;
    float: left;
    button {
      padding: 10px 20px;
      background: #f28902;
      float: left;
      color: #fff;
      border: none;
      text-transform: uppercase;
      margin-right: 5px;
      margin-bottom: 10px;
    }
  }
}
</style>
