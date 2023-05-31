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
                  item.order_products[0]?.qty *
                    item.order_products[0]?.product.price
                )
              }}
            </td>

            <td class="btn-status" @click="onAction(item)">
              <p>
                {{ item.status == 0 ? "Chờ xử lý" : "Đang giao hàng" }}
              </p>
            </td>

            <!-- <td class="item-status">
              <v-switch
                style="left: 30px; top: 12px"
                v-model="item.status"
                @click="onAction(item)"
              ></v-switch>
              {{ item.status == false ? "Chờ xử lý" : "Đang giao hàng" }}
            </td> -->
            <!-- <td>Chưa nhận hàng</td> -->
            <td>
              <p v-if="item.status == 3">Đã nhận hàng</p>
              <p v-else>Chưa nhận hàng</p>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- phân trang  -->
      <div class="text-center">
        <v-col cols="5" style="margin-left: 21.5rem">
          <v-pagination
            v-model="page"
            :length="this.admGetAllOrders.total / 10"
            rounded="circle"
            @update:modelValue="updatePage(page, size)"
          >
          </v-pagination>
        </v-col>
      </div>
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
          <button class="btn-adduser" @click="exportPdf">Xuất hóa đơn</button>
          <button class="btn-adduser" type="reset" @click="addProducts">
            Quay lại
          </button>
        </div>
      </div>
    </div>

    <!-- mẫu hóa đơn  -->
    <div class="bill-pay">
      <div style="display: flex">
        <div style="padding-top: 20px" class="logo">
          <img style="width: 30%" src="https://vuoncayviet.com/img/logo.png" />
        </div>
        <div style="left: -11%" class="content">
          <h2>&nbsp;&nbsp;Vườn Cây Việt</h2>
          <h3>Không chỉ là cây cảnh</h3>
        </div>
      </div>
      <h3 style="left: 17%">HÓA ĐƠN MUA BÁN</h3>
      <div>Mã hóa đơn : #{{ this.getOderId.code }}</div>
      <table style="width: 35rem; text-align: center; border: 1px #ccc solid">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên hàng</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tr v-for="(item, index) in getOderId.order_products" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.product.name }}</td>
          <td>{{ item.qty }}</td>
          <td>{{ item.product.price }}</td>
          <td>
            {{ totalPrice(item.product.price * item.qty) }}
          </td>
        </tr>
        <!-- <div style="padding:20px 10px 10px; color: red;">Tổng thu : {{ totalPrice(this.getOderId.total) }}</div> -->
      </table>
    </div>

  </div>
</template>

<script>
import userSearch from "./UserSearch.vue";
import { mapActions, mapState } from "pinia";
import { useOrderStore } from "../../stores/orders";
import { useProductsStore } from "../../stores/products";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default {
  data() {
    return {
      show: false,
      useOrderStore: "",
      useProductsStore: "",
      valCategory: [],
      page: 1,
      size: 10,
      allTotal: 0,
      totalOrder: [],
      ship: 0,
      wait: 0,
      newOrder: {
        product_id: "",
        qty: "",
        price: "",
      },
      status: 0,
      //
      animals: [["Tên sản phẩm", "Số lượng", "Đơn giá", "Thành tiền"]],
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
        // console.log(sumTotal, this.allTotal);
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

    ///
    exportPdf() {
      let docDefinition = {
        content: [
          // {
          //   image: "logo.png",
          //   widths: 150,
          // },
          {
            text: "HÓA ĐƠN MUA HÀNG",
            style: "header",
          },
          { text: "Hà nội, ngày   tháng   năm 20  ", style: "time" },
          {
            // layout: "lightHorizontalLines",
            style: "table",
            table: {
              // headerRows: 1,
              // widths: ["40%", "15%", "25%", "30%"],
              body: [
                ["STT", "Tên sản phẩm", "Số lượng", "Đơn giá", "Thành tiền"],
                [
                  "1",
                  this.getOderId.order_products[0].product?.name,
                  this.getOderId.order_products[0]?.qty,
                  this.getOderId.order_products[0].product?.price,
                  this.getOderId.order_products[0].product?.price *
                    this.getOderId.order_products[0]?.qty,
                ],
                // `for(int i=0, i<this.getOderId.length, i++){
                //   [
                //     'i+1',
                //   this.getOderId.order_products[i].product?.name,
                //   this.getOderId.order_products[i]?.qty,
                //   this.getOderId.order_products[i].product?.price,
                //   this.getOderId.order_products[i].product?.price * this.getOderId.order_products[i]?.qty,
                //  ]
                // }`,
                // [
                //   "2",
                //   this.getOderId.order_products[1]?.product.name,
                //   this.getOderId.order_products[1]?.qty,
                //   this.getOderId.order_products[1]?.product.price,
                //   this.getOderId.order_products[1]?.product.price * this.getOderId?.order_products[1]?.qty,
                // ],
              ],
              // body: this.animals,
            },
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [145, 40],
          },
          time: {
            margin: [230, 0, 0, 10],
          },
          table: {
            margin: [60, 10, 10, 10],
          },
        },
      };
      pdfMake.createPdf(docDefinition).open();
    },

    async onAction(item) {
      try {
        console.log(item, "240");
        if (item.status == 1) {
          this.status = 0;
          // console.log(item.id, this.status, "243");
          await this.putOder(item.id, this.status);
          await this.getAllOrders(this.page, this.size);
        } else {
          this.status = 1;
          // console.log(item.id, this.status, "246");
          await this.putOder(item.id, this.status);
          await this.getAllOrders(this.page, this.size);
        }
      } catch (error) {
        console.log(error);
      }
    },

    // phân trang
    async updatePage(page, size) {
      // console.log(page, size,"psiz");
      try {
        this.page = page;
        this.size = size;
        // console.log(this.page, this.size, "this.page, this.size");
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

.btn-status p {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 67%;
  height: 28px;
  margin-left: 55px;
  padding-top: 2px;
  cursor: pointer;
}
</style>
