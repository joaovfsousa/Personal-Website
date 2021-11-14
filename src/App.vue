<template>
  <div>
    <nav class="level m-0">
      <router-link to="/" class="level-item has-text-centered">
        <img src="./assets/buddy-pets-logo.png" alt="Logo da Buddy Pets" class="full-height">
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
@import "./styles/main.scss";
</style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(210, 29%, 24%);
}
</style>
