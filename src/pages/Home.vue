<template>
  <div class="home">
    <div class="main-content is-flex is-flex-direction-column is-justify-content-flex-start is-align-items-center">
      <div class="is-flex is-flex-direction-column mt-5">
        <figure class="image profile-photo">
          <img src="/assets/profile-photo.jpeg" height="192" width="192" alt="Foto de perfil" class="is-rounded"/>
        </figure>
        <h1 class="title is-3 has-text-white mt-4">João Vitor Sousa</h1>
        <h1 class="title is-5 has-text-white mt-0">Software Engineer</h1>

        <main class="mt-2">
          <a role="button" rel="noopener" target="_blank" href="https://linkedin.joaovfsousa.dev" class="is-flex is-align-items-center is-justify-context-flex-start card">
            <mdicon name="linkedin" class="icon" />
            <div class="is-flex is-flex-direction-column is-align-items-flex-start">
              <span class="title is-6">Linkedin</span>
              <span class="title is-7">linkedin.com/in/joaovfsousa</span>
            </div>            
          </a>
          <a role="button" rel="noopener" target="_blank" href="https://calendar.joaovfsousa.dev" class="is-flex is-align-items-center is-justify-context-flex-start card">
            <mdicon name="text-to-speech" class="icon" />
            <div class="is-flex is-flex-direction-column is-align-items-flex-start">
              <span class="title is-6">Vamos conversar!</span>
              <span class="title is-7">calendar.joaovfsousa.dev</span>
            </div>
          </a>
          <a role="button" rel="noopener"  target="_blank" href="https://wpp.joaovfsousa.dev" class="is-flex is-align-items-center is-justify-context-flex-start card">
            <mdicon name="whatsapp" class="icon" />
            <div class="is-flex is-flex-direction-column is-align-items-flex-start">
              <span class="title is-6">Whatsapp</span>
              <span class="title is-7">wpp.joaovfsousa.dev</span>
            </div>
          </a>
          <a role="button" rel="noopener" target="_blank" href="https://cv.joaovfsousa.dev" class="is-flex is-align-items-center is-justify-context-flex-start card">
            <mdicon name="card-account-details-outline" class="icon" />
            <div class="is-flex is-flex-direction-column is-align-items-flex-start">
              <span class="title is-6">Currículo</span>
              <span class="title is-7">cv.joaovfsousa.dev</span>
            </div>
          </a>
          <a v-if="!isEmailCopied" role="button" rel="noopener" class="is-flex is-align-items-center is-justify-context-flex-start card" @click="copyEmail">
            <mdicon name="gmail" class="icon" />
            <div class="is-flex is-flex-direction-column is-align-items-flex-start">
              <span class="title is-6">E-mail</span>
              <span class="title is-7">joaovfsousa@gmail.com</span>
            </div>
          </a>
          <a v-else role="button" rel="noopener" class="is-flex is-align-items-center is-justify-context-flex-start card" style="background-color: hsl(171, 100%, 41%);" @click="copyEmail">
            <mdicon name="gmail" class="icon" style="color: white !important" />
            <span class="title is-6" style="color: white !important">E-mail copiado!</span>
          </a>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isEmailCopied: false
    }
  },
  methods: {
    async copyEmail(e) {
      e.preventDefault();
      await navigator.clipboard.writeText('joaovfsousa@gmail.com');
      this.isEmailCopied = true;
      setTimeout(() => {
        this.isEmailCopied = false;
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
  .notification {
    padding: 0.4rem 1.5rem;
    max-width: 12rem;
    align-self: center;
    position: fixed;
  }

  .image {
    height: 12rem;
    width: 12rem;
    &.profile-photo {
      margin: 0 auto;
    }
  }

  .title {
    margin-bottom: 0.75rem;
  }

  .card {
    height: 3rem;
    margin-bottom: 1rem;
    width: 20rem;

    .icon {
      height: 2rem;
      width: 2rem;
      margin: 0rem 0.5rem;
      color: hsl(0, 0%, 20%);
    }
    .title {
      margin-bottom: -2px;
      color: hsl(0, 0%, 20%);
    }
  }

</style>
