<template>
  <b-container>
    <div class='store'>
      <the-nav />
      <Storefront msg='Welcome to the Despot' />
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Storefront from '@/components/StorefrontComp.vue'
import TheNav from '@/components/TheNavigation.vue'

export default {
  name: 'storeview',
  props: {
    msg: String
  },
  components: {
    Storefront,
    TheNav
  }
}
</script>
