<template>
  <!-- banner  -->
  <!-- <div class="bg-dark" style="left: -9rem">
    <div class="container">
      <div class="content">
        <div class="banner-slider">
          <div class="slider">
            <div class="item">
              <image src="" alt="">
                <v-carousel
                  cycle
                  height="400"
                  hide-delimiter-background
                  show-arrows="hover"
                >
                  <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    :src="slide.src"
                  >
                  </v-carousel-item>
                </v-carousel>
              </image>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="bg-dark">
    <!-- banner  -->

    <!-- <div class="banner-slider">
      <div class="slider">
        <div class="item">
          <image src="" alt="">
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              show-arrows="hover"
            >
              <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                :src="slide.src"
              >
              </v-carousel-item>
            </v-carousel>
          </image>
        </div>
      </div>
    </div> -->

    <div class="main">
      <div class="content-page detail-news">
        <div class="title">
          <a title="Sản phẩm bán chạy">
            <span>Sản phẩm mới nhất</span>
          </a>
        </div>
        <div class="product-block">
          <ul>
            <li v-for="(item, index) in allProducts" :key="index">
              <div class="product">
                <div class="pic-news">
                  <router-link :to="'/productView/' + item.id">
                    <img
                      :src="item.product_images[0].image_path"
                      :alt="item.name"
                  /></router-link>
                </div>
                <h3 class="name-product">
                  <router-link :to="'/productView/' + item.id">{{
                    item.name
                  }}</router-link>
                  <!-- <a>({{ item.id }})({{ item.category.id }})</a> -->
                </h3>
                <div class="price-product">{{ totalPrice(item.price) }}</div>
                <div class="cart-product">
                  <!-- @click="addToCart" -->
                  <a @click="addToCard(item.id)">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                  <router-link :to="'/productView/' + item.id"
                    ><i class="fa fa-eye"></i
                  ></router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useProductsStore } from "../stores/products";
