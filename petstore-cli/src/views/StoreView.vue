<template>
  <b-container>
    <div class="store">
      <TheNav :cart-item-count="cartItemCount" />
      <Storefront />
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import TheNav from "@/components/TheNavigation.vue";
import Storefront from "@/components/Storefront.vue";

export default {
  name: "Storeview",
  components: {
    Storefront,
    TheNav
  },
  props: {
    cartItemCount: {
      default: 0,
      type: Number
    }
  }
};
</script>
