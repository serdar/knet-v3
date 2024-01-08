<template>
  <article v-for="item in message">
    <h1><a  v-bind:href="'/'+item.id" class="href">{{ item.title }}</a></h1>
    <p v-html="item.description"></p>
    <p>{{ item.pubDate }}</p>
  </article>
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