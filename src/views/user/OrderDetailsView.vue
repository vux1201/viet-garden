<template>
  <div class="order-details">
    <section class="sub-bg">
      <div id="link" class="container">
        <div class="sub-head" style="top: 15px">
          <a href="https://vuoncayviet.com"
            ><i class="fa fa-home"></i>Trang chủ
          </a>
          <span> Chi tiết đơn hàng</span>
        </div>
      </div>
    </section>
    <section class="bg-dark">
      <div class="container">
        <div class="content-page">
          <div class="title-signin">
            <h2>Thông tin tài khoản</h2>
          </div>
          <div class="content-payment">
            <accountColLeft></accountColLeft>
            <!-- content -->
            <div class="account-content">
              <div class="account-main my-menulist">
                <h4>Thông tin đặt hàng</h4>
                <div class="content-menulist">
                  <ul>
                    <li>
                      <span>Tình trạng đơn hàng:</span>
                      <div style="float: left">
                        <span
                          ><font color="#ff0000">Đang vận chuyển</font></span
                        >
                      </div>
                    </li>
                    <li>
                      <span>Thông tin yêu cầu:</span
                      ><span id="RequireInfo">không có</span>
                    </li>
                    <li>
                      <span>Ngày Yêu Cầu:</span>
                      <span id="RequireDate">3/10/2023 4:25:00 PM</span>
                    </li>
                    <li>
                      <span>Phương thức thanh toán: </span>
                      <span id="SendOrderType"
                        >Thanh toán chuyển khoản qua ngân hàng</span
                      >
                    </li>
                    <li>
                      <span>Hình thức vận chuyển: </span>
                      <span id="SendOrderTransType"
                        >Giao hàng nhanh tận nơi</span
                      >
                    </li>
                    <li>
                      <span>Thời gian giao hàng: </span>
                      <span id="SendOrderTime">Từ 3 đến 5 ngày</span>
                    </li>
                  </ul>
                </div>
                <h4>Thông tin người nhận hàng</h4>
                <div class="content-menulist">
                  <ul>
                    <li>
                      <span>Họ Tên:</span>
                      <span id="RecName">{{ this.auth.user?.fullname }}</span>
                    </li>
                    <li>
                      <span>Địa chỉ:</span>
                      <span id="RecAddress">{{ this.auth.user?.address }}</span>
                    </li>
                    <li>
                      <span>Điện Thoại:</span>
                      <span id="RecPhone">{{
                        this.auth.user?.phone_number
                      }}</span>
                    </li>
                  </ul>
                </div>
                <h4>Thông tin chi tiết yêu cầu đặt hàng</h4>
                <div class="table-responsive">
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in getOderId.order_products"
                        :key="index"
                      >
                        <td class="center">{{ index + 1 }}</td>
                        <td>
                          <p>{{ item.product.name }}</p>
                        </td>
                        <td>{{ totalPrice(item.product.price) }}/sản phẩm</td>
                        <td>{{ item.qty }}</td>
                        <td>
                          <strong>{{
                            totalPrice(item.product.price * item.qty)
                          }}</strong>
                        </td>
                      </tr>

                      <tr class="total-money">
                        <td class="right" colspan="4">Tổng Cộng</td>
                        <td class="left">
                          <strong style="color: #f00">
                            <span id="Total">{{
                              totalPrice(this.getOderId.total)
                            }}</span></strong
                          >
                        </td>
                      </tr>
                      <button
                        class="btn-confirm"
                        @click="confirm(this.getOderId.id)"
                      >
                        Đã nhận hàng
                      </button>
                    </tbody>
                  </table>
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
import { useOrderStore } from "../../stores/orders";
import { useUsersStore } from "../../stores/users";
import accountColLeft from "../../components/TheAccountColumnLeft.vue";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      status: 3,
    };
  },
  async created() {
    try {
      // await this.getOder(6);
      await this.getProfile();
      console.log(this.getOderId, "all-detai");
      console.log(this.auth.user, "profile");
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions(useOrderStore, ["getOder", "getAllOrders", "putOder"]),
    ...mapActions(useUsersStore, ["getProfile"]),
    // doi tien
    totalPrice(price) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(price);
    },

    //da nhan hang
    async confirm(id) {
      // console.log(id);
      try {
        await this.putOder(id, this.status);
        await this.getAllOrders(this.page, this.size);
        // console.log(id);
        Swal.fire("Cảm ơn bạn đã mua hàng");
        setTimeout(() => {
          this.$router.push({ path: "/don-hang-cua-toi" });
        }, "2000");
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState(useOrderStore, ["getOderId"]),
    ...mapState(useUsersStore, ["auth"]),
  },
  components: {
    accountColLeft,
  },
};
</script>

<style lang="scss" scoped>
.title-signin {
  width: 100%;
  float: left;
  color: #444;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
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
    h4 {
      border-top: 2px solid #ccc;
      padding: 7px 0;
      width: 100%;
      float: left;
      font-size: 13px;
      font-weight: bold;
    }
    .content-menulist {
      width: 100%;
      float: left;
      margin-bottom: 20px;
      margin-left: 30px;
      ul li {
        float: left;
        margin-top: 5px;
      }
      span {
        width: 200px;
        float: left;
      }
    }
  }

  .btn-confirm {
    border: 1px solid #ccc;
    padding: 5px;
    margin: 10px 20px;
    cursor: pointer;
  }

  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    thead tr th {
      padding: 8px;
      line-height: 1.42857143;
      background: #999;
      color: #fff;
      border-bottom: none;
      text-align: center;
      text-transform: uppercase;
      vertical-align: middle;
    }
    tbody tr td {
      text-align: center;
      padding: 8px;
      p {
        display: grid;
        text-align: left;
        left: 30px;
        text-transform: capitalize;
      }
    }
    .total-money {
      td {
        border-top: 2px solid #ccc;
      }
      .right {
        text-align: right;
      }
    }
  }
}
</style>
