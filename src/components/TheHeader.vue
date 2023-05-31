<template>
  <!-- top head  -->
  <div class="top-head">
    <div class="container">
      <div class="hotline">
        <i class="fa fa-phone"></i>
        Hotline: <a href="tel:0985507150">0985507150</a>
      </div>
      <div class="cart">
        <i class="fa fa-shopping-cart"></i>
        <a href="/cartView">
          <b>Giỏ hàng {{ this.allCart.length }}</b>
        </a>
      </div>
      <div class="login">
        <!-- đã đăng nhập -->
        <ul v-if="this.store.auth.isLoggedIn == true">
          <li>
            <a href="#"
              ><i class="fa fa-user-circle"></i>
              {{ this.store.auth.user.fullname }}</a
            >
            <ul class="info">
              <li id="user-profile">
                <router-link to="/thong-tin-tai-khoan"
                  >Thông tin cá nhân</router-link
                >
              </li>
              <li id="changePassword">
                <router-link to="/thay-doi-mat-khau">Đổi mật khẩu</router-link>
              </li>
              <li>
                <router-link to="don-hang-cua-toi"
                  >Đơn Hàng Của Tôi</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <a @click="handaleLogOut()"
              ><i class="fa fa-sign-out"></i>Đăng xuất</a
            >
          </li>
        </ul>
        <!-- chưa đăng nhập -->
        <ul v-else>
          <li>
            <a href="#">
              <i class="fa fa-unlock-alt"></i>
              Đăng Nhập
            </a>
            <ul>
              <li>
                <a href="/login" class="login">
                  <i class="fa fa-sign-in"></i>
                  Đăng Nhập
                </a>
              </li>
              <li>
                <a href="#" class="facebook">
                  <i class="fa fa-facebook"></i>
                  Login with Facebook
                </a>
              </li>
              <li>
                <a href="#" id="customBtn" name="customBtn" class="google">
                  <i class="fa fa-google"></i>
                  Login with Google
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/signup">
              <i class="fa fa-user-plus"></i>
              Tạo Tài Khoản
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- header  -->
  <div class="header">
    <div class="container">
      <div class="logo">
        <a href="/home">
          <img src="https://vuoncayviet.com/img/logo.png" alt="Vườn Cây Việt" />
        </a>
      </div>
      <div class="widget-head">
        Vườn Cây Việt
        <br />
        <span>Không Chỉ Là Cây Cảnh</span>
      </div>
      <div class="search-block">
        <input
          class="form-control"
          type="text"
          placeholder="Tìm Kiếm"
          v-model="searchProduct"
          @keyup.enter="onSearch()"
          @input="searchText($event)"
        />
        <button @click="onSearch()">Tìm kiếm</button>
      </div>
    </div>
  </div>

  <!-- navbar  -->
  <div class="nav-bar">
    <div id="navbar" class="">
      <div class="container">
        <nav>
          <div id="cssmenu">
            <div id="menu-button"></div>
            <ul>
              <!-- Giới thiệu -->
              <li>
                <router-link to="/chuyen-muc-gioi-thieu"
                  >Giới thiệu</router-link
                >
              </li>
              <!-- Cây cảnh -->
              <li class="has-sub">
                <span class="submenu-button"></span
                ><a href="#" target="">Cây cảnh</a>
                <ul class="hover-nav">
                  <li
                    v-for="(item, index) in allCategory.results?.[7].categories"
                    :key="index"
                  >
                    <a @click="categoryView(item.id)">{{ item.name }}</a>
                  </li>
                  <!-- <li>{{ this.allCategory.results[0].name }}</li> -->
                  <!-- <li>
                    <a @click="categoryView(1)">Cây cảnh để bàn</a>
                  </li>
                  <li>
                    <a @click="categoryView(18)">Cây thủy sinh</a>
                  </li> -->
                  <!-- <li>
                    <a>Cây cảnh nội thất</a>
                  </li>
                  <li>
                    <a href="#" target="">Sen đá, xương rồng</a>
                  </li>
                  <li>
                    <a href="#" target="">Cây chậu treo</a>
                  </li>

                  <li>
                    <a href="#" target="">Terrarium</a>
                  </li>

                  <li>
                    <a href="#" target="">Cây cảnh ngoại thất</a>
                  </li>

                  <li>
                    <a href="#" target="">Cây Bonsai</a>
                  </li>

                  <li>
                    <a href="#" target="">Cây ăn trái</a>
                  </li> -->
                </ul>
              </li>
              <!-- Chậu cảnh -->
              <li class="has-sub">
                <span class="submenu-button"></span
                ><a href="#" target="">Chậu cảnh</a>
                <ul class="hover-nav">
                  <li
                    v-for="(item, index) in allCategory.results?.[6].categories"
                    :key="index"
                  >
                    <a @click="categoryView(item.id)">{{ item.name }}</a>
                  </li>
                  <!-- <li>
                    <a href="#" target="">Chậu đất nung</a>
                  </li>

                  <li>
                    <a href="#" target="">Chậu đá mài - xi măng</a>
                  </li>

                  <li>
                    <a href="#" target="">Chậu composite</a>
                  </li>

                  <li>
                    <a href="#" target="">Chậu Bonsai</a>
                  </li>

                  <li>
                    <a href="#" target="">Chậu men sứ</a>
                  </li>

                  <li>
                    <a href="#" target="">Chậu thủy tinh</a>
                  </li>

                  <li>
                    <a href="#" target="">Chậu nhựa ABS</a>
                  </li> -->
                </ul>
              </li>
              <!-- Phụ kiện -->
              <li class="has-sub">
                <span class="submenu-button"></span
                ><a href="#" target="">Phụ kiện cây cảnh</a>

                <ul class="hover-nav">
                  <li>
                    <a href="#" target="">Đất trồng, phân bón</a>
                  </li>

                  <li>
                    <a href="#" target="">Dung dịch thủy sinh</a>
                  </li>

                  <li>
                    <a href="#" target="">Dụng cụ làm vườn</a>
                  </li>

                  <li>
                    <a href="#" target="">Vật trang trí tiểu cảnh</a>
                  </li>
                </ul>
              </li>
              <!-- Dịch vụ  -->
              <li>
                <router-link to="/chuyen-muc-dich-vu">Dịch Vụ</router-link>
                <!-- Tin túc  -->
              </li>

              <li class="has-sub">
                <span class="submenu-button"></span
                ><a href="#" target="">Blog - Tin Tức</a>

                <ul class="hover-nav">
                  <li>
                    <router-link to="/chuyen-muc-kien-thuc-cay-canh"
                      >Kiến Thức Cây Cảnh</router-link
                    >
                  </li>

                  <li>
                    <router-link to="/chuyen-muc-video-demo">Video</router-link>
                  </li>
                </ul>
              </li>
              <!-- Hỗ trợ  -->
              <li class="has-sub">
                <span class="submenu-button"></span
                ><a href="#" target="">Hỗ trợ</a>

                <ul class="hover-nav">
                  <li>
                    <router-link to="/chuyen-muc-huong-dan-mua-hang"
                      >Hướng dẫn mua hàng</router-link
                    >
                  </li>

                  <li>
                    <router-link to="/chuyen-muc-bao-hanh"
                      >Chính sách đổi, trả hàng</router-link
                    >
                  </li>
                </ul>
              </li>
              <!-- Liên hệ -->
              <li>
                <router-link to="/chuyen-muc-lien-he">Liên hệ</router-link>
              </li>
              <!-- Khuyến mãi  -->
              <li>
                <router-link to="/chuyen-muc-khuyen-mai"
                  >Khuyến mãi</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <slot></slot>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUsersStore } from "../stores/users";
