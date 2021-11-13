<template>
  <div class="main-content pt-4 pb-4">
    <div class="button-container ml-2">
      <router-link to="/" class="button is-info is-small"> &laquo; voltar </router-link>
    </div>
    
    <div class="is-flex">
      <div class="pet pet is-flex is-justify-content-center is-align-items-center is-flex-direction-column m-2">
        Pet 4
        <small>5 anos - Raça 3</small>
      </div>
      <div class="has-text-left">
        <h3 class="title is-3 pt-3">Pet 4</h3>
        <div>5 anos - Raça 3</div>
          
      </div>
    </div>

    <div class="ml-3 has-text-left mt-4">
      <h3 class="title is-3 mb-0">Buddies</h3>
      <small class="subtitle is-5 mt-0">Idade média: 2,3 anos</small>
    </div>

    <div class="is-flex is-justify-content-start">
      <router-link to="/pet/id" class="pet pet is-flex is-justify-content-center is-align-items-center is-flex-direction-column m-2">
        Pet 4
        <small>5 anos - Raça 3</small>
      </router-link>
      <router-link to="/pet/id" class="pet pet is-flex is-justify-content-center is-align-items-center is-flex-direction-column m-2">
        Pet 4
        <small>5 anos - Raça 3</small>
      </router-link>
      <router-link to="/pet/id" class="pet pet is-flex is-justify-content-center is-align-items-center is-flex-direction-column m-2">
        Pet 4
        <small>5 anos - Raça 3</small>
      </router-link>
      <router-link to="/pet/id" class="pet pet is-flex is-justify-content-center is-align-items-center is-flex-direction-column m-2">
        Pet 4
        <small>5 anos - Raça 3</small>
      </router-link>
    </div>
  </div>
</template>
<script>

import moment from 'moment'

export default {
  data() {
    return {
      none: moment().format('Y-m-d'),
    }
  }  
}
</script>

<style lang="scss" scoped>
  .button-container {
    width: 100%;
    text-align: left;
  }

  .main-content {
    border-left: none;
    border-right: none;
  }
</style>