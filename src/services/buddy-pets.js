import axios from 'axios'

class BuddyPetsService {
  constructor() {
    this.api = axios.create({
      baseURL: "https://my-json-server.typicode.com"
    })
  }

  getPets() {
    return this.api.get('nofaro/buddy-pets/pets')
  }
}

export default new BuddyPetsService()