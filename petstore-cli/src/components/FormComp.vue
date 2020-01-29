<template>
<b-container>
    <h3>Enter your information</h3>
    <br>
    <b-form>
      <b-form-group class="col-md-6">
        <strong>First Name:</strong>
        <b-form-input type="text" trim v-model="order.firstName" />
      </b-form-group>
      <b-form-group class="col-md-6">
        <strong>Last Name:</strong>
        <b-form-input type="text" trim v-model="order.lastName" />
      </b-form-group>
      <b-form-group class="col-md-6">
        <strong>Address</strong>
        <b-form-input type="text" trim v-model="order.address" />
      </b-form-group>
      <b-form-group class="col-md-6">
        <strong>City</strong>
        <b-form-input type="text" trim v-model="order.city" />
      </b-form-group>
      <b-form-group class="col-md-6">
        <strong>State:</strong>
        <b-form-select v-model="order.state">
          <option disabled value="">State</option>
          <option v-for="(state, key) in states" :key="key">{{ state }}</option>
        </b-form-select>
      </b-form-group>
      <b-form-group class="col-lg-6">
        <strong>Zip</strong>
        <b-form-input type="number" trim v-model="order.zip" class="form-control" />
      </b-form-group>
        <b-row class="box-row">
          <b-form-checkbox
                class="gift-checkbox"
                id="gift"
                v-model="order.gift"
                :value="order.sendGift"
                :unchecked-value="order.dontSendGift"><strong>Ship as Gift?</strong>
          </b-form-checkbox>
          <b-form-radio
                id="home"
                :value="order.home"
                v-model="order.method"
                class="radio-form">
            <strong>Home</strong>
          </b-form-radio>
          <b-form-radio
               id="business"
               :value="order.business"
               v-model="order.method"
               class="radio-form">
            <strong>Business</strong>
          </b-form-radio>
        </b-row>
      <div class="mt-4 row-cols-2 text-center">
        <b-button
              type="submit"
              variant="primary" ml-30
              v-on:click="submitForm">Place Order</b-button>
      </div>
    </b-form>
    <div class="col-md-12 verify">
      <pre>
        First Name: {{ order.firstName }}
        Last Name: {{ order.lastName }}
        Address: {{ order.address }}
        City: {{ order.city }}
        State: {{ order.state }}
        Zip: {{ order.zip }}
        Method: {{ order.method}}
        Gift: {{ order.gift }}
      </pre>
    </div>

</b-container>
</template>

<script>

export default {
  name: 'FormComp',
  props: ['cartItemCount'],
  data () {
    return {
      states: {
        AL: 'Alabama',
        AK: 'Alaska',
        AR: 'Arizona',
        CA: 'California',
        NV: 'Nevada'
      },
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: 'Home Address',
        business: 'Business Address',
        home: 'Home Address',
        gift: '',
        sendGift: 'Send As A Gift',
        dontSendGift: 'Do Not Send As A Gift'
      }
    }
  },
  methods: {
    submitForm () {
      alert('Submitted')
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
