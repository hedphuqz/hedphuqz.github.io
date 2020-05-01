<template>
  <div class="full" style="position: relative">
    <template v-if="!introAnimRun">
      <vertical-bar :key="bar" v-for="bar in 15" :index="bar" />
    </template>
    <transition name="fade">
      <div v-if="showName" class="nameContainer">
        <span>Francis Powlesland</span>
      </div>
    </transition>
    <transition
      name="slide"
      v-on:after-enter="staggerIn"
      v-on:before-leave="staggerOut"
    >
      <div v-if="showNav" ref="navList" class="navList">
        <div v-for="link in links" :key="`${link.name}`">
          <router-link :to="link.linkTo">
            <h2>{{ link.name }}</h2>
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import VerticalBar from "@/components/VerticalBar.vue";

export default {
  components: {
    VerticalBar
  },
  name: "home",
  data: () => ({
    showNav: false,
    showName: false,
    links: [
      { name: "About", linkTo: "/about" },
      { name: "Work", linkTo: "/work" },
      { name: "Experience", linkTo: "/experience" },
      { name: "Contact", linkTo: "/contact" },
      { name: "Pics", linkTo: "/photos" }
    ]
  }),
  methods: {
    staggerIn() {
      const navItems = this.$refs.navList.children;
      for (let index = 0; index < navItems.length; index++) {
        setTimeout(() => (navItems[index].style.opacity = 1), 150 * index);
      }
    },
    staggerOut(selectedIndex) {
      // We take the index and stagger out around the selected nav button
      const navItems = this.$refs.navList.children;
      for (let index = 0; index < navItems.length; index++) {
        setTimeout(
          () => (navItems[index].style.opacity = 0),
          600 * (1 / (Math.abs(index - selectedIndex) + 1))
        );
      }
    },
    flashName() {
      setTimeout(() => (this.showName = true), 500);
      setTimeout(() => (this.showName = false), 4000);
    }
  },
  beforeRouteLeave(to, from, next) {
    // Allow time to precess animations before updating DOM
    const indexOfItem = this.links.findIndex(link => link.linkTo === to.path);
    this.staggerOut(indexOfItem);
    setTimeout(() => next(), 1000);
  },
  beforeRouteEnter(to, from, next) {
    // Allow time to precess animations before updating DOM
    next(vm => setTimeout(() => vm.staggerIn(), 3000));
  },
  computed: {
    introAnimRun() {
      return this.$store.state.introAnimationRun;
    }
  },
  mounted() {
    if (!this.introAnimRun) {
      this.flashName();
    }

    setTimeout(() => (this.showNav = true), 2500);
  },
  beforeDestroy() {}
};
</script>
<style lang="scss" scoped>
.navList {
  position: absolute;
  left: 10%;
  height: 100%;
  top: 0px;
  display: flex;
  flex-direction: column;
  border-left: 10px solid white;
  padding-left: 20px;
  justify-content: space-evenly;

  div {
    transition: opacity 1s;
    opacity: 0;
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}

.slide-enter,
.slide-leave-to {
  left: 100%;
}

.slide-enter-active {
  transition: left 1s ease-in-out;
}
.slide-leave-active {
  transition: left 1s ease-in-out;
  //  Add delay so we can phase out the links first
  transition-delay: 1s;
}

.nameContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 100;
  mix-blend-mode: difference;

  span {
    font-size: 6rem;
    font-weight: 100;
  }
}
</style>
