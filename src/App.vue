<template>
  <div id="app">
    <transition name="slideRightComponent" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
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
  font-weight: 300;
  color: white;
}

p {
  font-family: "Lato", sans-serif;
  color: white;
}

a {
  text-decoration: none;
}

#app {
  width: inherit;
  height: inherit;
  background-color: black;
  overflow: hidden;
  color: white;
}

.full {
  width: 100%;
  height: 100%;
}

.contentView {
  left: 10%;
  position: absolute;
  width: 90%;
  padding: 3rem;
  overflow-y: scroll;
  height: 100%;
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
  transition: 1.5s;
}
.slideRightComponent-enter {
  transform: translateX(-100%);
}
.slideRightComponent-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
}
</style>
