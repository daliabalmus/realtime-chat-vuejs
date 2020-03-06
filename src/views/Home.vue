<template>
    <Welcome />
</template>

<script>
import Welcome from '@/components/Welcome.vue'
export default {
  name: 'Home',
  data() {
    return {
      name: null
    }
  },
  components: {
    Welcome
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
