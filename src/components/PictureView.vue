<template>
  <div class="grid">
    <div
      v-for="(pic, index) in enrichedImages"
      :key="`${pic}${index}`"
      :style="pic.styles"
      @click="highlightPicture(index)"
    />
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
        isHighlighted: false
      }))
    };
  },
  computed: {
    enrichedImages() {
      return this.images.map(asset => ({
        name: "Hi",
        ...asset,
        styles: {
          backgroundImage: `url(${require(`../assets/pics/${asset.picture}`)})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "250px"
        }
      }));
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
</style>
