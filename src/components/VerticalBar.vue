<template>
  <transition name="fade">
    <div v-if="isShown" class="verticalLine" :style="styleAttrs" />
  </transition>
</template>

<script>
export default {
  name: "verticalbar",
  props: {
    index: Number
  },
  data: () => ({
    width: Math.floor(Math.random() * 15),
    transformX: Math.random() > 0.5 ? 100 : -20,
    transitionTime: Math.floor(Math.random() * 3),
    isShown: true
  }),
  computed: {
    styleAttrs() {
      return {
        width: this.width + "%",
        transform: `translateX(${this.transformX}vw)`,
        transition: `${this.transitionTime}s ease`
      };
    }
  },
  methods: {
    adjustPosition() {
      this.transformX = this.transformX === 100 ? -20 : 100;
    }
  },
  mounted() {
    // Delay the transition of the lines

    setTimeout(() => this.adjustPosition(), 150 * this.index);
    // Make sure the bars are only removed from the DOM once the transition has fully finished
    // Add on 50 ms for good measure
    setTimeout(
      () => (this.isShown = false),
      150 * this.index + this.transitionTime * 1000 + 50
    );
  }
};
</script>

<style lang="scss" scoped>
.verticalLine {
  position: absolute;
  background-color: var(--font-color);
  height: 100%;
}
</style>
