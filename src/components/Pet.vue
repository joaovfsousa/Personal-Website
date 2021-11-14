<template>
  <component
    :is="isLink ? 'router-link' : 'div'"
    class="pet is-flex is-justify-content-center is-align-items-center is-flex-direction-column m-2"
    :to="isLink ? `/pet/${pet.id}` : null"
  >
    {{pet.name}}
    <small>{{getPetAge(pet)}} - {{pet.breed}}</small>
  </component>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    pet: {
      type: Object,
      required: true
    },
    isLink: {
      type: Boolean,
      default: false
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
  }
}
</script>

<style lang="scss" scoped>
.pet {
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  cursor: pointer;
}
</style>