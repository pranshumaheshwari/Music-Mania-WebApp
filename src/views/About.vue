<template>
  <div class="about">
    <div v-if="loading">Loading...</div>
    <div v-else>
      Name: {{ name }} <br>
      PlayCount: {{ playcount }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'about',
  data() {
    return {
      loading: true,
      name: '',
      playcount: 0,
    }
  },
  mounted() {
    axios.get(`http://localhost:3000/userDetails?user=${ this.$store.state.user }`)
         .then(res => res.data.user)
         .then(res => {
           console.log(res);
           this.name = res.realname;
           this.playcount = res.playcount;
           this.loading = false;
         });
  },
}
</script>
