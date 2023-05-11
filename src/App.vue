<template>
  <component :is="layout">
    <!-- <RouterView :layout.sync="layout" /> -->
    <RouterView />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import BaseLayout from "./layouts/BaseLayout.vue";
import AdminLayout from "./layouts/AdminLayout.vue";

const route = useRoute();
const layout = computed(() => {
  if (route.path.includes("chuyen-muc") || route.path.includes("home")) {
    return DefaultLayout;
  }
  if (route.path.includes("quan-ly")) {
    return AdminLayout;
  } else {
    return BaseLayout;
  }
});
</script>

<style lang="scss">
@import "./assets/style/reset.css";

.container {
  margin-right: auto;
  margin-left: auto;
}
.bg-dark {
  background: #eee;
  width: 100%;
  float: left;
}
.content-page {
  width: 100%;
  float: left;
  background: #fff;
  padding: 20px;
  margin: 20px;
}
.form-control {
  padding: 1px 10px;
  border: 1px solid #ccc;
  width: calc(100% - 100px);
}
.detail-news {
  line-height: 1.8;
  font-size: 14px;
  width: 97.68%;
  h1 {
    font-size: 26px;
    color: #ff6600;
    padding-bottom: 5px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 100%;
    float: left;
    padding: 10px 0;
  }
  ul li {
    list-style: inherit;
    margin: auto;
    padding-left: 30px;
    list-style-position: inside;
  }
  p {
    margin: 0 0 10px;
  }
  img {
    max-width: 100%;
    height: auto;
    text-align: center;
    margin: 10px px 0;
  }
}
.title {
  width: 100%;
  float: left;
  color: #333333;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: left;
  border-bottom: 1px solid #ff8000;
  a {
    color: #ff8000;
    width: 100%;
    float: left;
    padding-bottom: 10px;
    position: relative;
    font-weight: bold;
  }
}
.title-signin {
  width: 100%;
  float: left;
  color: #444;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.sub-bg {
  width: 100%;
  height: 50px;
  float: left;
}
.sub-head {
  font-size: 13px;
  width: 100%;
  float: left;
  // padding: 15px 0;
  top: 30px;
  padding: 0 23px 20px;
  a {
    color: #333;
    font-size: 12px;
    padding-right: 10px;
    float: left;
    &:after {
      content: "\f101";
      font-family: "FontAwesome";
      color: #04476d;
      padding-left: 5px;
    }
    &:hover {
      color: #3daa12;
    }
  }
  span {
    float: left;
    font-size: 13px;
    color: #ff6600;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1145px;
  }
}
</style>
