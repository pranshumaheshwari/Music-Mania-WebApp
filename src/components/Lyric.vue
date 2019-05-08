<template>
  <div class="lyrics">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="nowplaying">
        Track: {{ track }} <br>
        Album: {{ album }} <br>
        Artist: {{ artist }} <br>
        <div v-html="lyrics"></div>
      </div>
      <div v-else>No Song Detected...</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Lyric',
  data () {
    return {
      loading: true,
      nowplaying: false,
      track: null,
      album: null,
      artist: null,
      lyrics: null
    }
  },
  mounted () {
    axios.get(`http://localhost:3000/currentTrack?user=${this.$store.state.user}`)
      .then(res => res.data)
      .then(res => {
        if (res.nowplaying) {
          this.nowplaying = true
          this.artist = res.artist['#text']
          this.track = res.name
          this.album = res.album['#text']
          axios.get(`http://localhost:3000/lyrics?track=${this.track}&artist=${this.artist}`)
            .then(res => res.data)
            .then(res => {
              this.lyrics = res.lyrics.split('\n').slice(25).join('\n').replace(/\n/gi, '<br>')
            })
        }
        this.loading = false
      })
  }
}
</script>

<style scoped>

</style>
