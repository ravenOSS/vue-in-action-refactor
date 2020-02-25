/* eslint-disable */
<template>
  <b-container>
    <div class="store">
      <TheNav :cart-item-count="cartItemCount" />
    </div>
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
// import axios from "axios"
import TheNav from "./TheNavigation.vue"
import { db } from '../db'
import {mapGetters} from 'vuex'
import currencymixin from "../mixins/currencyMixin"

export default {
  name: "StoreFront",
    components: {
    TheNav
  },
  mixins: [currencymixin],
  data() {
    return {
      products: {},
      cart: []
    };
  },
  computed: {
    ...mapGetters([
      'loggedin'
    ]),

// products() {
    //   return this.$store.getters.products
    // },
    cartItemCount() {
      let count = this.cart.length || 0
      return count
    },
  },
  firestore() {
    return {
       products: db.collection("koder-products")
    }
  },
  beforeCreate: function() {
  },

  methods: {
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
    // created: function() {
  //   this.$store.dispatch('initStore')
  // },
  // created: function() {
  //   axios
  //     .get("http://localhost:3000/products")
  //     .then(response => {
  //       this.products = response.data
  //       console.log(response.data);
  //       console.log(response.data[1])
  //     });
  // },
  //   created: function() {
  //   axios.get('products.json').then(response => {
  //     this.products = response.data.products;
  //     console.log(response.data.products);
  //   });
  // },
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


.rating-active:before {
   content: "\2605";
   position: absolute;
}
.rating {
  display: inline;
  margin-left: 10px;
  margin-top: 10px;
  float:right;
}
.rating > span {
  display: inline-block;
  position: relative;
  width: 1.1em;
}
</style>
