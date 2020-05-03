<template>
  <div>
    <div class="grid" ref="pictureGrid">
      <img
        v-for="(pic, index) in images"
        :key="`${pic.path}${index}`"
        class="imgSquare"
        style="opacity: 0;"
        @click="highlightedPicture = index"
        :src="pic.path"
      />
    </div>
    <transition name="fade"
      ><div
        v-if="highlightedPicture != null"
        @click="highlightedPicture = null"
        class="modalContainer"
      >
        <img :src="images[highlightedPicture].path" /></div
    ></transition>
  </div>
</template>

<script>
export default {
  name: "pictureview",
  props: {
    imageprops: Array
  },
  data() {
    return {
      images: this.imageprops.map(image => ({
        picture: image,
        isHighlighted: false,
        path: require(`../assets/pics/${image}`)
      })),
      highlightedPicture: null,
      loadedPictures: this.imageprops.map(() => false)
    };
  },
  methods: {
    staggerOut() {
      const pictures = this.$refs.pictureGrid.children;
      for (let index = 0; index < pictures.length; index++) {
        setTimeout(() => (pictures[index].style.opacity = 0), 50 * index);
      }
    },
    staggerIn() {
      const pictures = this.$refs.pictureGrid.children;

      for (let index = 0; index < pictures.length; index++) {
        setTimeout(() => (pictures[index].style.opacity = 1), 50 * index);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23vw, 1fr));
  grid-gap: 5px;
  padding-bottom: 3rem;
}

.imgSquare {
  height: 23vw;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transition: opacity 0.5s;
  opacity: 1;
}

.modalContainer {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);

  img {
    width: 75vw;
    max-width: 1080px;
    height: auto;
  }
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .modalContainer img {
    width: 100vw;
  }
}
</style>
