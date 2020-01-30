
    sortedProducts () {
      console.log(`START OF SORT`)
      const productsArrray = this.products.slice(0)
      // eslint-disable-next-line no-inner-declarations
      function compare (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1
        } if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1
        } return 0
      }
      let productList = productsArrray.sort(compare)
      return productList
    }