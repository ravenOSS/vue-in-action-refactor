
const state = {
  products: {},
  loggedin: false
}

const getters = {
  // products: state => state.products,
  loggedin: state => state.loggedin
}

const mutations = {
  // SET_STORE(state, products) {
  //   state.products = products
  // },
  SET_AUTH(state, loggedin) {
    state.loggedin = loggedin
  }
}

// const actions = {
//   initStore: ({ commit }) => {
//     axios
//     .get("http://localhost:3000/products")
//     .then((response) => {
//       console.log(response.data);
//       commit("SET_STORE", response.data);
//     });
//   }
// }

export default {
  state,
  getters,
  mutations
  // actions,

}