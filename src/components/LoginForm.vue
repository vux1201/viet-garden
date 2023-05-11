<template>
  <section class="sub-bg">
    <div class="container">
      <div class="sub-head" style="top: 15px;">
        <a href="/home"><i class="fa fa-home"></i>Trang chủ </a>
        <span> Đăng Nhập</span>
      </div>
    </div>
  </section>
  <div class="bg-dark">
    <div class="container">
      <div class="content-page">
        <form @submit.prevent="login">
          <div class="title-signin">
            <h2>Đăng Nhập</h2>
          </div>
          <div class="col-signin-left">
            <ul>
              <li>
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa-light fa-envelope"></i>
                  </div>
                  <input
                    class="form-control"
                    type="text"
                    style="width: 80%; padding: 0 1.5%; border: 1px solid #ccc"
                    placeholder="Nhập email.."
                    required
                    v-model="username"
                  />
                </div>
              </li>
              <div class="errMes">{{ errLogin1 }}</div>
              <li>
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-key"></i>
                  </div>
                  <input
                    class="form-control"
                    :type="inputType"
                    style="width: 74%; padding: 0 1.5%; border: 1px solid #ccc"
                    placeholder="Nhập mật khẩu.."
                    required
                    v-model="password"
                  />
                  <div
                    @click.prevent="showpw"
                    style="
                      background: rgb(204, 204, 204);
                      width: 31px;
                      text-align: center;
                      padding-top: 7px;
                    "
                  >
                    <span v-if="inputType == 'password'"
                      ><i class="fa fa-eye-slash"></i
                    ></span>
                    <span v-else><i class="fa fa-eye"></i></span>
                  </div>
                </div>
              </li>
              <div class="errMes">{{ errLogin2 }}</div>
            </ul>
          </div>
          <div class="col-signin-right">
            <center>Đăng nhập bằng tài khoản mạng xã hội</center>
            <!-- <div class="clear" style="height: 10px"></div> -->
            <a class="btn btn-block btn-social btn-facebook" style="margin: 3px"
              ><i class="fa fa-facebook"> </i>&nbsp;&nbsp;&nbsp;&nbsp;<i
                class="login-with"
                >Login with Facebook</i
              ></a
            ><a href="#" class="btn btn-block btn-social btn-google-plus">
              <i class="fa-brands fa-google-plus-g"></i
              >&nbsp;&nbsp;&nbsp;&nbsp;<i class="login-with"
                >Login with Google</i
              >
            </a>
          </div>
          <div class="button-signin">
            <button type="submit">Đăng nhập</button>
            <p style="margin-top: 20px; color: #f28902">
              <a href="/forgot-password">Quên mật khẩu</a>
              |
              <a href="/signup" title="Đăng Ký">Đăng ký</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useUsersStore } from "../stores/users";

export default {
  data() {
    return {
      username: "",
      password: "",
      res: "",
      inputType: "password",
      errLogin1: "",
      errLogin2: "",
      store: useUsersStore(),
    };
  },
  methods: {
    ...mapActions(useUsersStore, ["login"]),
    async login() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        await this.store.login(userData);
        console.log("is admin",this.auth.user.is_admin);
        if (this.auth.user.is_admin == true) {
          this.$router.push({ path: "/quan-ly-san-pham" });
        } else {
          this.$router.push({ path: "/home" });
        }
      } catch (error) {
        if (error.response?.data.detail == "Không tồn tại user với email này") {
          this.errLogin1 = "Không tồn tại user với email này!";
        } else {
          this.errLogin1 = "";
        }
        if (error.response?.data.detail == "Authenticate failed") {
          this.errLogin2 = "Sai mật khẩu!";
        } else {
          this.errLogin2 = "";
        }
      }
    },
    showpw() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
  },
  computed: {
    ...mapState(useUsersStore, ["auth"]),
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/style/login.scss";
</style>
