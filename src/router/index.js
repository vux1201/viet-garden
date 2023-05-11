import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // home
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    // introduce
    {
      path: "/chuyen-muc-gioi-thieu",
      name: "introduce",
      component: () => import("../views/navbar/IntroduceView.vue"),
    },
    // dich vu
    {
      path: "/chuyen-muc-dich-vu",
      name: "service",
      component: () => import("../views/navbar/ServiceView.vue"),
    },
    // kien thuc cay canh
    {
      path: "/chuyen-muc-kien-thuc-cay-canh",
      name: "bonsai-knowledge",
      component: () => import("../views/navbar/BonsaiKnowledgeView.vue"),
    },
    // video demo
    {
      path: "/chuyen-muc-video-demo",
      name: "video-demo",
      component: () => import("../views/navbar/VideoDemoView.vue"),
    },
    // huong dan mua hang
    {
      path: "/chuyen-muc-huong-dan-mua-hang",
      name: "shopping-guide",
      component: () => import("../views/navbar/ShoppingGuideView.vue"),
    },
    // bao hanh
    {
      path: "/chuyen-muc-bao-hanh",
      name: "guarantee",
      component: () => import("../views/navbar/GuaranteeView.vue"),
    },
    // lien he
    {
      path: "/chuyen-muc-lien-he",
      name: "contactView",
      component: () => import("../views/navbar/ContactView.vue"),
    },
    // khuyen mai
    {
      path: "/chuyen-muc-khuyen-mai",
      name: "promotion",
      component: () => import("../views/navbar/PromotionView.vue"),
    },
    // dang nhap
    {
      path: "/login",
      name: "login",
      component: () => import("../components/LoginForm.vue"),
    },
    // tao tai khoan
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/user/SignupForm.vue"),
    },
    // xu ly quên mk
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("../views/user/HandleForgotPassword.vue"),
    },
    // xem thong tin tk
    {
      path: "/thong-tin-tai-khoan",
      name: "user-profile",
      component: () => import("../views/user/UserProfileView.vue"),
    },
    // xu ly doi mk
    {
      path: "/thay-doi-mat-khau",
      name: "changePassword",
      component: () => import("../views/user/HandleChangePassword.vue"),
    },
    // xem don hang
    {
      path: "/don-hang-cua-toi",
      name: "myOrder",
      component: () => import("../views/user/MyOrderView.vue"),
    },
    // xem chi tiet don hang
    {
      path: "/order-details",
      name: "order-details",
      component: () => import("../views/user/OrderDetailsView.vue"),
    },
    // gio hang
    {
      path: "/cartView",
      name: "cartView",
      component: () => import("../views/payment/CartView.vue"),
    },
    // dang nhap thanh toan
    {
      path: "/PaymentLogin",
      name: "PaymentLogin",
      component: () => import("../views/payment/PaymentLogin.vue"),
    },
    // dia chi thanh toan
    {
      path: "/PaymentAddress",
      name: "PaymentAddress",
      component: () => import("../views/payment/PaymentAddress.vue"),
    },
    // thanh toan
    {
      path: "/PayView",
      name: "PayView",
      component: () => import("../views/payment/PayView.vue"),
    },
    //danh mục sản phẩm
    {
      path: "/categoryView",
      name: "categoryView",
      component: () => import("../views/categories/CategoryView.vue"),
      // children: [
      //   {
      //     path: "/CategoryView/:class",
      //     name: "CategoryView",
      //     component: () => import("../views/admin/categories/categoryView.vue"),
      //   },
      // ],
    },
    // chi tiet san pham
    {
      path: "/ProductView",
      name: "ProductView",
      component: () => import("../views/products/ProductDetail.vue"),
      children: [
        {
          path: "/productView/:id",
          name: "productView",
          component: () => import("../views/products/ProductDetail.vue"),
        },
      ],
    },
    // quan ly san pham
    {
      path: "/quan-ly-san-pham",
      name: "ProductManagementView",
      component: () => import("../views/admin/ProductManagementView.vue"),
    },
    // quan ly danh muc
    {
      path: "/quan-ly-danh-muc",
      name: "CategoriesManagementView",
      component: () => import("../views/admin/CategoriesManagementView.vue"),
    },
    // quan ly nguoi dung
    {
      path: "/quan-ly-nguoi-dung",
      name: "UserManagementView",
      component: () => import("../views/admin/UserManagementView.vue"),
    },
    // quan ly don hang
    {
      path: "/quan-ly-don-hang",
      name: "OrderManagementView",
      component: () => import("../views/admin/OrderManagementView.vue"),
    },
  ],
});

export default router;
