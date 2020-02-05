/* eslint-disable vue/html-indent */
/* eslint-disable vue/no-v-html */
<template>
  <b-container>
    <div class="store">
      <TheNav :cart-item-count="cartItemCount" />
    </div>
    <p>cartItemCount: {{ cartItemCount }} </p>
    <button @click="setCount(cartItemCount + 1);">
      + 1
    </button>
    <button @click="setCount(cartItemCount - 1);">
      - 1
    </button>
    <div>
      <main>
        <div
          v-for="(product, id) in products"
          :key="id"
        >
          <div class="row">
            <div class="col-md-5 col-md-offset-0">
              <figure>
                <img
                  class="product"
                  :src="product.image"
                >
              </figure>
            </div>
            <div class="col-md-6 col-md-offset-0 description">
              <b-link
                tag="h1"
                :to="{ name: 'Id', params: { id: product.id } }"
              >
                {{ product.title }}
              </b-link>
              <p v-html="product.description" />
              <p class="price">
                {{ product.price | formatPrice }}
              </p>
              <button
                v-if="canAddToCart(product)"
                class=" btn btn-primary btn-lg"
                @click="addToCart(product)"
              >
                Add to cart
              </button>
              <button
                v-else
                disabled="true"
                class=" btn btn-primary btn-lg"
              >
                Add to cart
              </button>
              <span
                v-if="product.availableInventory - cartCount(product.id) === 0"
                class="inventory-message"
              >All Out!
              </span>
              <span
                v-else-if="
                  product.availableInventory - cartCount(product.id) < 5
                "
                class="inventory-message"
              >
                Only
                {{ product.availableInventory - cartCount(product.id) }} left!
              </span>
              <span
                v-else
                class="inventory-message"
              >Buy Now! </span>
              <div class="rating">
                <span
                  v-for="(n, rating) in 5"
                  :key="rating"
                  :class="{
                    'rating-active': checkRating(product, rating)
                  }"
                >☆
                </span>
              </div>
            </div>
            <!-- end of col-md-6-->
          </div>
          <!-- end of row-->
          <hr>
        </div>
        <!-- end of v-for-->
      </main>
    </div>
  </b-container>
</template>
<script>
import axios from "axios"
import TheNav from "./TheNavigation.vue"
import currencymixin from "../mixins/currencyMixin"
import { store, mutations } from "../store/simpleState"

export default {
  name: "StoreFront",
    components: {
    TheNav
  },
  mixins: [currencymixin],
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      products: {},
      cart: []
    };
  },
  computed: {
    cartItemCount() {
      return this.cart.length || 0;
    },
    count() {
      return store.cartItemCount;
  }
  },
  created: function() {
    axios
      .get("http://localhost:3000/products")
      .then(response => {
        this.products = response.data
        console.log(response.data);
        console.log(response.data[1])
      });
  },
  //   created: function() {
  //   axios.get('products.json').then(response => {
  //     this.products = response.data.products;
  //     console.log(response.data.products);
  //   });
  // },
  methods: {
     setCount: mutations.setCount,
  
    checkRating(n, myProduct) {
      return myProduct.rating - n >= 0;
    },
    addToCart(aProduct) {
      this.cart.push(aProduct.id);
    },
    canAddToCart(aProduct) {
      // return this.product.availableInventory > this.cartItemCount;
      return aProduct.availableInventory > this.cartCount(aProduct.id);
    },
    cartCount(id) {
      let count = 0;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  font-weight: bold;
  font-size: 150%;
  color: black;
}
</style>
