<template>
  <div class="main-content pt-4 pb-4" style="border-left: none; border-right: none;">
    <div style="width: 100%; text-align: left;" class="ml-4">
      <router-link to="/" class="button is-info is-small"> &laquo; voltar </router-link>
    </div>
    
    <div class="is-flex" style="width:100%;">
      <div class="pet m-2">
        Pet 4
        <small>5 anos - Raça 3</small>
      </div>
      <div class="has-text-left">
        <h3 class="title is-3 pt-3">Pet 4</h3>
        <div>5 anos - Raça 3</div>
          
      </div>
    </div>

    <div class="ml-3 has-text-left mt-4" style="width: 100%">
      <h3 class="title is-3 mb-0">Buddies</h3>
      <small class="subtitle is-5 mt-0">Idade média: 2,3 anos</small>
    </div>

    <div class="pets is-justify-content-start" style="width: 100%">
      <router-link to="/pet/id" class="pet m-2">
        Pet 4
        <small>5 anos - Raça 3</small>
      </router-link>
      <router-link to="/pet/id" class="pet m-2">
        Pet 4
        <small>5 anos - Raça 3</small>
      </router-link>
      <router-link to="/pet/id" class="pet m-2">
        Pet 4
        <small>5 anos - Raça 3</small>
      </router-link>
      <router-link to="/pet/id" class="pet m-2">
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