import { useCartStore } from "../stores/cart";
import { useProductsStore } from "../stores/products";
export default {
  data() {
    return {
      store: useUsersStore(),
    };
  },
  //lấy thông tin đăng nhập
  async created() {
    try {
      this.params.page = 1;
      this.params.size = 10;
      await this.store.getProfile();
      await this.getCarts();
      await this.getCategories(this.params);
      // console.log(this.allCategory, "allcategory");
      // console.log(this.allCart, "000");
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions(useUsersStore, ["logout"]),
    ...mapActions(useCartStore, ["getCarts"]),
    ...mapActions(useProductsStore, ["getProduct", "getCategories"]),

    async categoryView(category_id) {
      try {
        this.params.page = 1;
        this.params.size = 10;
        this.params.category_id = category_id;
        // await this.getProduct(this.params);
        // this.$router.push({ path: "/CategoryView" });
      } catch (error) {
        console.log(error);
      }
    },

    //tim kiem
    async onSearch() {
      console.log("search", this.params);
      this.params.keyword = this.searchProduct;
      this.params.page = 1;
      await this.getProducts(this.params);
      this.showSearches = false;
    },
    async searchText(event) {
      let value = event.target.value;
      console.log(value);
      if (value === "") {
        this.onSearch();
      }
    },

    // đăng xuất
    handaleLogOut() {
      this.logout();
      this.$router.push({ path: "/home" });
    },
  },
  computed: {
    ...mapState(useCartStore, ["allCart"]),
    ...mapState(useProductsStore, [
      "getProducts",
      "allProducts",
      "params",
      "allCategory",
    ]),
  },
};
</script>

<style lang="scss" scoped>
//top head
.top-head {
  width: 100%;
  float: left;
  background: #eee;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 0px 10%;
  .hotline {
    float: left;
    padding-top: 0.5rem;
    color: #666;
    a {
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    }
    i {
      font-size: 15px;
      color: #f00;
      float: left;
      margin-top: 3px;
      margin-right: 5px;
    }
  }
  .cart {
    float: right;
    background: #f28902;
    color: #fff;
    padding: 5px 10px;
    margin-left: 10px;
    font-size: 11px;
    i {
      margin-right: 5px;
      font-size: 20px;
    }
    a {
      color: #fff;
      font-size: 12px;
      b {
        color: #ff0;
        font-size: 14px;
      }
    }
  }
  .login {
    float: right;
    color: #333;
    position: relative;
    .info {
      width: 130px;
      left: 6px;
      top: 35px;
      a {
        background: #fff;
        color: #333;
        border-bottom: 0;
        margin: 0;
        padding: 0;
        &:hover {
          background: none;
          color: #f28902;
          border-bottom: 0;
        }
      }
    }
    ul > li {
      float: left;
      padding: 7px 0 5px 18px;
      text-transform: uppercase;
      max-width: 200px;
      i {
        margin-right: 5px;
      }
    }
    ul li a {
      font-weight: 600;
      font-size: 11px;
      cursor: pointer;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
    }
    ul li ul {
      display: none;
      top: 35px;
      padding: 10px 15px;
      position: absolute;
      left: 0;
      width: 200px;
      background: #fff;
      z-index: 999;
      border: 1px solid #eee;
      border-top: none;
      li {
        width: 100%;
        padding: 0;
        margin: 5px 0;
        float: left;
        a {
          background: #999;
          color: #fff;
          padding: 4px 10px 4px 0;
          width: 100%;
          float: left;
          border-radius: 4px;
          font-weight: normal;
          text-transform: capitalize;
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          i {
            width: 30px;
            border-right: 1px solid rgba(0, 0, 0, 0.1);
            text-align: center;
            font-size: 20px;
            margin-right: 10px;
          }
          &.login {
            background: #f28902;
          }
          &.facebook {
            background: #5670a3;
          }
          &.google {
            background: #dd4c39;
          }
          &:hover {
            background: #999;
            border-bottom: 2px solid rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
    ul li:hover ul {
      display: block;
    }
  }
  @media (max-width: 1280px) {
    .top-head {
      width: 96%;
      padding: 0 2%;
    }
  }
}

// head
.header {
  width: 100%;
  float: left;
  margin-top: 33px;
  .logo {
    width: 110px;
    float: left;
    a {
      width: 100%;
      float: left;
      padding: 10px 10px 3px 0;
    }
    img {
      height: 80px;
    }
  }
  .widget-head {
    float: left;
    font-size: 20px;
    color: #090;
    margin-top: 20px;
    span {
      font-size: 20px;
      font-weight: bold;
      color: #ff8000;
      float: left;
      margin-top: 10px;
    }
  }
  .search-block {
    display: flex;
    width: 300px;
    float: right;
    margin-top: 30px;
    button {
      border: none;
      background: #f28902;
      float: left;
      color: #fff;
      width: 100px;
      padding: 9px 0 8px 0;
      border-radius: 0 5px 5px 0;
    }
  }
}

// navbar
.nav-bar {
  .sticky {
    position: fixed;
    z-index: 99;
    margin-top: 34px;
    transition: 0.4s ease;
    -webkit-transition: 0.4s ease;
  }
  a {
    cursor: pointer;
  }

  #navbar {
    width: 100%;
    float: left;
    background: #3daa12;
    #cssmenu,
    #cssmenu ul,
    #cssmenu ul li,
    #cssmenu ul li a,
    #cssmenu #menu-button {
      margin: 0;
      padding: 0;
      border: 0;
      list-style: none;
      line-height: 1;
      display: block;
      position: relative;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    #cssmenu:after,
    #cssmenu > ul:after {
      content: ".";
      display: block;
      clear: both;
      visibility: hidden;
      line-height: 0;
      height: 0;
    }
    #cssmenu #menu-button {
      display: none;
    }
    #cssmenu {
      float: left;
      z-index: 998;
      > ul > li {
        float: left;
        > a {
          padding: 17px 16px;
          font-size: 14px;
          text-decoration: none;
          color: #fff;
          font-weight: 500;
        }
        &:hover > a,
        &.active > a {
          background: rgba(0, 0, 0, 0.2);
        }
        &.has-sub > a {
          padding-right: 20px;
          &:after {
            content: "\f0d7";
            margin-left: 5px;
            font-family: "FontAwesome";
          }
        }
        &.has-sub:hover > a:after {
          content: "\f0d7";
          font-family: "FontAwesome";
        }
        &.has-sub .hover-nav {
          box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
            rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
            rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
          li {
            border-top: solid 1px #e4e1e1;
            &:hover {
              background: rgba(0, 0, 0, 0.1);
              margin-top: -2px;
            }
            a {
              margin: 6px 0;
            }
          }
        }
      }
      &.align-center > ul {
        font-size: 0;
        text-align: center;
        > li {
          display: inline-block;
          float: none;
        }
      }
      &.align-center ul ul {
        text-align: left;
      }
      &.align-right > ul > li {
        float: right;
      }
      ul ul {
        position: absolute;
        left: -9999px;
        li {
          height: 0;
          -webkit-transition: all 0.25s ease;
          -moz-transition: all 0.25s ease;
          -ms-transition: all 0.25s ease;
          -o-transition: all 0.25s ease;
          transition: all 0.25s ease;
          a {
            border-bottom: 1px solid rgba(150, 150, 150, 0.15);
            padding: 9px 15px;
            width: 180px;
            font-size: 13px;
            text-decoration: none;
            color: #fff;
            font-weight: 400;
            text-align: left;
          }
          &:last-child > a,
          &.last-item > a {
            border-bottom: 0;
          }
          &:hover > a,
          a:hover {
            background: rgba(0, 0, 0, 0.1);
            color: #fff;
          }
          &.has-sub > a:before {
            content: "\f0da";
            font-family: "FontAwesome";
            position: absolute;
            right: 10px;
            top: 10px;
          }
        }
        ul {
          margin-left: 100%;
          top: 0;
        }
      }
      &.align-right ul ul {
        text-align: right;
        ul {
          margin-left: 0;
          margin-right: 100%;
        }
        li.has-sub > a:before {
          right: auto;
          left: 14px;
        }
      }
      li:hover > ul {
        left: auto;
        background: #3daa12;
        > li {
          height: auto;
        }
      }
      &.align-right li:hover > ul {
        left: auto;
        right: 0;
      }
      &.small-screen {
        width: 100%;
        ul {
          width: 100%;
          display: none;
          li {
            width: 100%;
            border-top: 1px solid #999;
          }
          li a,
          ul li a {
            width: 100%;
            border-bottom: 0;
            h2 {
              font-size: 14px;
            }
          }
          ul li a {
            padding-left: 25px;
          }
          ul ul li a {
            padding-left: 35px;
          }
          ul li a {
            color: #dddddd;
            background: none;
          }
          ul li:hover > a,
          ul li.active > a {
            color: #f68220;
          }
          ul .submenu-button {
            height: 34px;
            width: 34px;
            &:after {
              top: 15px;
              right: 13px;
            }
            &:before {
              top: 12px;
              right: 16px;
            }
          }
        }
        &.align-center > ul {
          text-align: left;
        }
        ul ul li,
        li:hover > ul > li {
          height: auto;
        }
        > ul > li {
          float: none;
        }
        ul ul,
        ul ul ul,
        &.align-right ul ul {
          position: relative;
          left: 0;
          width: 100%;
          margin: 0;
          text-align: left;
        }
        > ul > li.has-sub > a:after,
        > ul > li.has-sub > a:before,
        ul ul > li.has-sub > a:after,
        ul ul > li.has-sub > a:before {
          display: none;
        }
        #menu-button {
          display: block;
          padding: 18px 0 18px 40px;
          color: #fff;
          cursor: pointer;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 700;
          background: #3daa12;
          &:after {
            content: "";
            position: absolute;
            top: 22px;
            left: 10px;
            display: block;
            height: 8px;
            width: 20px;
            border-top: 2px solid #fff;
            border-bottom: 2px solid #fff;
          }
          &:before {
            content: "";
            position: absolute;
            top: 16px;
            left: 10px;
            display: block;
            height: 2px;
            width: 20px;
            background: #fff;
          }
          &.menu-opened:after {
            top: 23px;
            border: 0;
            height: 2px;
            width: 15px;
            background: #000;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          &.menu-opened:before {
            top: 23px;
            background: #000;
            width: 15px;
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
          }
        }
        .submenu-button {
          position: absolute;
          z-index: 99;
          right: 0;
          top: 0;
          display: block;
          border-left: 1px solid rgba(120, 120, 120, 0.2);
          height: 46px;
          width: 46px;
          cursor: pointer;
          &.submenu-opened {
            background: #262626;
            &:after {
              background: #ffffff;
            }
            &:before {
              display: none;
            }
          }
          &:after {
            position: absolute;
            top: 22px;
            right: 19px;
            width: 8px;
            height: 2px;
            display: block;
            background: #dddddd;
            content: "";
          }
          &:before {
            position: absolute;
            top: 19px;
            right: 22px;
            display: block;
            width: 2px;
            height: 8px;
            background: #dddddd;
            content: "";
          }
        }
        &.select-list {
          padding: 5px;
        }
      }
    }
  }
}
</style>
