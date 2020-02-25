# Vue.js in Action

## This is a side project to refactor book's original code.
Key Changes:
- Bootstrap-Vue for UI components instead of Bootstrap 3.3.7
- Change from Glyph Icons to FontAwesome
- Latest Vuex for State Management
- Switch from Google Firebase to Firestore
- Change VueFire config for Firestore
- Add currency mixin for price formatting
- Change product ID method to extract from path params

# Main code is in petstore-cli. It is not a complete refactor. 
## Create Google project and add Firestore
- Use Firestore **console** to manage DB. Don't go directly from Accounts Page. You need to set up DB, collection, and auth. Read Google's docs to see what this should look like
- Add connection credentials to db.example.js and change name to db.js
- You may enter collection data directly through the Firebase console. Alternative is to use fire-code(in this repo-soon) for a local UI.
Styling may still use standard Bootstrap 4.
Code may or may not run at different commits

Modified files for the Vue.js in Action book.

Grab the book at [https://www.manning.com/books/vue-js-in-action](https://www.manning.com/books/vue-js-in-action)

### TODO
- Get images to display
- Get rating stars to display - overcome fontawesome limitation
- Cart Item count not displaying on Checkout page
- Add fire-code to repo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```


