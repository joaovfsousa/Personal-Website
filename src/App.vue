<template>
  <div>
    <nav class="level m-0">
      <router-link to="/" class="level-item has-text-centered">
        <img src="https://nofaro-tests.s3.amazonaws.com/logo.png" alt="" style="height: 100px;">
      </router-link>
    </nav>
    <hr class="mt-0">
    <router-view/>
    {{ none }}
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      none: _.filter([]).length > 0 ? '' : '',
    }
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
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
