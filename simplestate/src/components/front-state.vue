<template>
  <div>

    <h3><p>cartItems: {{ productsCount }} </p></h3>
    <button @click="setCount(productsCount + 1);">
      + 1
    </button>
    <button @click="setCount(productsCount - 1);">
      - 1
    </button>

  </div>
</template>

<script>
import { checkout, mutations } from "@/store/simpleState"

export default {
  name: 'FrontState',
  methods: {
    setCount: mutations.setCount,
  },

  computed: {
    productsCount() {
      return checkout.productsCount;
  }
  }
}
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
  color: #42b983;
}
</style>
