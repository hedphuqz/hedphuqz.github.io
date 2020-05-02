<template>
  <div class="full" style="position: relative">
    <sub-nav ref="subNav" />
    <div ref="aboutContent" class="contentView aboutContainer">
      <img src="../assets/DSC02278~2.jpg" />
      <h1 ref="hiword" style="font-weight: 100;">Hey!</h1>
      <p :key="i" v-for="i in 5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis
        eaque esse blanditiis laborum perferendis deleniti, perspiciatis nostrum
        cum eius, sapiente eveniet asperiores necessitatibus accusantium aut
        quam iste nobis molestias.
      </p>
    </div>
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
  methods: {
    staggerOut() {
      // We take the index and stagger out around the selected nav button
      const articles = this.$refs.aboutContent.children;
      for (let index = 0; index < articles.length; index++) {
        setTimeout(() => (articles[index].style.opacity = 0), 50 * index);
      }
    },
    staggerIn() {
      // We take the index and stagger out around the selected nav button
      const articles = this.$refs.aboutContent.children;

      for (let index = 0; index < articles.length; index++) {
        setTimeout(() => (articles[index].style.opacity = 1), 50 * index);
      }
    }
  },
  mounted() {},
  beforeRouteLeave(to, from, next) {
    // Allow time to precess animations before updating DOM
    this.staggerOut();
    // By staggering in again, we avoid the animations on the second time...
    setTimeout(() => this.staggerIn(), 5000);
    this.$refs.subNav.staggerOut();
    setTimeout(() => next(), 1000);
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // bring in the hey before the rest
      setTimeout(() => (vm.$refs.hiword.style.opacity = 1), 2000);
      setTimeout(() => vm.$refs.subNav.staggerIn(), 2000);
      setTimeout(() => vm.staggerIn(), 3000);
    });
  }
};
</script>
<style lang="scss" scoped>
.aboutContainer {
  display: flex;
  flex-direction: column;
  max-width: 1024px;

  > * {
    opacity: 0;
    transition: opacity 1s;
  }

  > img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: auto;
    border-bottom: 1px solid gray;
    padding-bottom: 1rem;
    border-radius: 10px 10px 0px 0px;
  }
}
</style>
