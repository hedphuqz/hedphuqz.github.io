<template>
  <div class="full" style="position: relative">
    <sub-nav :links="navLinks" ref="subNav" />
  </div>
</template>

<script>
import SubNav from "../components/SubNav.vue";
export default {
  name: "about",
  components: {
    SubNav
  },
  data: () => ({
    navLinks: [{ name: "Back", linkTo: "/" }]
  }),
  mounted() {},
  beforeRouteLeave(to, from, next) {
    // Allow time to precess animations before updating DOM
    this.$refs.subNav.staggerOut();
    setTimeout(() => next(), 1000);
  },
  beforeRouteEnter(to, from, next) {
    next(vm => setTimeout(() => vm.$refs.subNav.staggerIn(), 2000));
  }
};
</script>
