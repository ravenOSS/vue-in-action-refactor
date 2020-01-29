<template>
  <div>
    <theNav></theNav>
    <h1>This is the id {{ $route.params.id }}</h1>
    <div class="row">
      <div class="col-md-5 col-md-offset-0">
        <figure>
          <img class="product" :src="product.image" >
        </figure>
    </div>
    <div class="col-md-6 col-md-offset-0 description">
      <h1>{{ product.title }}</h1>
      <p v-html="product.description"></p>
      <p class="price">
        {{ product.price }}
      </p>
    </div>
  </div>
  </div>
</template>

<script>
import TheNav from '@/components/TheNavigation.vue'
import axios from 'axios'
export default {
  components: { TheNav },
  data () {
    return {
      product: ''
    }
  },
  created: function () {
    axios.get('products.json')
      .then((response) => {
        this.product = response.data.products.filter(
          data => data.id === this.$route.params.id)[0]
        this.product.image = '/' + this.product.image
      })
  }
}
</script>

<style>

</style>
