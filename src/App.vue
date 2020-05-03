<template>
  <div id="app" class="theme-dark">
    <transition name="slideRightComponent" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  -ms-overflow-style: none;
}

*::-webkit-scrollbar {
  display: none;
}

html {
  width: 100vw;
  height: 100vh;
}

body {
  width: inherit;
  height: inherit;
  margin: 0px;
}

h1,
h2,
h3,
h4,
h5,
h6,
span {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  color: var(--font-color);
}

p,
ul,
li,
ol {
  font-family: "Lato", sans-serif;
  color: var(--font-color);
}

ul,
ol {
  list-style: none;
  padding-left: 1rem;
}

li:before {
  content: "—"; /* Insert content that looks like bullets */
  padding-right: 8px;
  color: var(--font-color); /* Or a color you prefer */
}

a {
  text-decoration: none;
}

blockquote {
  border-left: 5px solid gray;
  margin: 1rem 0px;
  padding-left: 1rem;
}

.theme-light {
  --font-color: #000000;
  --background-color: #ffffff;
}
.theme-dark {
  --font-color: #ffffff;
  --background-color: #000000;
}

#app {
  width: inherit;
  height: inherit;
  background-color: var(--background-color);
  overflow: hidden;
  color: var(--font-color);
}

.full {
  width: 100%;
  height: 100%;
}

.contentView {
  left: 10%;
  position: absolute;
  width: 90%;
  padding: 1rem;
  overflow-y: scroll;
  height: 100%;
}

@media only screen and (max-width: 550px) {
  /* For mobile phones: */
  .contentView {
    left: 20%;
    width: 80%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slideRightComponent-enter-active,
.slideRightComponent-leave-active {
  transition: 1s ease-in-out;
}
.slideRightComponent-enter {
  transform: translateX(-100%);
}
.slideRightComponent-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
}
</style>
