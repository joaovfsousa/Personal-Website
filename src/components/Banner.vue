<template>
  <div class="banner" :alt="alt"></div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
  },
  computed: {
    backgroundImage() {
      return `url("${this.src}")`
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    max-width: 1024px !important;
    background-size: cover;
    margin: 0 auto;
    background-position: center center !important;
    max-width: 100%;
    height: 400px;
    background: v-bind('backgroundImage');
  }
</style>