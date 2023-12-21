<template>
  <h1>{{ message.title }}</h1>
  <p>{{ message.description }}</p>
  <p>{{ message.pubDate }}</p>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  methods: {
    async fetchData() {
      this.message = await fetch('http://localhost:3000').then(d => {return d.json()})
    }
  },
  data() {
    return {
      message: {
      }
    }
  },
  created(){
    const posts = this.fetchData();
  },
  setup() {
    onMounted: {console.log('onMounted')}
  }
}
</script>