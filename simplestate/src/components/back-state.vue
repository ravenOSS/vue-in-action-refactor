<template>
  <h3>
    <p>cartItems: {{ productsCount }}</p>
  </h3>
</template>

<script>
import { checkout } from "@/store/simpleState";

export default {
  name: "BackState",
  computed: {
    productsCount() {
      return checkout.productsCount;
    }
  }
};
</script>

<style></style>
