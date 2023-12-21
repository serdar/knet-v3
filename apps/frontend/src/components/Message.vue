<template>
  <h1>{{ message }}</h1>
</template>

<script>
import { ref, onMounted } from 'vue'
// asd
// onMounted(() => {
//   fetchData()
// })

export default {
  methods: {
    async fetchData() {
      this.message = await fetch('http://localhost:3000').then(d => {return d.text()})
    }
  },
  data() {
    return {
      message: 'default'
    }
  },
  created(){
    this.fetchData();
  },
  setup() {
    onMounted: {console.log('onMounted')}
  }
}
</script>