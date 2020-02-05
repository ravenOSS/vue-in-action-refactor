import Vue from "vue";

export const store = Vue.observable({
  cartItemCount: 5 
});

export const mutations = {
  setCount(cartItemCount) {
    store.cartItemCount = cartItemCount
  }
}

// export const store = Vue.observable({
//   count: 5
// });

// export const mutations = {
//   setCount(count) {
//     store.count = count;
//   }
// };