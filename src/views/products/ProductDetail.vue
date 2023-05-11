<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-dark">
    <div class="sub-bg">
      <div id="link" class="container">
        <div class="sub-head">
          <a href="/home"><i class="fa fa-home"></i> Trang chủ </a>
          <a href="#">Cây cảnh</a>
          <a href="#">{{ this.detailProduct.category?.name }}</a>
          <span>{{ this.detailProduct.name }}</span>
        </div>
      </div>
    </div>
    <div class="product">
      <div
        class="content-page"
        style="margin-top: 20px; width: 77%; left: 10rem"
      >
        <div class="pic-product">
          <div class="product_images_holder">
            <!-- product photos carousel -->
            <div class="flexslider" id="slider-1">
              <div
                class="flex-viewport"
                style="overflow: hidden; position: relative; height: 20rem"
              >
                <ul class="slides">
                  <!--  -->
                  <li class="flex-active-slide">
                    <v-carousel
                      height="400"
                      hide-delimiter-background
                      show-arrows="hover"
                      v-model="currentIndex"
                    >
                      <v-carousel-item
                        v-for="(img, i) in detailProduct.product_images"
                        :key="i"
                        :src="img.image_path"
                      >
                      </v-carousel-item>
                    </v-carousel>
                  </li>
                </ul>
              </div>
            </div>
            <!-- slider thumbnails -->
            <div id="slider-carousel" class="flexslider slider-carousel">
              <div class="flex-viewport">
                <ul class="slides">
                  <li
                    class="flex-active-slide"
                    v-for="(img, i) in detailProduct.product_images"
                    :key="i"
                  >
                    <img
                      :src="img.image_path"
                      :alt="item"
                      @click="goToSlideIndex(i)"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="intro-product">
          <h1>{{ this.detailProduct.name }}</h1>
          <div class="ntv-price">
            <div>
              <strong>{{ this.detailProduct.name }}</strong>
              <span>&nbsp;{{ this.detailProduct.summary }}</span>
            </div>
            <br />
            <div>{{ this.detailProduct.detail }} &nbsp;</div>
            <br />
            <div>
              <em>Lưu ý: Giá sản phẩm đã bao gồm chậu.</em>
            </div>
            <p>
              <strong>Tình trạng:</strong>
              <img
                src="https://vuoncayviet.com/img/in_stock.jpg"
                width="104"
                height="31"
              />
            </p>
            <div class="price">
              <strong>Giá bán:</strong>
              <div class="price-af">
                {{ totalPrice(this.detailProduct.price) }}
              </div>
              <div class="price-bf"></div>
            </div>
            <div class="block-button">
              <div class="quanlity-product">
                <div class="num-quanlity">
                  <input type="button" value="-" @click="onClickMinus" />
                  <p
                    name="txtCount"
                    type="text"
                    style="width: 90px; text-align: center"
                  >
                    <a class="">{{ quantity }}</a>
                  </p>
                  <input type="button" value="+" @click="onClickPlus" />
                </div>
                <div class="but-buynow">
                  <button @click="payment">Mua ngay</button>
                  <!-- <router-link to="/cartView"
                    ><button @click="addToCard">
                      Thêm vào giỏ hàng
                    </button></router-link
                  > -->
                  <button @click="addToCard">Thêm vào giỏ hàng</button>
                </div>
              </div>
              <!-- sdt tt lien he -->
              <div class="call-phone-zalo">
                <a href="tel:0985507150"
                  ><i
                    ><img
                      src="https://vuoncayviet.com/img/icon-hotline.png"
                      width="40"
                      height="40"
                  /></i>
                  &nbsp;0985507150</a
                >
                <a href="tel:0985507150"
                  ><i
                    ><img
                      src="https://vuoncayviet.com/img/icon-zalo.png"
                      width="40"
                      height="40"
                  /></i>
                  &nbsp;0985507150</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- cam ket -->
        <div class="intro-delevery">
          <div>
            <div>
              <strong>VƯỜN CÂY VIỆT CAM KẾT:</strong>
            </div>
            <ul>
              <li>Cung cấp các loại cây cảnh đa dạng với giá hợp lý</li>
              <li>
                Miễn phí giao hàng cho đơn hàng
                trên&nbsp;<strong>500.000</strong>đ (áp dụng tại các quận nội
                thành TP.HCM)
              </li>
              <li>Tư vấn và hướng dẫn chăm sóc cây tận tình</li>
              <li>
                Tư vấn kỹ lưỡng các vấn đề phong thuỷ, hợp mệnh - hợp tuổi
              </li>
              <li>Cho thuê cây cảnh văn phòng</li>
              <li>
                Hỗ trợ đổi trả sản phẩm trong vòng&nbsp;<strong>3 ngày</strong
                >&nbsp;sau khi mua
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- chi tiet san pham -->
      <div
        class="content-page"
        style="margin-top: 20px; width: 77%; left: 10rem"
      >
        <div class="detail-content">
          <h2 class="title-ct">Thông tin sản phẩm</h2>
          <!-- chi tiết sản phẩm -->
          <div class="detail-products">{{ this.detailProduct.detail }}</div>
          <div class="decription">
            <div class="but-buynow" style="width: 195px; margin: 0 auto">
              <button @click="payment">Mua ngay</button>
            </div>
          </div>
        </div>
        <!-- san pham tuong tu -->
        <div class="content-page">
          <div class="detail-content">
            <h2>Sản phẩm tương tự</h2>
            <div class="product-block relative-product">
              <ul>
                <li>
                  <div class="product">
                    <div class="pic-news">
                      <a href="#"
                        ><img
                          src="https://vuoncayviet.com/data/items/1216/thiet-moc-lan-vcv.jpg"
                          alt="Cây Thiết Mộc Lan nội thất"
                      /></a>
                    </div>
                    <h3>
                      <a href="#">Cây Thiết Mộc Lan nội thất</a>
                    </h3>
                    <div class="price-product">650,000 đ</div>
                    <div class="cart-product">
                      <a href="#"><i class="fa fa-shopping-cart"></i></a
                      ><a href="#"><i class="fa fa-eye"></i></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="product">
                    <div class="pic-news">
                      <a href="#"
                        ><img
                          src="https://vuoncayviet.com/data/items/896/mai-van-phuc-de-ban-phong-thuy-vuoncayviet.jpg"
                          alt="Cây Mai Vạn Phúc"
                      /></a>
                    </div>
                    <h3>
                      <a href="#">Cây Mai Vạn Phúc</a>
                    </h3>
                    <div class="price-product">200,000 đ</div>
                    <div class="cart-product">
                      <a href="#"><i class="fa fa-shopping-cart"></i></a
                      ><a href="#"><i class="fa fa-eye"></i></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="product">
                    <div class="pic-news">
                      <a href="#"
                        ><img
                          src="https://vuoncayviet.com/data/items/895/mai-chi-thien-phong-thuy-de-ban.jpg"
                          alt="Cây Mai Chỉ Thiên"
                      /></a>
                    </div>
                    <h3>
                      <a href="#">Cây Mai Chỉ Thiên</a>
                    </h3>
                    <div class="price-product">Liên hệ</div>
                    <div class="cart-product">
                      <a href="#"><i class="fa fa-shopping-cart"></i></a
                      ><a href="#"><i class="fa fa-eye"></i></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="product">
                    <div class="pic-news">
                      <a href="#"
                        ><img
                          src="https://vuoncayviet.com/data/items/1128/ngu-gia-bi-bonsai-vuoncayviet.jpg"
                          alt="Cây Ngũ Gia Bì bonsai"
                      /></a>
                    </div>
                    <h3>
                      <a href="#">Cây Ngũ Gia Bì bonsai</a>
                    </h3>
                    <div class="price-product">240,000 đ</div>
                    <div class="cart-product">
                      <a href="#"><i class="fa fa-shopping-cart"></i></a
                      ><a href="#"><i class="fa fa-eye"></i></a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useProductsStore } from "../../stores/products";
