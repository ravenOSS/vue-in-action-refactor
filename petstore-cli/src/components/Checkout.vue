<template>
  <b-container>
    <TheNav :cart-item-count="cartItemCount" />
    <h3>Enter your information</h3>
    <br>

    <b-form>
      <b-form-row>
        <b-col>
          <b-form-group>
            <strong>First Name:</strong>
            <b-form-input
              v-model.trim="order.firstName"
              type="text"
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group>
            <strong>Last Name:</strong>
            <b-form-input
              v-model="order.lastName"
              type="text"
              trim
            />
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <b-form-group>
            <strong>Address</strong>
            <b-form-input
              v-model="order.address"
              type="text"
              trim
            />
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <b-form-group>
            <strong>City</strong>
            <b-form-input
              v-model="order.city"
              type="text"
              trim
            />
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <b-form-group>
            <strong>State:</strong>
            <b-form-select v-model="order.state">
              <b-form-select-option
                value=""
              >
                State
              </b-form-select-option>
              <b-form-select-option
                v-for="(state, abbr) in states"
                :key="abbr"
                :value="abbr"
              >
                {{ state }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group>
            <strong>Zip</strong>
            <b-form-input
              v-model="order.zip"
              type="number"
              trim
              class="form-control"
            />
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="6">
          <b-form-checkbox
            id="gift"
            v-model="order.gift"
            :value="order.sendGift"
            :unchecked-value="order.dontSendGift"
          >
            <strong>Ship as Gift?</strong>
          </b-form-checkbox>
        </b-col>
        <b-col>
          <b-form-radio
            id="home"
            v-model="order.method"
            :value="order.home"
          >
            <strong>Home</strong>
          </b-form-radio>
        </b-col>
        <b-col>
          <b-form-radio
            id="business"
            v-model="order.method"
            :value="order.business"
          >
            <strong>Business</strong>
          </b-form-radio>
        </b-col>
      </b-form-row>
      <div class="mt-4 row-cols-2 text-center">
        <b-button
          type="submit"
          variant="primary"
          ml-30
          @click="submitForm"
        >
          Place Order
        </b-button>
      </div>
    </b-form>
    <div class="col-md-12 verify">
      <h4>Please verify your order details</h4>
      <pre>
        First Name: {{ order.firstName }}
        Last Name: {{ order.lastName }}
        Address: {{ order.address }}
        City: {{ order.city }}
        State: {{ order.state }}
        Zip: {{ order.zip }}
        Method: {{ order.method }}
        Gift: {{ order.gift }}
      </pre>
    </div>
  </b-container>
</template>

<script>
import TheNav from "./TheNavigation.vue"
export default {
  name: "Checkout",
  components: { TheNav },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    cartItemCount: {
      type: Number
    }
  },
  data() {
    return {
      states: {
        AL: "Alabama",
        AK: "Alaska",
        AR: "Arizona",
        CA: "California",
        NV: "Nevada"
      },
      order: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zip: "",
        state: "",
        method: "Home Address",
        business: "Business Address",
        home: "Home Address",
        gift: 'Send As A Gift',
        sendGift: "Send As A Gift",
        dontSendGift: "Do Not Send As A Gift"
      }
    };
  },
  computed: {
  },
  methods: {
    submitForm() {
      alert("Submitted");
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gift-checkbox {
  margin-left: 80px;
  margin-right: 60px;
}

.radio-form {
  margin-left: 20px;
}

.b-form-radio {
  margin-right: 30px;
}
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
