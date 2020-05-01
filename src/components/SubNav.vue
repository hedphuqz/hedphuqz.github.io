<template>
  <div ref="subNavList" class="subNavList">
    <div v-for="link in links" :key="`${link.name}`">
      <router-link :to="link.linkTo">
        <h2>{{ link.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "subNav",
  props: {
    links: Array
  },
  methods: {
    staggerIn() {
      const navItems = this.$refs.subNavList.children;
      for (let index = 0; index < navItems.length; index++) {
        setTimeout(() => (navItems[index].style.opacity = 1), 150 * index);
      }
    },
    staggerOut() {
      const navItems = this.$refs.subNavList.children;
      for (let index = 0; index < navItems.length; index++) {
        setTimeout(() => (navItems[index].style.opacity = 0), 150 * index);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.subNavList {
  position: absolute;
  right: 90%;
  height: 100%;
  top: 0px;
  display: flex;
  flex-direction: column;
  border-right: 10px solid white;
  padding-right: 20px;
  justify-content: flex-start;

  div {
    transition: opacity 1s;
    opacity: 0;
  }
}
</style>
