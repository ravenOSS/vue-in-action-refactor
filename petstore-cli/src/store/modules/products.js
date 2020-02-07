import axios from "axios";

const state = {
  products: {}
}

const getters = {
  products: state => state.products
}

const mutations = {
  SET_STORE(state, products) {
    state.products = products;
  }
}

const actions = {
  initStore: ({ commit }) => {
    axios
    .get("http://localhost:3000/products")
    .then((response) => {
      console.log(response.data);
      commit("SET_STORE", response.data);
    });
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}