import { useUsersStore } from "../stores/users";
import { useCartStore } from "../stores/cart";
export default {
  data() {
    return {
      store: useProductsStore,
      valCategory: [],
      slides: [
        {
          src: "https://vuoncayviet.com/data/aditems/93/vuon-cay-viet-banner-new.jpg",
        },
        {
          src: "https://lh3.googleusercontent.com/WYHmLSJ2u0hDe9UfCB3Zq55kusoJG-hkfnZlmq2QnvcbjzTg78Mtq0NlIPiMjSyxXHAdso67lAHMG7wFWmEzEmfXFnQkGQluZwQrI_Ld1EpwWPu2HdQmV-i9IcShCZfpsIqfne4lZC6sP2cbHt1kDlnBTihfXChdyWvI3uo26pbSuiPs21IoXD73TWrOc06j5vOu349OLORX-y51AGIvMZ3m0Wg806QrCLFVwZDjmiRrflBOVnYThwUopRijlIqXE6wTZtHefX51OOdhCsjlTC2Ph_VP_e34IsmXIkrRK-Aw5aawM00wqOGA_ERfQDMpkLXr2dkA3SmYHrTVpKDEHrPMT8nnllX-H4pX30ualzalMhjH6_fnhuu_bihnhYCygiQq1D_hzDYLOD7nsKOvJSyLwl2UpVsOMPunyTWNf97J0iEdVH35sCWWbridIYt1QAr0aBqg6SElKRiysUdGu2LJgk3cZoWXgFtLV7OG8yJC13Y-dXbUgZ3nc4_jIwhvRo3MSgWHMeKj_r0GqZjeyuPIDC9WKW5DVEjvHNUU7rfuCZgcgiOyYZZYQpWbXzN9bzH9gU48MnrI0FlpWxHISIVsX9HGEWn5G5u3PUDNZw4OvKbNm2p9oLVKLFJrfYPRAiL58sXZlDxK7vWMO-eXhxJd4CRs5CoHzJfWfDsoETPhgtJHE2zhV3qxL7_mDb6p5VNv1KFWRDxvN_Rc0dIifQHxLYgiUogKXR4GRkGUp6vmpp8-4nkU6B4OZsP4hDCDPwyoXLv-ogAumYyR6fp4_zU_5rdbd0YugqUB3AeqzgwMgSqSspwnSu-53g8c4yXKGuAHwQyWQFCXn2nYHKmhThAuuUUGSyBVUSqfTcMeErskrlzHKANLQDh5uCJ5pKpW1Zw6bf-Vevu5NiLcPzLTYnQXhkPTCwwfRccli-cm4-DZ5_c=w1920-h674-no?authuser=0",
        },
      ],
    };
  },

  // Lấy giữu liệu từ API
  async created() {
    try {
      this.params.page = 1;
      this.params.size = 10;
      await this.getProducts(this.params);
      // await this.getDetailProduct(5);
      // await this.getCategories(this.params);
      console.log(this.allProducts, "product");
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    ...mapActions(useProductsStore, ["getProducts", "DetailProduct"]),
    ...mapActions(useUsersStore, ["getProfile"]),
    ...mapActions(useCartStore, ["addCart"]),
    // hot fix : check login
    // async addToCart() {
    //   try {
    //     this.getProfile();
    //     console.log(this.getProfile);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    // doi tien
    totalPrice(price) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(price);
    },

    // them gio hang
    async addToCard(id) {
      try {
        let data = {
          product_id: id,
          qty: 1,
        };

        // check login khi them gio hang
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const userData = localStorage.getItem("user");
        if (!isLoggedIn && !userData) {
          this.$router.push({ path: "/login" });
        } else {
          alert("Đã thêm vào giỏ hàng.");
          await this.addCart(data);
        }

        // this.$router.push({ path: "/cartView" });
        console.log(data, "tex");
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState(useProductsStore, [
      "params",
      "allProducts",
      "getDetailProduct",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin: 20px;
}
.banner-slider {
  width: 100%;
  float: left;
}
::v-deep .v-img__img {
  width: auto;
}
.content {
  display: flex;
}
.content-page {
  margin: 0;
  width: 102.5%;
}
.product-block {
  width: 100%;
  float: left;
  ul li {
    width: 32.14%;
    float: left;
    // margin-right: 15px;
    margin-bottom: 15px;
    background: #fff;
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:nth-child(3n + 1) {
      clear: both;
    }
    .product {
      width: 100%;
      float: left;
      padding-bottom: 10px;
      .name-product {
        text-transform: capitalize;
      }
    }
    .pic-news {
      position: relative;
      width: 100%;
      float: left;
      background: #fff;
      margin-bottom: 5px;
      overflow: hidden;
      > a {
        width: 500px;
        height: 270px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
        &:hover {
          transform: scale(1.2);
          -webkit-transform: scale(1.2);
          -moz-transform: scale(1.2);
          -o-transform: scale(1.2);
          -ms-transform: scale(1.2);
        }
      }
      img {
        max-width: 100%;
        max-height: 106%;
      }
    }
    h3 {
      font-size: 14px;
      font-weight: bold;
      width: 100%;
      line-height: 150%;
      padding: 0 10px;
      float: left;
      overflow: hidden;
      height: 40px;
      a {
        color: #000;
        display: table-cell;
        vertical-align: middle;
        height: 40px;
        margin: 0;
        padding: 0;
        &:hover {
          color: #f28902;
        }
      }
    }
    .price-product {
      color: #f00;
      font-size: 18px;
      width: calc(96% - 102px);
      float: left;
      padding: 10px 0 0 10px;
      height: 50px;
      span {
        clear: both;
        font-size: 12px;
        color: #999;
        float: left;
        width: 100%;
        text-decoration: line-through;
      }
    }
    .cart-product a {
      width: 42px;
      background: #f28902;
      color: #fff;
      float: left;
      text-align: center;
      margin: 4px 0 0 4px;
      padding: 6px 0;
      &:hover {
        background: #3daa12;
      }
    }
  }
}
</style>
