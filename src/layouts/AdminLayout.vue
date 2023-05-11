<script>
import { RouterLink } from "vue-router";
import TheSideBarAdmin from "../components/TheSideBarAdmin.vue";

export default {
  methods: {},
  components: { RouterLink, TheSideBarAdmin },
};
</script>

<template>
  <div>
    <TheSideBarAdmin />
    <slot></slot>
  </div>
</template>
