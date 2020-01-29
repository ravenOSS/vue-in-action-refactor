<template>
  <b-container>
    <TheNav />
    <FormComp />
  </b-container>
</template>

<script>
// @ is an alias to /src
import FormComp from '@/components/FormComp.vue'
import TheNav from '@/components/TheNavigation.vue'

export default {
  name: 'formview',
  components: {
    FormComp,
    TheNav
  }
}
</script>
