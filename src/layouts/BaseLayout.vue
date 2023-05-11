<script>
import { RouterLink } from "vue-router";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";

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
  components: { RouterLink, TheHeader, TheFooter },
};
</script>

<template>
  <div @wheel="oncroll">
    <TheHeader />
    <slot></slot>
    <TheFooter />
  </div>
</template>
