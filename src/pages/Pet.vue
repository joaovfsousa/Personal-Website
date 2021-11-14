<template>
  <div class="main-content pt-4 pb-4">
    <div class="button-container ml-2">
      <router-link to="/" class="button is-info is-small"> &laquo; voltar </router-link>
    </div>
    
    <div v-if="pet" class="is-flex">
      <Pet :pet="pet"/>
      <div class="has-text-left">
        <h3 class="title is-3 pt-3">{{pet.name}}</h3>
        <div>{{getPetAge(pet)}} - {{pet.breed}}</div>   
      </div>
    </div>

    <div class="ml-3 has-text-left mt-4">
      <h3 class="title is-3 mb-0">Buddies</h3>
      <small class="subtitle is-5 mt-0">Idade média: {{buddiesAverageAge}} anos</small>
    </div>

    <div class="is-flex is-justify-content-start">
      <Pet v-for="(buddy, index) in buddies" :key="`buddy-${index}`" :pet="buddy" isLink/>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import Pet from '../components/Pet'
export default {
  components: { Pet },
  computed: {
    pet() {
      const id = this.$route.params.id
      return this.$store.getters.getPetById(id)
    },
    buddies() {
      const id = this.$route.params.id
      return this.$store.getters.getPetBuddiesById(id)
    },
    buddiesAverageAge() {
      if(this.buddies) {
        const totalAge = this.buddies.reduce((acc, buddy) => {
          return acc + this.getPetAgeInMonths(buddy)
        }, 0) / 12
        const totalBuddies = this.buddies.length
        return (totalAge / totalBuddies).toFixed(1)
      }
      return null
    }
  },
  methods: {
    getPetAgeInMonths(pet) {
      return moment().diff(pet.birthday, 'months')
    },
    getPetAge(pet) {
      const ageInMonths = this.getPetAgeInMonths(pet)
      if(ageInMonths > 12) {
        const ageString = `${Math.floor(ageInMonths / 12)} ano`
        return ageInMonths >= 24 ? `${ageString}s` : ageString
      } else {
        return ageInMonths > 1 ? `${ageInMonths} meses` : `${ageInMonths} mês`
      }
    },
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