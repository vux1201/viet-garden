<template>
  <div class="forgot-password">
    <div class="section">
      <navbar></navbar>
      <section class="sub-bg">
        <div class="container">
          <div class="sub-head" style="top: 15px">
            <a href="/home"><i class="fa fa-home"></i>Trang chủ </a>
            <span> Quên mật khẩu</span>
          </div>
        </div>
      </section>
    </div>
    <div class="main">
      <section class="bg-dark">
        <div class="container">
          <div class="content-page">
            <div class="title-signin">
              <h2>Quên mật khẩu</h2>
            </div>
            <div class="col-signin-left">
              <ul>
                <li>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa-light fa-envelope"></i>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nhập email.."
                    />
                  </div>
                </li>
              </ul>
              <span
                style="
                  width: 95%;
                  float: left;
                  margin: 10px 0 10px 2px;
                  font-style: italic;
                "
                >Email đăng ký: địa chỉ email lúc đăng ký.<br />
                Nếu thông tin hợp lệ, mật khẩu mới của bạn sẽ được gởi đến địa
                chỉ email này.
              </span>
            </div>

            <div class="col-signin-right">
              <center>Đăng nhập bằng tài khoản mạng xã hội</center>
              <div class="clear" style="height: 10px"></div>
              <a
                onclick="loginFb()"
                class="btn btn-block btn-social btn-facebook"
                ><i class="fa fa-facebook"> </i>&nbsp;Login with Facebook </a
              ><a href="#" class="btn btn-block btn-social btn-google-plus">
                <i class="fa fa-google-plus"></i>&nbsp;Login with Google
              </a>
            </div>
            <div class="button-signin">
              <input
                type="submit"
                class="FormButton"
                title=" Gửi"
                value=" Gửi"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.title-signin {
  width: 100%;
  float: left;
  color: #444;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 10px;
  h2 {
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    float: left;
  }
}
.col-signin-left {
  width: 50%;
  float: left;
  padding-right: 40px px;
  border-right: 1px solid #ddd;
  ul li {
    width: 100%;
    margin: 10px 0;
    .input-group {
      display: flex;
      height: 35px;
      .input-group-addon {
        padding: 0 20px;
        background-color: #eee;
        padding-top: 1.3%;
        border-radius: 5px 0 0 5px;
      }
      .form-control {
        width: 80%;
        padding: 0px 1.5%;
        border: 1px solid rgb(204, 204, 204);
      }
    }
  }
}
.col-signin-right {
  float: left;
  display: grid;
  margin-left: 10%;
  a {
    width: 1000px;
    height: 35px;
    .fa {
      width: 32px !important;
      line-height: 34px !important;
      font-size: 1.5em !important;
      text-align: center;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
  .btn-facebook {
    color: #fff;
    position: relative;
    max-width: 250px;
    border-radius: 5px;
    background-color: #3b5998;
    border-color: rgba(0, 0, 0, 0.2);
    margin: 3px;
  }
  .btn-google-plus {
    color: #fff;
    position: relative;
    max-width: 250px;
    border-radius: 5px;
    background-color: #dd4b39;
    border-color: rgba(0, 0, 0, 0.2);
    margin: 0 auto;
  }
}
.button-signin {
  clear: both;
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  float: left;
  input {
    padding: 10px 20px;
    background: #f28902;
    color: #fff;
    border: none;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
}
</style>
