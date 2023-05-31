<template>
  <div class="user-profile">
    <section class="sub-bg">
      <div id="link" class="container">
        <div class="sub-head" style="top: 15px">
          <a href="https://vuoncayviet.com"
            ><i class="fa fa-home"></i>Trang chủ
          </a>
          <span> Thông tin tài khoản</span>
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
                <h3 class="text-center">Cập Nhật Thông Tin Tài Khoản</h3>
                <div class="form-group">
                  <label> Họ &amp; tên <span>*</span></label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-user"></i>
                    </div>
                    <input
                      v-model="userData.fullname"
                      type="text"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label> Email <span>*</span></label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa-light fa-envelope" aria-hidden="true"></i>
                    </div>
                    <input
                      v-model="auth.user.email"
                      disabled
                      type="text"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label> Điện thoại <span>*</span></label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <input
                      v-model="this.auth.user.phone_number"
                      type="text"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label> Địa Chỉ <span>*</span></label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-home"></i>
                    </div>
                    <input
                      v-model="this.auth.user.address"
                      type="text"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="button-signin">
                  <button type="submit">Cập nhật</button>
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
import Swal from "sweetalert2";
export default {
  data() {
    return {
      store: useUsersStore(),
      userData: {
        fullname: "",
      },
    };
  },
  //hien thi thong tin
  async created() {
    await this.store.getProfile();
    // console.log("object", this.auth);
  },

  methods: {
    ...mapActions(useUsersStore, ["updateProfile", "getProfile"]),
    //cập nhật thông tin
    async updateProfile() {
      try {
        let data = this.auth.user;
        this.auth.user.fullname = this.userData.fullname;
        await this.store.updateProfile({ data });
        Swal.fire({
          title: "Cập nhật thông tin thành công",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timer: 2000,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Không thể cập nhật",
          text: "Kiểm tra lại thông tin của bạn",
        });
      }
      await this.getProfile();
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
  .account-content .account-main {
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
    .form-group {
      margin-bottom: 15px;
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
          border: 1px solid #ccc;
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
}
</style>
