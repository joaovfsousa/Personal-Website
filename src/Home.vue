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
        <router-link to="/pet/id" class="pet is-flex is-justify-content-center is-align-items-center is-flex-direction-column m-2">
          Pet 1
          <small>3 anos - Raça 1</small>
        </router-link>
        <router-link to="/pet/id" class="pet m-2">
          Pet 2
          <small>1 mês - Raça 3</small>
        </router-link>
        <router-link to="/pet/id" class="pet m-2">
          Pet 3
          <small>4 anos - Raça 2</small>
        </router-link>
        <router-link to="/pet/id" class="pet m-2">
          Pet 4
          <small>5 anos - Raça 3</small>
        </router-link>
        <router-link to="/pet/id" class="pet m-2">
          Pet 5
          <small>7 meses - Raça 2</small>
        </router-link>
        <router-link to="/pet/id" class="pet m-2">
          Pet 6
          <small>3 anos - Raça 1</small>
        </router-link>
        <router-link to="/pet/id" class="pet m-2">
          Pet 7
          <small>4 anos - Raça 2</small>
        </router-link>
        <router-link to="/pet/id" class="pet m-2">
          Pet 8
          <small>10 anos - Raça 1</small>
        </router-link>
        <router-link to="/pet/id" class="pet m-2">
          Pet 9
          <small>2 anos - Raça 3</small>
        </router-link>
        <router-link to="/pet/id" class="pet m-2">
          Pet 10
          <small>6 anos - Raça 1</small>
        </router-link>
        <router-link to="/pet/id" class="pet m-2">
          Pet 11
          <small>1 ano - Raça 3</small>
        </router-link>
        <router-link to="/pet/id" class="pet m-2">
          Pet 12
          <small>9 anos - Raça 2</small>
        </router-link>
      </div>
    </div>
    <div class="banner" alt="Cachorro brincando com bolinha na grama"></div>
  </div>
</template>

<script>

export default {
  name: 'Home',
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