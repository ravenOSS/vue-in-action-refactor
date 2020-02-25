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
        <div v-if="!myAuth">
          <b-button
            class="default"
            @click="signIn"
          >
            Sign In
          </b-button>
        </div>

        <div v-else>
          <b-button
            class="default"
            @click="signOut"
          >
            <img
              class="photo"
              :src="myAuth.photoURL"
            >
            Sign Out
          </b-button>
        </div>
        <b-link :to="{ name: 'checkout' }">
          <b-button
            class="lg"
          >
            <font-awesome-icon
              icon="shopping-cart"
              size="sm"
              color="red"
            />
            {{ cartItemCount }}Checkout
          </b-button>
        </b-link>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script>
import firebase from "firebase";
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
  beforeCreate() {
  firebase.auth().onAuthStateChanged(user => {
    this.$store.commit("SET_AUTH", user || false);
  });
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    myAuth() {
      return this.$store.getters.loggedin;
    }
  },
  
  methods: {
    showCheckout() {
      this.$router.push({ name: 'checkout' });
    },
    signIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          console.log("Signed in: ", result);
        })
        .catch(function(error) {
          console.log("error ", error);
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign out successful
          console.log("Signed Out");
        })
        .catch(function(error) {
          console.log("Error in Sign Out: ", error);
        });
    }
  }
};
</script>

<style scoped>
.active {
  color: red;
}
.photo {
  width: 25px;
  height: 25px;
}
.cart {
  padding: 10px;
  margin-right: 20px;
  color: black;
}

a {
  text-decoration: none;
  color: cadetblue;
}
.b-link:active {
  color: black;
}
</style>
