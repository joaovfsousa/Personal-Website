<template>
  <a role="button" rel="noopener" target="_blank" :href="link" class="is-flex is-align-items-center is-justify-context-flex-start card">
    <mdicon :name="icon" class="icon" />
    <div class="is-flex is-flex-direction-column is-align-items-flex-start">
      <span class="title is-6">{{title}}</span>
      <span class="title is-7">{{customSubtitle || link.replace('https://', '')}}</span>
    </div>            
  </a>
</template>
<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: () => 'Title'
    },
    icon: {
      type: String,
      default: () => 'title'
    },
    link: {
      type: String,
      default: () => 'joaovfsousa.dev'
    },
    customSubtitle: {
      type: String,
      default: () => null
    }
  },
  data() {
    return {
      isEmailCopied: false
    }
  },
  methods: {
    copyEmail() {
      this.isEmailCopied = true
      const email = document.querySelector('#email')
      email.select()
      document.execCommand('copy')
    }
  }
}
</script>

<style lang="scss" scoped>
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