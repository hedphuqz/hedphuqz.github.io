<template>
  <div ref="subNavList" class="subNavList">
    <router-link exact to="/">
      <h2>Back</h2>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.subNavList {
  position: absolute;
  left: 6%;
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
