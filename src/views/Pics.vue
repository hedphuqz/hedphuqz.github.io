<template>
  <div class="full" style="position: relative">
    <sub-nav ref="subNav" />
    <div class="contentView">
      <picviewer ref="picviewer" :imageprops="picData" />
    </div>
  </div>
</template>

<script>
import SubNav from "../components/SubNav.vue";
import Picviewer from "../components/PictureView.vue";
export default {
  name: "pictures",
  components: {
    SubNav,
    Picviewer
  },
  data: () => ({
    navLinks: [{ name: "Back", linkTo: "/" }],
    picData: [
      "DSC00638.jpg",
      "IMG_20200109_163726582_HDR-EFFECTS.jpg",
      "DSC00670.jpg",
      "IMG_20200131_172640391_HDR-01.jpg",
      "DSC01235.jpg",
      "IMG_20200215_172219391_HDR-EFFECTS.jpg",
      "IMG_20190306_142045966_HDR-PANO.jpg",
      "IMG_20200404_152424612_HDR.jpg",
      "IMG_20190618_164143627-EFFECTS.jpg",
      "IMG_20200411_142425781_HDR-EFFECTS.jpg",
      "IMG_20190916_192322984_HDR.jpg",
      "IMG_20200426_153132501_HDR.jpg"
    ]
  }),
  mounted() {},
  beforeRouteLeave(to, from, next) {
    // Allow time to precess animations before updating DOM
    this.$refs.picviewer.staggerOut();
    this.$refs.subNav.staggerOut();
    setTimeout(() => next(), 1000);
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      setTimeout(() => vm.$refs.picviewer.staggerIn(), 3000);
      setTimeout(() => vm.$refs.subNav.staggerIn(), 2000);
    });
  }
};
</script>
