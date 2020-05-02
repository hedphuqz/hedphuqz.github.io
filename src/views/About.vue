<template>
  <div class="full" style="position: relative">
    <sub-nav ref="subNav" />
    <div ref="aboutContent" class="contentView aboutContainer">
      <img src="../assets/DSC02278~2.jpg" />
      <h1 ref="hiword">Hey!</h1>
      <section>
        <p>
          Hey there! My name is Francis and I am a british techie nerd working
          in Munich, Germany. I have a passion for several things including
          design, architecture (the building kind), music - in particular
          singing, travelling and constantly learning. This site is something i
          dreamt up recently after putting off making my own website for a long
          time. If you want to get in touch with me about anything, you can
          <a href="/#/contact">contact me here</a>.
        </p>
      </section>
      <section>
        <h2>Things About Me</h2>
        <p>
          Back about 7000 years ago I actually started working as a professional
          singer when I was then 16. Although I had always wanted to get into
          computers, unfortunately I never had the means to when I was in my
          teens. This was mostly due to the fact that I worked weekends and also
          had to stay late at school most days because I was a music scholar.
          But I'd be lying if I said the partying didn't also get in the way 😇.
        </p>
        <p>
          Weirdly, I decided to study chemistry at university, with a focus on
          energy storage (at EPFL, Switzerland) and Molecular Dynamics Sampling
          methods (at Edinburgh University, Scotland) where I gained a masters
          degree along with two publications which you can access
          <a href="https://doi.org/10.1039/C4EE00098F">here</a> and
          <a href="https://doi.org/10.1021/acs.jpcb.6b03296">here</a>
        </p>
        <p>
          By the time I finished university, I really didn't know where I was
          going. I tried a variety of avenues including getting offered a PhD in
          Singapore, which I ended up turning down for my current job. I have
          now been working as a fullstack developer for about 3 years and have
          been loving blending design with technology. And that brings us to
          where you are right now; looking at this page :-).
        </p>
      </section>
      <section>
        <h2>Things I Like</h2>
        <ul>
          <li>Singing</li>
          <li>Photograpy</li>
          <li>Travelling</li>
        </ul>
      </section>
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
    color: var(--font-color);
    border-bottom: 1px solid gray;
  }
}
</style>
