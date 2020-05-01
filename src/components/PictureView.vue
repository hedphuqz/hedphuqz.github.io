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

  computed: {
    imageShown() {
      return this.loadedPictures.map(isLoaded => {
        return {
          opacity: isLoaded ? 1 : 0
        };
      });
    }
  },
  methods: {
    staggerOut() {
      // We take the index and stagger out around the selected nav button
      const pictures = this.$refs.pictureGrid.children;
      for (let index = 0; index < pictures.length; index++) {
        setTimeout(() => (pictures[index].style.opacity = 0), 50 * index);
      }
    },
    staggerIn() {
      // We take the index and stagger out around the selected nav button
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 5px;
  padding-bottom: 3rem;
}

.imgSquare {
  height: 250px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transition: opacity 0.5s;
  opacity: 1;
}

.modalContainer {
  position: fixed;
  top: 0px;
  left: 10%;
  width: 90%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
