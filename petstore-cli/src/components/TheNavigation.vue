<template>
  <header>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="primary"
    >
      <b-navbar-brand href="#">
        <h1>{{ sitename }}</h1>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button
          class="lg"
          @click="showCheckout"
        >
          <b-link
            :to="{ name: 'store-front' }"
            class="active"
          >
            <font-awesome-icon
              icon="shopping-cart"
              size="sm"
              color="red"
            />
            {{ cartItemCount }}Checkout
          </b-link>
        </b-button>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "TheNav",
  props: {
    cartItemCount: {
      default: null,
      type: Number
    }
  },
  data() {
    return {
      sitename: "Black Pet Despot"
    };
  },
  methods: {
    showCheckout() {
      this.$router.push({ name: "form-comp" });
    }
  }
};
</script>

<style scoped>
.active {
  color: red
}
.cart {
  padding: 10px;
  margin-right: 20px;
  color: red
}

a {
  text-decoration: none;
  color: cadetblue;
}
</style>
