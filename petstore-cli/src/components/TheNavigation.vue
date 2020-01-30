<template>
  <header>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#"><h1>{{ sitename }}</h1></b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-button class="my-2 my-sm-0" size="lg" v-on:click="showCheckout">
          <font-awesome-icon class="cart" icon="shopping-cart"/>{{ cartItemCount }}Checkout
        </b-button>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'the-nav',
  data () {
    return {
      sitename: 'Black Pet Despot'
    }
  },
  props: ['cartItemCount'],
  methods: {
    showCheckout () {
      this.$router.push({ name: 'Formview' })
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color:cadetblue;
}

</style>
