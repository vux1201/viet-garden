<template>
  <section class="sub-bg">
    <div class="container">
      <div class="sub-head" style="top: 15px">
        <a href="/home"><i class="fa fa-home"></i>Trang chủ </a>
        <span> Đăng Ký</span>
      </div>
    </div>
  </section>
  <div class="bg-dark">
    <div class="container">
      <form class="content-page" @submit.prevent="signup">
        <div class="title-signin">
          <h2>Tạo Tài Khoản</h2>
          <h4>Bạn đã có tài khoản?</h4>
          <a href="/login">Đăng Nhập</a>
        </div>
        <div class="col-signin-left">
          <ul>
            <li>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa fa-user"></i>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nhập họ &amp; tên..."
                  required
                  v-model="fullname"
                  @keyup="validateFullname"
                />
              </div>
            </li>
            <span class="err-phone-number" v-if="errorName"
              >{{ errorName }}
            </span>
            <li>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa fa-home"></i>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nhập địa chỉ..."
                  required
                  v-model="address"
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
                  placeholder="Nhập số điện thoại..."
                  required
                  v-model="phone_number"
                  @keyup="validatePhoneNumber"
                />
              </div>
            </li>
            <span class="err-phone-number" v-if="error">{{ error }} </span>
            <li>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa-light fa-envelope"></i>
                </div>
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  placeholder="Nhập email..."
                  required
                  v-model="email"
                />
              </div>
            </li>
            <div class="errMes">{{ errSignup1 }}</div>
            <li>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa fa-key"></i>
                </div>
                <input
                  id="password"
                  type="text"
                  class="form-control"
                  placeholder="Nhập mật khẩu..."
                  @change="isPasswordValid"
                  required
                  v-model="password"
                />
              </div>
            </li>
            <div class="errMes">{{ errSignup2 }}</div>
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
            <i class="fa-brands fa-google-plus-g"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i
              class="login-with"
              >Login with Google</i
            >
          </a>
        </div>
        <div class="button-signin">
          <button type="submit">Đăng ký</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useUsersStore } from "../../stores/users";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      fullname: "",
      address: "",
      phone_number: "",
      email: "",
      password: "",
      res: "",
      store: useUsersStore(),
      errSignup1: "",
      errSignup2: "",
      error: "",
      errorName: "",
      checkNumber: 0,
      checkName: 0,
    };
  },
  methods: {
    ...mapActions(useUsersStore, ["register", "getProfile"]),
    async signup() {
      try {
        const data = {
          fullname: this.fullname,
          address: this.address,
          phone_number: this.phone_number,
          email: this.email,
          password: this.password,
        };
        this.checkNumber = this.validatePhoneNumber();
        this.checkName = this.validateFullname();
        // console.log(this.checkNumber, "154");
        if (this.checkNumber == 1 && this.checkName == 1) {
          const res = await this.register({ data });
          if (res.status == 200) {
            console.log(res);
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Đăng ký tài khoản thành công",
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(() => {
              this.$router.push({ path: "/login" });
            }, "2300");
            await this.getProfile(this.params);
            ///
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Thêm thành công",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        } else {
          console.log("err phone ");
        }
      } catch (error) {
        console.log(error, "errSiUp");
        if (
          error?.response.data.detail == "User with this email already exist"
        ) {
          this.errSignup1 = "Email đã tồn tại, vui lòng nhập email khác!";
        } else {
          this.errSignup1 = "";
        }
        if (
          error?.response.data.detail ==
          "Mật khẩu phải có ít nhất 8 kí tự, bao gồm 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 kí tự đặc biệt"
        ) {
          this.errSignup2 =
            "Mật khẩu phải có ít nhất 8 kí tự, bao gồm 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 kí tự đặc biệt";
        } else {
          this.errSignup2 = "";
        }
      }
    },

    //check name
    validateFullname() {
      const validationRegex =
        /^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+){1,})$/g;
      if (this.fullname.match(validationRegex)) {
        this.errorName = "";
        console.log("209 true");
        return 1;
      } else {
        this.errorName = "Vui lòng nhập đầy đủ họ tên của bạn";
        console.log("213 false");
      }
    },

    // check number
    validatePhoneNumber() {
      const validationRegex = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
      if (this.phone_number.match(validationRegex)) {
        this.error = "";
        return 1;
      } else {
        this.error = "Vui lòng nhập số điện thoại hợp lệ";
      }
    },
  },
  computed: {
    ...mapState(useUsersStore, ["auth"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/login.scss";
.col-signin-right {
  margin-top: 6%;
}
.title-signin {
  h2 {
    padding-bottom: 5px;
  }
}

.err-phone-number {
  font-size: 12px;
  color: red;
  padding-left: 18px;
}
</style>
