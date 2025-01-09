const app4 = Vue.createApp({
    data() {
      return {
        itemType: '',
        itemName: '',
        itemUrl: '',
        itemNumber: null,
        preDefItems: [
          { name: 'Burrito', type: 'Dinner', imgUrl: 'https://www.w3schools.com/vue/img_burrito.svg' },
          { name: 'Pizza', type: 'Dinner', imgUrl: 'https://www.w3schools.com/vue/img_pizza.svg' },
          { name: 'Pho Soup', type: 'Dinner', imgUrl: 'https://www.w3schools.com/vue/img_soup.svg' },
          { name: 'Spaghetti', type: 'Dinner', imgUrl: 'https://www.w3schools.com/vue/img_spaghetti.svg' },
          { name: 'Fish', type: 'Dinner', imgUrl: 'https://www.w3schools.com/vue/img_fish.svg' },
          { name: 'Cake', type: 'Dessert', imgUrl: 'https://www.w3schools.com/vue/img_cake.svg' },
          { name: 'Rice', type: 'Dinner', imgUrl: 'https://www.w3schools.com/vue/img_rice.svg' },
          { name: 'Salad', type: 'Dinner', imgUrl: 'https://www.w3schools.com/vue/img_salad.svg' },
          { name: 'Coke', type: 'Drink', imgUrl: 'https://www.w3schools.com/vue/img_soda.svg' },
          { name: 'Green Soda', type: 'Drink', imgUrl: 'https://www.w3schools.com/vue/img_greenSoda.svg' },
          { name: 'Doughnut', type: 'Dessert', imgUrl: 'https://www.w3schools.com/vue/img_doughnut.svg' },
          { name: 'Ice Cream', type: 'Dessert', imgUrl: 'https://www.w3schools.com/vue/img_iceCream.svg' },
          { name: 'Lemonade', type: 'Drink', imgUrl: 'https://www.w3schools.com/vue/img_lemonade.svg' },
          { name: 'Pancakes', type: 'Dessert', imgUrl: 'https://www.w3schools.com/vue/img_pancakes.svg' },
          { name: 'Water', type: 'Drink', imgUrl: 'https://www.w3schools.com/vue/img_water.svg' }
        ],
        order: []
      }
    },
    methods: {
      addItem(){
        let item = {
          name: this.itemName,
          number: this.itemNumber,
          url: this.itemUrl
        }
        this.order.push(item)
        this.itemType = ''
        this.itemName = ''
        this.itemNumber = null  
        this.itemUrl = ''
      },
      newUrl(e) {
        this.itemUrl = e.target.options[e.target.selectedIndex].getAttribute("data-url")
      }
    }
  })
 app4.mount('#app4')
