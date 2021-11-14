import Vuex from 'vuex';
import BuddyPetsService from '../services/buddy-pets'

export default new Vuex.Store({
  state: {
    pets: []
  },
  getters: {
    getPets: state => {
      return state.pets;
    },
    getPetById: (state) => (id) => {
      return state.pets.find(pet => pet.id == id)
    },
    getPetBuddiesById: (state) => (id) => {
      const findById = (petId) => state.pets.find(pet => pet.id == petId)
      const pet = findById(id)
      return pet.buddies.map((buddyId) => findById(buddyId))
    }
  },
  actions: {
    setPets({commit}, pets) {
      commit('SET_PETS', pets);
    },
    async initialize({commit}) {
      const fetchPets = async () => {
        const response = await BuddyPetsService.getPets()
  
        commit('SET_PETS', response.data)
        localStorage.setItem('pets', JSON.stringify(response.data))
        localStorage.setItem('lastPetsFetch', JSON.stringify(Date.now()))
      }

      const pets = localStorage.getItem('pets')
      const lastPetsFetch = localStorage.getItem('lastPetsFetch')
      const isPetsExpired = pets && lastPetsFetch && (Date.now() - lastPetsFetch) > 1000 * 60 * 60 * 24  

      if (!pets || isPetsExpired) {
        await fetchPets()
      } else {
        commit('SET_PETS', JSON.parse(pets))
      }
    }
  },
  mutations: {
    SET_PETS (state, pets) {
      state.pets = pets
    }
  }
})