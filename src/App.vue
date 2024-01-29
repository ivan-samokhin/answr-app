<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CassandraNav from './views/CassandraNav.vue'
import Navigation from './components/Navigation.vue'
import Main from './views/Main.vue'

</script>
<script>
export default {
    data () {
      return {
      isCassandra: false
      }
    }
}
</script>

<template>
<Main v-if="!isCassandra" @go-cas="isCassandra=true"/>
<CassandraNav v-if="isCassandra"/>
</template>

<style scoped>


</style>
