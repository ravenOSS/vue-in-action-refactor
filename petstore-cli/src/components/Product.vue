/* eslint-disable vue/max-attributes-per-line */
/* eslint-disable vue/no-v-html */
<template>
  <b-container>
    <TheNav />
    <h1>This is the id {{ $route.params.id }}</h1>
    <div class="row">
      <div class="col-md-5 col-md-offset-0">
        <figure>
          <img
            class="product"
            :src="image"
          >
        </figure>
      </div>
      <div class="col-md-6 col-md-offset-0 description">
        <h1>{{ product.title }}</h1>
        <p v-html="product.description" />
        <p class="price">
          {{ product.price | formatPrice }}
        </p>
        <button @click="edit">
          Edit Product
        </button>
        <router-view />
      </div>
    </div>
  </b-container>
</template>

<script>
import TheNav from "./TheNavigation.vue";
import currencymixin from "../mixins/currencyMixin"
import axios from "axios";
export default {
  components: { TheNav },
  mixins: [currencymixin],
  data() {
    return {
      product: ""
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/products", {
        params: {
          id: this.$route.params.id
        }
      })
      .then(response => {
        console.log(response.data);
        this.product = response.data[0]
        // this.product = response.data.products.filter(data => data.id === this.$route.params.id)
        console.log(this.product.image);
      });
  },
  methods: {
    edit() {
      this.$router.push({name: 'Edit'})
    }
  }
}
</script>

<style></style>
