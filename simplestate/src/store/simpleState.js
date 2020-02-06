/* eslint-disable no-console */
import Vue from "vue";

export const checkout = Vue.observable({
  productsCount: 4
});

export const mutations = {
  setCount(productsCount) {
    checkout.productsCount = productsCount
    console.log( `productsCount : ${productsCount}`)
  }
}
