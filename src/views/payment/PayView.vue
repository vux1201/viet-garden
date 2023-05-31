<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pay-view">
    <section class="sub-bg">
      <div class="container">
        <div class="sub-head">
          <a href="https://vuoncayviet.com"
            ><i class="fa fa-home"></i>Trang chủ
          </a>
          <span> Đặt hàng &amp; thanh toán</span>
        </div>
      </div>
    </section>
    <section class="bg-dark" style="padding-top: 20px">
      <div class="container">
        <div class="content-page">
          <div class="title-signin">
            <h2>Đặt hàng &amp; thanh toán</h2>
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
              <li class="right active">
                <h4>Thanh Toán</h4>
                <span>3</span>
                <div class="part-line"></div>
              </li>
            </ul>
          </div>
          <div class="content-payment">
            <div class="infocust-product info-cus-delivery">
              <h3>Phương thức thanh toán</h3>
              <ul>
                <li>
                  <label> Cách Thanh Toán <span>*</span></label>
                  <div class="form-delivery">
                    <select>
                      <option selected value="0">
                        Vui lòng chọn cách thanh toán
                      </option>
                      <option value="1">
                        Thanh toán chuyển khoản qua ngân hàng
                      </option>
                      <option value="2">Trả tiền mặt khi nhận hàng</option>
                    </select>
                    <i class="fa-light fa-angle-down"></i>
                  </div>
                </li>
                <li>
                  <label> Cách Vân Chuyển <span>*</span></label>
                  <div class="form-delivery">
                    <select name="vnOrderCheckB31:ddlHTVC">
                      <option selected value="0">
                        Vui lòng chọn cách vận chuyển
                      </option>
                      <option value="1">Giao hàng tận nơi</option>
                      <option value="2">Nhận hàng tại cửa hàng</option>
                      <option value="3">Nhận hàng qua bưu điện</option>
                    </select>
                    <i class="fa-light fa-angle-down"></i>
                  </div>
                </li>
                <li>
                  <label> Mã Bảo Vệ</label>
                  <div class="form-delivery">
                    <span class="MaBaoVe">562c</span>
                  </div>
                </li>
                <li>
                  <label> Nhập Mã Bảo Vệ <span>*</span></label>
                  <div class="form-delivery">
                    <input type="text" placeholder="Mã Bảo Vệ" />
                  </div>
                </li>
                <li>
                  <label> Thông Tin Thêm</label>
                  <div class="form-delivery">
                    <textarea></textarea>
                  </div>
                </li>
              </ul>
              <div class="button-signin">
                <!-- <router-link to="don-hang-cua-toi">
                  <button @click="complete">
                    <i class="fa-solid fa-check"></i>&nbsp;Đặt hàng
                  </button>
                </router-link> -->
                <button @click="postOrder">Đặt hàng</button>
              </div>
            </div>
            <div class="content-right">
              <div class="order-product" style="margin-bottom: 20px">
                <h2>
                  <strong>Địa chỉ giao hàng </strong
                  ><a href="/shipment-details">
                    <input type="button" value="Chỉnh sửa"
                  /></a>
                </h2>
                <a href="/thanh-toan-dia-chi.html"> </a>
                <div class="info-deivery">
                  <p>
                    <i class="fa fa-user"></i
                    ><strong
                      >&nbsp;&nbsp; {{ this.auth.user?.fullname }}</strong
                    >
                  </p>
                  <p>
                    <i class="fa fa-phone"></i>
                    &nbsp;&nbsp;{{ this.auth.user?.phone_number }}
                  </p>
                  <p>
                    <i class="fa fa-home"></i>
                    &nbsp;&nbsp;{{ this.auth.user?.address }}
                  </p>
                </div>
              </div>
              <div class="order-product">
                <h2>
                  <strong>Số sản phẩm </strong>({{ this.allCart.length }})
                  <a href="/cartView">
                    <input type="button" value="Chỉnh sửa"
                  /></a>
                </h2>
                <ul>
                  <li>
                    <div class="no-cart">
                      <strong>Ảnh</strong>
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

                  <li v-for="(item, index) in allCart" :key="index">
                    <img
                      class="no-cart"
                      :src="item.product.product_images[0].image_path"
                    />
                    <div class="name-cart">
                      <a href="#" san-pham="">{{ item.product.name }}</a>
                    </div>
                    <div class="pricepay-cart">
                      {{ priceTotals(item.product.price) }}
                    </div>
                    <div class="num-cart">{{ item.qty }}</div>
                    <div class="pricepay-cart">
                      <strong>{{
                        priceTotals(item.product.price * item.qty)
                      }}</strong>
                    </div>
                  </li>

                  <!-- <li>
                    <div class="no-cart">2</div>
                    <div class="name-cart">
                      <a href="#" san-pham="">Cây Sen Sedum Xanh</a>
                    </div>
                    <div class="pricepay-cart">45,000 đ</div>
                    <div class="num-cart">1</div>
                    <div class="pricepay-cart"><strong>45,000 đ</strong></div>
                  </li> -->
                </ul>
                <div class="total-finish">
                  <h6>Tổng Tiền</h6>
                  <span> {{ priceTotals(this.sumTotal) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUsersStore } from "../../stores/users";
import { useCartStore } from "../../stores/cart";
import { useOrderStore } from "../../stores/orders";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      sumTotal: 0,
      valOrder: [],
      idCart: [],
    };
  },
  async created() {
    try {
      await this.getProfile();
      await this.getCarts();
      for (let i = 0; i < this.allCart.length; i++) {
        this.sumTotal += this.allCart[i].product.price * this.allCart[i].qty;
      }
      console.log(this.allCart, "allc");
      console.log(this.allOrders, "allO1");
      // console.log(this.sumTotal, "sum");
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions(useUsersStore, ["getProfile"]),
    ...mapActions(useCartStore, ["getCarts", "deleteCart"]),
    ...mapActions(useOrderStore, ["getOrders", "addOrder"]),
    // dat hang
    async postOrder() {
      try {
        if (this.allCart.length < 1) {
          Swal.fire("Không có sản phẩm được chọn");
        } else {
          for (let i = 0; i < this.allCart.length; i++) {
            const item = this.allCart[i];
            const id_cart = item.id;
            const order = {
              qty: item.qty,
              product_id: item.product.id,
              price: item.product.price,
            };
            this.valOrder.push(order);
            this.idCart.push(id_cart);
          }
          let orders = this.valOrder;
          let idCart = this.idCart;
          await this.addOrder(orders);
          for (let i = 0; i < this.idCart.length; i++) {
            await this.deleteCart(idCart[i]);
            console.log(idCart, "12o");
          }
          await this.getCarts();
          // console.log(this.allOrders, "allO");
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Đặt hàng thành công",
            showConfirmButton: false,
            timer: 2000,
          });
          setTimeout(() => {
            this.$router.push({ path: "/home" });
          }, "2000");
        }
      } catch (error) {
        console.log(error);
      }
    },
    // doi tien
    priceTotals(price) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(price);
    },
  },
  computed: {
    ...mapState(useUsersStore, ["auth"]),
    ...mapState(useCartStore, ["allCart"]),
    ...mapState(useOrderStore, ["allOrders"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/payment.scss";
.content-payment {
  width: 100%;
  float: left;
  display: flex;
  margin-top: 20px;
  .infocust-product {
    height: max-content;
    width: calc(55% - 20px);
    float: left;
    border: 1px solid #ddd;
  }
  .info-cus-delivery {
    min-height: 300px;
    padding: 20px;
    h3 {
      font-weight: 600;
      text-align: center;
      font-size: 18px;
      text-transform: uppercase;
      margin: 0 0 20px 0;
    }
    ul li {
      width: 100%;
      float: left;
      margin-bottom: 10px;
      label {
        font-weight: normal;
        float: left;
        width: 150px;
        margin-bottom: 5px;
      }
      .form-delivery {
        display: flex;
        float: left;
        width: calc(100% - 150px);
        select {
          width: 100%;
          border: 1px solid #ccc;
          padding: 5px;
        }
        i {
          transform: translateX(-20px);
          padding-top: 8px;
          pointer-events: none;
        }
        textarea {
          width: 97%;
          border: 1px solid #ccc;
          border-bottom-width: 2px;
          border-radius: 3px;
          font-size: 14px;
          padding: 5px;
        }
      }
    }
  }
  .content-right {
    width: 60%;
  }
  .order-product {
    float: left;
    width: 90%;
    margin-left: 20px;
    margin-bottom: 20px;
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
      a {
        float: right;
      }
    }
    ul li {
      width: 100%;
      float: left;
      border-bottom: 1px solid #eee;
      padding: 10px 0;
      strong {
        text-align: center;
        width: 100%;
        float: left;
      }
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
      .pricepay-cart {
        width: 90px;
        float: left;
        text-align: center;
        font-family: "roboto";
        color: #000;
        font-size: 14px;
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
    .info-deivery {
      float: left;
      padding-top: 10px;
      p {
        margin-bottom: 0;
        font-size: 12px;
      }
    }
  }
}
</style>
