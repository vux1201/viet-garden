<template>
  <div class="my-order">
    <section class="sub-bg">
      <div id="link" class="container">
        <div class="sub-head" style="top: 15px">
          <a href="/home"><i class="fa fa-home"></i>Trang chủ </a>
          <span> Đơn hàng của tôi</span>
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
                <h3 class="text-center">Đơn Hàng Của Tôi</h3>
                <h4>Danh sách đơn hàng đã đặt</h4>
                <div class="table-responsive">
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Mã đơn hàng</th>
                        <th>Tên sản phẩm</th>
                        <th>Tổng Tiền</th>
                        <th>Tình Trạng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in allOrders" :key="index">
                        <td class="center">
                          <a>{{ index + 1 }}</a>
                        </td>
                        <td class="day">
                          <a @click="detailOrder(item.id)">#{{ item.code }}</a>
                        </td>
                        <td class="name-pro">
                          <span v-for="(pro, i) in item.order_products" :key="i"
                            >{{ pro.product.name }} ( {{ pro.qty }})</span
                          >
                        </td>
                        <td class="price-all">{{ totalPrice(item.total) }}</td>
                        <td class="no-finish">
                          <p v-if="item.status == 3">Đã nhận hàng</p>
                          <p v-else>Chưa nhận hàng</p>
                        </td>
                      </tr>

                      <!-- <tr>
                        <td class="center">
                          <a href="/order-details">2</a>
                        </td>
                        <td class="day">
                          <a href="/order-details">09-03-2023 14:12:00</a>
                        </td>
                        <td>Giao hàng vào buổi sáng</td>
                        <td class="price-all">85,000 đ</td>
                        <td class="no-finish">Chưa xử lý</td>
                      </tr> -->
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
import { useOrderStore } from "../../stores/orders";
import { mapActions, mapState } from "pinia";
import accountColLeft from "../../components/TheAccountColumnLeft.vue";
export default {
  data() {
    return {};
  },

  async created() {
    try {
      await this.getOrders();
      console.log(this.allOrders, "allor");
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    ...mapActions(useOrderStore, ["getOrders", "getOder"]),
    // doi tien
    totalPrice(price) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(price);
    },

    async detailOrder(id) {
      try {
        this.$router.push({ path: "/order-details" });
        await this.getOder(id);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState(useOrderStore, ["allOrders", "getOderId"]),
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
  .account-content {
    .account-main {
      width: 808px;
      float: left;
      border: 1px solid #ddd;
      padding: 15px;
      position: relative;
      min-height: 300px;
      h3 {
        text-align: center;
        font-weight: 600;
        font-size: 18px;
        text-transform: uppercase;
        margin: 0 0 20px 0;
      }
    }
    .my-menulist {
      h4 {
        border-top: 2px solid #ccc;
        padding: 7px 0;
        width: 100%;
        float: left;
        font-size: 13px;
        font-weight: bold;
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
          span {
            display: grid;
            text-align: left;
            left: 30px;
            text-transform: capitalize;
          }
          .day a {
            font-size: 13px;
            &:hover {
              cursor: pointer;
              color: rgb(117, 226, 89);
            }
          }
          .price-all {
            text-align: center;
            font-weight: bold;
          }
          .no-finish {
            color: #f00;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
