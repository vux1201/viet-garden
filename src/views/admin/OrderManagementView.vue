<template>
  <div class="content">
    <!-- Hiển thị đơn hàng -->
    <div class="show-products" v-if="show == false">
      <div class="head">
        <div class="title1">Quản lý đơn hàng</div>
        <userSearch></userSearch>
      </div>
      <div class="statistical">
        <span
          >Tổng tiền hàng :
          <p>{{ totalPrice(this.allTotal) }}</p>
          <!-- <input v-model="this.allTotal" /> -->
        </span>
        <span
          >Đơn đang giao :
          <p>{{ this.ship }}</p></span
        >
        <span
          >Đơn chờ xử lý :
          <p>{{ this.wait }}</p></span
        >
      </div>
      <!-- <button class="btn-adduser" @click="addProducts">
        <i class="fa-light fa-circle-plus"></i>&nbsp;Thêm đơn hàng
      </button> -->
      <table class="container">
        <thead>
          <th>STT</th>
          <th>Mã đơn hàng</th>
          <th>Người mua</th>
          <th>Tổng tiền</th>
          <th>Trạng thái</th>
          <th>Vận chuyển</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in admGetAllOrders.results" :key="index">
            <td>{{ index + 1 }}</td>
            <td class="order-code" @click="addProducts(item.id)">
              {{ item.code }}
            </td>
            <td>{{ item.user.fullname }}</td>
            <td>
              <!-- <span v-for="(total, index) in item.order_products" :key="index">
              </span> -->
              {{
                totalPrice(
                  item.order_products[0].qty *
                    item.order_products[0].product.price
                )
              }}
            </td>

            <td class="item-status">
              <v-switch
                style="left: 30px; top: 12px"
                v-model="item.status"
                @click="onAction(item)"
              ></v-switch>
              {{ item.status == false ? "Chờ xử lý" : "Đang giao hàng" }}
            </td>
            <!-- <td>
              <a
                ><i
                  @click="handleDelete"
                  class="fa-regular fa-trash-can"
                  title="delete"
                  style="--fa-primary-color: crimson"
                ></i
              ></a>
            </td> -->
            <td>Chưa nhận hàng</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- thêm đơn hàng -->
    <div class="show-addProducts" v-if="show == true">
      <div class="dialog">
        <h2 class="title1">Thông tin đơn hàng</h2>
        <!--  -->
        <div class="form-input" style="display: flex; width: 30rem">
          <label>Mã đơn hàng : &nbsp;&nbsp;&nbsp;</label>
          <p style="color: #796bc6">{{ this.getOderId.code }}</p>
        </div>
        <!--  -->
        <div class="form-input" style="display: flex; width: 30rem">
          <label>Tổng thu : &nbsp;&nbsp;&nbsp; </label>
          <p style="color: #796bc6">{{ totalPrice(this.getOderId.total) }}</p>
        </div>
        <!--  -->
        <div class="form-input">
          <label>Danh sách sản phẩm</label>
          <table
            style="width: 35rem; text-align: center; border: 1px #ccc solid"
          >
            <thead>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </thead>
            <tr v-for="(item, index) in getOderId.order_products" :key="index">
              <td>
                {{ item.product.name }}
              </td>
              <img
                style="width: 100px"
                :src="item.product.product_images[0].image_path"
              />
              <td>
                {{ totalPrice(item.product.price) }}
              </td>
              <td>
                {{ item.qty }}
              </td>
              <td>
                {{ totalPrice(item.product.price * item.qty) }}
              </td>
            </tr>
          </table>
        </div>

        <div class="footer">
          <!-- <button class="btn-adduser" type="submit" @click="addNewOrder">
            Lưu
          </button> -->
          <button class="btn-adduser" type="reset" @click="addProducts">
            Quay lại
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userSearch from "./UserSearch.vue";
import { mapActions, mapState } from "pinia";
import { useOrderStore } from "../../stores/orders";
import { useProductsStore } from "../../stores/products";
export default {
  data() {
    return {
      show: false,
      useOrderStore: "",
      useProductsStore: "",
      valCategory: [],
      page: 1,
      size: 20,
      allTotal: 0,
      totalOrder: [],
      ship: 0,
      wait: 0,
      newOrder: {
        product_id: "",
        qty: "",
        price: "",
      },
    };
  },
  async created() {
    try {
      this.params.page = 1;
      this.params.size = 10;
      await this.getAllOrders(this.page, this.size);
      console.log("admGetAllOrders", this.admGetAllOrders);
      console.log(this.admGetAllOrders.results, "allOrder");
      for (let i = 0; i < this.admGetAllOrders.results.length; i++) {
        const sumTotal = this.admGetAllOrders.results[i]?.total;
        this.allTotal += sumTotal;
        console.log(sumTotal, this.allTotal);
        // for (
        //   let j = 0;
        //   j < this.admGetAllOrders.results[i].order_products.length;
        //   j++
        // ) {
        //   const qty = this.admGetAllOrders.results[i].order_products[j].qty;
        //   const price =
        //     this.admGetAllOrders.results[i].order_products[j].product.price;
        //   const sumMoneyOrder = price * qty;
        //   console.log(sumMoneyOrder, "priceOr");
        //   return sumMoneyOrder;
        // }
        // this.totalOrder[i] += sumMoneyOrder;
        // console.log(sumMoneyOrder, "priceOr1");
        if (this.admGetAllOrders.results[i].status == 1) {
          this.ship += 1;
        } else {
          this.wait += 1;
        }
      }
      await this.getCategories(this.params);
      // console.log(this.allCategory, "allcate");
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    ...mapActions(useOrderStore, [
      "getAllOrders",
      "getOder",
      "addOrder",
      "putOder",
    ]),
    ...mapActions(useProductsStore, ["getCategories", "getProduct"]),

    async onAction(item) {
      try {
        // 2 true, 3 false
        if (item.status == false) {
          item.status = 1;
          await this.putOder(item.id, item.status);
          console.log(item.status, "tus1");
          location.reload();
        } else {
          item.status = 0;
          await this.putOder(item.id, item.status);
          console.log(item.status, "tus2");
          location.reload();
        }
        // console.log(item.status);
        await this.getAllOrders(this.page, this.size);
      } catch (error) {
        console.log(error);
      }
    },

    // doi tien
    totalPrice(price) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(price);
    },

    async addProducts(id) {
      try {
        this.show = !this.show;
        await this.getOder(id);
        console.log(this.getOderId, "detail");
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    userSearch,
  },
  computed: {
    ...mapState(useOrderStore, ["admGetAllOrders", "getOderId"]),
    ...mapState(useProductsStore, ["allCategory", "allProducts", "params"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/FormManagement.scss";
.statistical {
  display: grid;
  span {
    padding: 5px 15px;
    display: flex;
  }
}
.order-code {
  cursor: pointer;
  &:hover {
    color: rgb(66, 72, 224);
  }
}
.item-status {
  display: flex;
  align-items: center;
  left: 20px;
  justify-content: center;
}

table {
  margin-top: 10px;
  th {
    padding: 10px;
  }
}
</style>
