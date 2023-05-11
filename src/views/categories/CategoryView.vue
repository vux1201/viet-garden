<template>
  <div class="main-block list-product">
    <div class="head-content">
      <div class="title">
        <h1>{{ this.allProducts.results[0].category.name }}</h1>
      </div>
      <div class="detail-content">
        <div class="decription">
          <div>&nbsp;&nbsp;&nbsp; Mô tả:</div>
        </div>
      </div>
    </div>

    <!-- hiển thị sản phẩm -->
    <div class="product-block">
      <ul>
        <li v-for="(item, index) in allProducts.results" :key="index">
          <div class="product">
            <div class="pic-news">
              <a href="#"
                ><img
                  :src="item.product_images[0]?.image_path"
                  :alt="item.name"
              /></a>
            </div>
            <h3>
              <a href="#">{{ item.name }}</a>
            </h3>
            <div class="price-product">{{ item.price }}</div>
            <div class="cart-product">
              <a href="/cartView"><i class="fa fa-shopping-cart"></i></a>
              <router-link :to="'/productView/' + item.id"
                ><i class="fa fa-eye"></i
              ></router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useProductsStore } from "../../stores/products";
export default {
  data() {
    return {
      list: "",
      classProducts: "",
    };
  },
  async created() {
    try {
      // await this.getProduct();
      console.log(this.allProducts, "allofClas");
    } catch (error) {
      console.log(error);
    }
  },
  // mounted() {
  //   this.getData();
  // },
  methods: {
    ...mapActions(useProductsStore, ["getProduct"]),
    // Lấy giữu liệu từ API
    // async getData() {
    //   try {
    //     const response = await axios.get(
    //       Api + "/products?class=" + this.$route.params.class
    //     );
    //     this.list = response.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
  computed: {
    ...mapState(useProductsStore, ["allProducts"]),
  },
  //lấy class sp
  // watch: {
  //   class(newVal) {
  //     if (newVal[0].class) {
  //       axios(Api + "/class?id=" + newVal[0].class)
  //         .then((response) => response.json())
  //         .then((data) => (this.classProducts = data));
  //     }
  //     console.log(this.classProducts, 1);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.list-product {
  padding-top: 20px;
}
.main-block {
  width: calc(75% - 15px);
  float: right;
  margin-left: 15px;
}
.detail-content {
  width: 100%;
  float: left;
  margin-bottom: 10px;
  line-height: 1.8;
  .decription {
    width: 100%;
    float: left;
    margin-top: 10px;
    font-size: 14px;
    line-height: 30px;
  }
}
.content-page .title,
.list-product .title {
  border-bottom: 1px solid #3daa12;
  width: 100%;
  float: left;
  text-align: left;
  margin: 0;
  margin-bottom: 15px;
  padding-bottom: 10px;
  h1 {
    margin-top: 3px;
    font-size: 20px;
    font-weight: bold;
    color: #3daa12;
  }
}
.product-block {
  width: 100%;
  float: left;
  ul li {
    width: 32.14%;
    float: left;
    margin-right: 15px;
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
