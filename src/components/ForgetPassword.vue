<template>
    <section id="forget">
        
    </section>
</template>

<script>

import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';

export default {
    setup() {
    const store = useStore()
    store.dispatch("getUser")
    const users = computed(() => store.state.user)
    return {
      users
    }
  }
}
</script>
<style scoped>
    
</style>