import { useCartStore } from "../../stores/cart";
export default {
  data() {
    return {
      quantity: 1,
      currentIndex: 0,
    };
  },

  async created() {
    try {
      let product_id = this.$route.params.id;
      await this.DetailProduct(product_id);
      // await this.getCategories(this.params);
      console.log(this.detailProduct, "detail_pro");
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions(useProductsStore, ["DetailProduct"]),
    ...mapActions(useCartStore, ["addCart"]),
    // click(img) {
    //   console.log(img, "img");
    // },

    //image slide
    goToSlideIndex(index) {
      this.currentIndex = index;
    },
    // up, dow
    onClickPlus() {
      this.quantity += 1;
    },

    onClickMinus() {
      if (this.quantity > 1) {
        this.quantity = this.quantity - 1;
      }
    },
    // them gio hang
    async addToCard() {
      try {
        let data = {
          product_id: this.detailProduct.id,
          qty: this.quantity,
        };
        // check login khi them gio hang
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const userData = localStorage.getItem("user");
        if (!isLoggedIn && !userData) {
          this.$router.push({ path: "/login" });
        } else {
          await this.addCart(data);
          alert("Đã thêm vào giỏ hàng.");
        }
        console.log(data, "tex");
      } catch (error) {
        console.log(error);
      }
    },

    // mua ngay
    async payment() {
      try {
        let data = {
          product_id: this.detailProduct.id,
          qty: this.quantity,
        };
        // check login khi them gio hang
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const userData = localStorage.getItem("user");
        if (!isLoggedIn && !userData) {
          this.$router.push({ path: "/login" });
        } else {
          await this.addCart(data);
          this.$router.push({ path: "/cartView" });
        }
        console.log(data, "tex");
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
  },
  computed: {
    ...mapState(useProductsStore, ["allProducts", "detailProduct"]),
  },
};
</script>

<style lang="scss" scoped>
.content-page {
  width: 100%;
  float: left;
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  //
  // margin-top: 20px;
  // width: 77%;
  // left: 10rem;
}
.content-page .title,
.list-product .title {
  border-bottom: 1px solid #3daa12;
  margin-bottom: 15px;
  width: 100%;
  float: left;
  text-align: left;
  margin: 0;
  padding-bottom: 10px;
  margin-bottom: 20px;
  h1 {
    font-size: 20px;
    font-weight: bold;
    color: #3daa12;
  }
}
.pic-product {
  width: 28%;
  float: left;
  img {
    //chỉnh sửa
    width: 30%;
    border: 1px solid #ccc;
    &:hover {
      border: 1px solid #f28902;
    }
  }
}
.intro-product {
  width: calc(42% - 40px);
  float: left;
  padding-top: 10px;
  margin: 0 20px;
  h1 {
    font-size: 18px;
    color: #000;
    margin-bottom: 15px;
    font-weight: bold;
    line-height: 1.4;
  }
}
.flex-active-slide {
  width: 308px;
  //chinh sua
  display: block;
}
.flexslider.slider-carousel ul.slides li.flex-active-slide {
  opacity: 1;
  //chỉnh sửa
  // width: 200%;
  padding-left: 5px;
  transition-duration: 0s;
  transform: translate3d(0px, 0px, 0px);
}
::v-deep .slides {
  display: flex;
  padding: 0 5px;
  height: 5rem;
  .v-img__img {
    height: auto;
  }
  .v-btn--icon.v-btn--density-default {
    width: 2.5rem;
    height: 2.5rem;
  }
}
.ntv-price p {
  margin-top: 10px;
  width: 100%;
  float: left;
  color: #666;
  text-align: justify;
  display: flex;
  align-items: center;
}
.ntv-price strong {
  color: #666;
  float: left;
  margin-right: 4px;
}
.ntv-price .price-bf {
  font-size: 14px;
  text-decoration: line-through;
  color: #999;
  float: left;
}
.ntv-price .price-af {
  font-size: 18px;
  color: #ff4b4b;
  float: left;
  margin-right: 10px;
}
.block-button {
  width: 100%;
  display: flex;
  float: left;
  margin-top: 10px;
}
.quanlity-product {
  width: 50%;
  float: left;
  padding-right: 15px;
  border-right: 1px solid #ccc;
}
.call-phone-zalo {
  width: 50%;
  float: left;
  padding-left: 15px;
  a {
    font-size: 20px;
    width: 100%;
    float: left;
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
}
.num-quanlity input[type="button"] {
  width: 40px;
  height: 40px;
  float: left;
  border-radius: 100px;
  font-size: 30px;
  line-height: 24px;
  color: #999;
  border: 1px solid #bbb;
  background: #fff;
}
.num-quanlity p[type="text"] {
  float: left;
  height: 38px;
  color: #999;
  border: none;
  border-bottom: 3px solid #ccc;
  // padding: 10px;
  text-align: center;
  margin: 0 12px;
  font-size: 18px;
}
.num-quanlity p a {
  text-align: center;
  padding: 0 40%;
}
.but-buynow button {
  width: 100%;
  height: 2.5em;
  float: left;
  border: none;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  background: #f28902;
  margin-top: 10px;
}
.mobile-buynow {
  display: none;
}
.intro-delevery {
  width: 30%;
  height: 30%;
  float: left;
  background: #eee;
  padding: 15px;
  .title-delevery {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
  ul li {
    margin: 10px 0;
    font-size: 13px;
  }
}
.flexslider:hover .carousel .flex-direction-nav li .flex-prev {
  left: 0;
  right: 0;
  top: 40px;
}
.flexslider:hover .carousel .flex-direction-nav a {
  opacity: 1;
}
.flexslider .carousel .flex-direction-nav a {
  line-height: 30px;
  background: #f28902;
}
::v-deep .detail-content {
  width: 100%;
  float: left;
  margin-bottom: 10px;
  line-height: 1.8;
  .detail-products ul {
    padding-left: 40px;
    margin-bottom: 10px;
  }
  h2.title-ct {
    font-weight: normal;
    font-size: 18px;
    color: #000;
    border-bottom: 1px solid #ccc;
    text-transform: uppercase;
    margin-top: 10px;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }
  .decription {
    width: 100%;
    float: left;
    margin-top: 10px;
    font-size: 14px;
    line-height: 30px;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      width: 100%;
      float: left;
      margin: 0;
      padding: 0;
      padding: 10px 0 5px 0;
    }
    p {
      padding-bottom: 15px;
    }
  }
  img {
    max-width: 100%;
    height: auto;
    text-align: center;
  }
  p {
    margin-bottom: 0;
    padding-bottom: 0;
  }
}
.detail-content h2,
.detail-news h3,
.detail-news h4,
.detail-news h5,
.detail-news h6 {
  width: 100%;
  float: left;
  padding: 10px 0;
}
.relative-product ul {
  margin: 0;
  padding: 0;
  li {
    width: 23.95%;
    float: left;
    padding-left: 0;
    margin-right: 15px;
    margin-bottom: 15px;
    border: 1px solid #eee;
    &:nth-child(3n) {
      margin-right: 15px;
    }
    &:nth-child(4n) {
      margin-right: 0;
    }
    &:nth-child(3n + 1) {
      float: left;
      clear: none;
    }
    &:nth-child(4n + 1) {
      clear: both;
    }
    .price-product {
      height: 60px;
      span {
        margin-top: -5px;
      }
    }
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
        // max-height: 100%;
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
      width: calc(90% - 102px);
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
