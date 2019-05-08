<template>
  <div class="home">
    <form v-on:submit.prevent="login">
      <input type="text" v-model="user">
      <input type="submit">
    </form>
  </div>
</template>

<script>

export default {
  name: 'login',
  computed: {
    user: {
      get () {
        return this.$store.state.user
      },
      set (newUser) {
        this.$store.commit('changeUser', newUser)
      }
    }
  },
  methods: {
    login () {
      this.$router.push({ name: 'about' })
    }
  }
}
</script>
