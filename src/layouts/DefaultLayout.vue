<script>
import { RouterLink } from "vue-router";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";
import TheSideBar from "../components/TheSideBar.vue";

export default {
  methods: {
    oncroll() {
      var navbar = document.getElementById("navbar");
      // var head = document.getElementById("head");
      window.onscroll = function () {
        if (window.pageYOffset >= navbar.offsetTop) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      };
    },
  },
  components: { RouterLink, TheHeader, TheFooter, TheSideBar },
};
</script>

<template>
  <div @wheel="oncroll">
    <TheHeader />
    <div class="bg-dark">
      <div class="container">
        <TheSideBar />
        <slot></slot>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
