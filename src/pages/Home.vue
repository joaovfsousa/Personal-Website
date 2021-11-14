<template>
  <div class="home">
    <div class="banner" alt="Cachorro deitado na grama"></div>
    <div class="main-content is-flex is-flex-direction-column is-justify-content-flex-start is-align-items-center ">
      <div class="is-flex is-flex-direction-column mt-5">
        <h1 class="title is-3">Pets</h1>
        <div class="races is-flex is-justify-content-center">
          <div
            v-for="breed, index in breeds"
            :key="`breed-${index}`"
            class="button is-info is-rounded is-small ml-2 mb-2"
            :class="getBreedSelectedClass(breed)"
            @click="handleSelectedBreed(breed)"
          >
            {{breed}}
          </div>
        </div>
      </div>
      <div class="is-flex is-justify-content-center is-align-items-center is-flex-wrap-wrap">
        <router-link
          v-for="pet in pets" :key="`pet-${pet.id}`"
          :to="`/pet/${pet.id}`"
          class="pet is-flex is-justify-content-center is-align-items-center is-flex-direction-column m-2"
        >
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
  data() {
    return {
      selectedBreed: null
    }
  },
  computed: {
    pets() {
      if(this.selectedBreed) {
        return this.$store.getters.getPets.filter((pet) => pet.breed === this.selectedBreed)
      }
      return this.$store.getters.getPets
    },
    breeds() {
      const breeds = []
      this.$store.getters.getPets.forEach(pet => {
        if (!breeds.includes(pet.breed)) {
          breeds.push(pet.breed)
        }
      })
      return breeds
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
    },
    handleSelectedBreed(breed) {
      this.selectedBreed = this.selectedBreed === breed ? null : breed
    },
    getBreedSelectedClass(breed) {
      return breed !== this.selectedBreed ? 'is-outlined' : null
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  max-width: 1024px !important;
  background-color: #ddd;
  background-size: cover;
  margin: 0 auto;
  background-position: center center !important;
  max-width: 100%;
  height: 400px;
  &:first-of-type {
    background: url('../assets/banner1.jpg');
  }
  &:last-of-type {
    background: url('../assets/banner2.jpg');
  }
}

</style>