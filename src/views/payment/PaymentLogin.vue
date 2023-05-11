<template>
  <div class="cart-view">
    <div class="section">
      <div class="sub-bg">
        <div id="link" class="container">
          <div class="sub-head">
            <router-link to="/home"
              ><i class="fa fa-home"></i>Trang chủ</router-link
            >
            <span>Giỏ hàng</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <section class="bg-dark" style="padding-top: 20px">
        <div class="container">
          <div class="content-page">
            <div class="title-signin">
              <h2>Thanh Toán &amp; Đặt hàng</h2>
            </div>
            <div class="part-buy">
              <ul>
                <li class="left active">
                  <h4>Đăng nhập</h4>
                  <span>1</span>
                  <div class="part-line"></div>
                </li>
                <li class="mid">
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
              <div class="infocust-product">
                <div class="formcus-cart">
                  <div class="tab-content">
                    <div role="tabpanel" id="login">
                      <h3 class="text-center">ĐĂNG NHẬP</h3>

                      <div class="form-group">
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i
                              class="fa-light fa-envelope"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Nhập email.."
                          />
                        </div>
                      </div>
                      <div class="form-group" style="margin-bottom: 0px">
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-key"></i>
                          </div>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Nhập mật khẩu.."
                          />
                        </div>
                      </div>
                      <div class="button-signin">
                        <router-link to="/PaymentAddress"
                          ><button>Đăng nhập</button></router-link
                        >
                      </div>
                      <div class="">
                        <a href="HandleForgotpassword">Quên mật khấu</a> |
                        <a href="/signup">Đăng ký</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-product">
                <h2>
                  <strong>Đơn hàng </strong>(1)
                  <a href="/cartView">
                    <input type="button" value="Chỉnh sửa"
                  /></a>
                </h2>
                <ul>
                  <li>
                    <div class="no-cart">
                      <strong>STT</strong>
                    </div>
                    <div class="name-cart">
                      <strong>Tên sản phẩm</strong>
                    </div>
                    <div class="pricepay-cart">
                      <strong>Đơn giá</strong>
                    </div>
                    <div class="num-cart">
                      <strong>SL</strong>
                    </div>
                    <div class="pricepay-cart">
                      <strong>Thành Tiền</strong>
                    </div>
                  </li>

                  <li>
                    <div class="no-cart">1</div>
                    <div class="name-cart">
                      <a href="#" san-pham="">Cây hải đường</a>
                    </div>
                    <div class="pricepay-cart">85,000 đ</div>
                    <div class="num-cart">1</div>
                    <div class="pricepay-cart">
                      <strong>85,000 đ</strong>
                    </div>
                  </li>
                </ul>
                <div class="total-finish">
                  <h6>Thành Tiền</h6>
                  <span> 85,000 đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/style/payment.scss";
.content-payment {
  width: 100%;
  float: left;
  display: flex;
  margin-top: 20px;
}
.infocust-product {
  width: 50%;
  float: left;
  display: flex;
  border: 1px solid #ddd;
}
.login-cart ul li.active a {
  background: #fff;
  border-left: 4px solid #3daa12;
  color: #999;
}
.login-cart ul li span {
  font-size: 12px;
}
.formcus-cart {
  width: 100%;
  float: left;
  background: #fff;
  padding: 20px;
  h3 {
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    margin: 0 0 20px 0;
  }
}
.order-product {
  width: 47%;
  float: left;
  margin-left: 20px;
  border: 1px solid #ddd;
  padding: 15px;
  h2 {
    font-size: 13px;
    border-bottom: 2px solid #eee;
    padding-bottom: 5px;
    float: left;
    width: 100%;
    strong {
      font-size: 15px;
    }
    input[type="button"] {
      float: right;
      font-size: 11px;
      margin-bottom: 3px;
      border-radius: 3px;
      border: 1px solid #ccc;
      padding: 3px 5px;
    }
  }
  ul li {
    width: 100%;
    float: left;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    .no-cart {
      width: 40px;
      float: left;
      text-align: center;
    }
    .name-cart {
      float: left;
      text-align: center;
      width: calc(100% - 260px);
    }
    .num-cart {
      width: 40px;
      float: left;
      text-align: center;
    }
    .pricepay-cart {
      width: 90px;
      float: left;
      text-align: center;
      font-family: "roboto";
      color: #000;
      font-size: 14px;
    }
    strong {
      text-align: center;
      width: 100%;
      float: left;
    }
    a {
      width: 100%;
      float: left;
      font-size: 12px;
      color: #999;
      line-height: 1.3;
      &:hover {
        color: #f28902;
      }
    }
  }
}
.total-finish {
  width: 100%;
  float: left;
  border-top: 2px solid #eee;
  padding-top: 15px;
  h6 {
    float: left;
    font-size: 13px;
    font-weight: bold;
  }
  span {
    float: right;
    text-align: right;
    font-size: 16px;
    color: #f00;
  }
}
</style>
