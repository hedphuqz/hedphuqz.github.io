<template>
  <div class="full" style="position: relative">
    <sub-nav ref="subNav" />
    <div ref="aboutContent" class="contentView aboutContainer">
      <img src="../assets/DSC02278~2.jpg" />
      <h1 ref="hiword" style="font-weight: 100;">Hey!</h1>
      <p>
        Hey there! My name is Francis and I am a british techie nerd working in
        Munich, Germany. I have a passion for several things including design,
        architecture (the building kind), music - in particular singing,
        travelling and constantly learning. This site is something i dreamt up
        recently after putting off making my own website for a long time. If you
        want to get in touch with me about anything, you can
        <a href="/#/contact">contact me here</a>.
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
  a {
    text-decoration: none;
    color: white;
    border-bottom: 1px solid gray;
  }
}
</style>
