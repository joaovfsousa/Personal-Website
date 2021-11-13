<template>
  <div>
    <nav class="level m-0">
      <router-link to="/" class="level-item has-text-centered">
        <img src="https://nofaro-tests.s3.amazonaws.com/logo.png" alt="Logo da Buddy Pets" class="full-height">
      </router-link>
    </nav>
    <hr class="mt-0">
    <router-view/>
  </div>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch('initialize')
  }
}
</script>

<style lang="scss">
@import "./../node_modules/bulma/bulma.sass";
</style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(210, 29%, 24%);
}

.main-content {
  max-width: 1024px;
  margin: 0 auto;
  border-left: 1px solid hsl(0, 0%, 87%);
  border-right: 1px solid #ddd;
  min-height: 100vh;
}

.pet {
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  cursor: pointer;
}

.full-height {
  height: 100px;
}
</style>
