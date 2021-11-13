<template>
  <div class="home">
    <div class="banner" alt="Cachorro deitado na grama"></div>
    <div class="main-content is-flex is-flex-direction-column is-justify-content-flex-start is-align-items-center ">
      <div class="is-flex is-flex-direction-column mt-5">
        <h1 class="title is-3">Pets</h1>
        <div class="races is-flex is-justify-content-center">
          <div class="button is-info is-rounded is-small ml-2 mb-2 is-outlined">Raça 1</div>
          <div class="button is-info is-rounded is-small ml-2 mb-2 is-outlined">Raça 2</div>
          <div class="button is-info is-rounded is-small ml-2 mb-2">Raça 3</div>
          <div class="button is-info is-rounded is-small ml-2 mb-2 is-outlined">Raça 4</div>
        </div>
      </div>
      <div class="is-flex is-justify-content-center is-align-items-center is-flex-wrap-wrap">
        <router-link v-for="pet in pets" :key="`pet-${pet.id}`" :to="`/pet/${pet.id}`" class="pet is-flex is-justify-content-center is-align-items-center is-flex-direction-column m-2">
          {{pet.name}}
          <small>{{getPetAge(pet)}} - {{pet.breed}}</small>
        </router-link>
      </div>
    </div>
    <div class="banner" alt="Cachorro brincando com bolinha na grama"></div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Home',
  computed: {
    pets() {
      return this.$store.getters.getPets
    }
  },
  methods: {
    getPetAge(pet) {
      const ageInMonths = moment().diff(pet.birthday, 'months')
      if(ageInMonths > 12) {
        const ageString = `${Math.floor(ageInMonths / 12)} ano`
        return ageInMonths >= 24 ? `${ageString}s` : ageString
      } else {
        return ageInMonths > 1 ? `${ageInMonths} meses` : `${ageInMonths} mês`
      }
    }
  }
}
</script>

<style lang="scss">
.banner {
  max-width: 1024px !important;
  background-color: #ddd;
  background-size: cover;
  margin: 0 auto;
  background-position: center center !important;
  max-width: 100%;
  height: 400px;
  &:first-of-type {
    background: url('./banner1.jpg');
  }
  &:last-of-type {
    background: url('./banner2.jpg');
  }
}

</style>