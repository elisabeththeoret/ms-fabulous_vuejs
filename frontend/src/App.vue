<template>
  <!-- Navigation -->
  <header class="flex row header bg-light_rosemauve texte-marron">
    <nav class="flex row nav-principale">
      <div class="flex row">
        <router-link :to="{ name: 'home' }" class="logo btn">Ms. Fabulous</router-link>
        <router-link :to="{ name: 'pastry' }" class="btn">Pâtisseries</router-link>
        <router-link :to="{ name: 'contact' }" class="btn">Contact</router-link>
      </div>
      <button class="flex row gap-mini align-center btn btn-cart" :class="{ 'bg-dark_marron texte-rosemauve': showSideBar }" type="button" @click="toggleSideBar">
        <i class="bi bi-basket2-fill me-1 align-center" style="font-size:1.25em;"></i>
        <p>{{ totalQuantity }}</p>
      </button>
    </nav>
  </header>
  <!-- Content -->
  <div class="app">
    <Router-view
      :inventory = "inventory"
      :addInv = "addInventory"
      :updateInv = "updateInventory"
      :removeInv = "removeInventory"
      :addToCart = "addToCart"
      :removeItem = "removeItem"
    />
  </div>
  <!-- Sidebar -->
  <Sidebar
    v-if="showSideBar"
    :toggle = "toggleSideBar"
    :inventory = "inventory"
    :cart = "cart"
    :removeItem = "removeItem"
  />
  <!-- Footer -->
  <footer class="flex col footer">
    <small class="texte-dark_marron">&copy; 2023 Elisabeth Theoret - Tous droits réservés</small>
  </footer>
</template>

<script>
import Sidebar from '@/components/SideBar.vue'
import PastryDataService from '@/services/PastryDataService'

export default {

  components: {
    Sidebar
  },

  data: () => {
    return {
      showSideBar: false,
      inventory: [],
      cart: {}
    }
  },

  methods: {
    // toggle sidebar
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    },

    // add pastry in inventory (dom)
    addInventory (pastry) {
      this.inventory.push(pastry)
    },

    // update pastry in inventory (dom)
    updateInventory (index, pastry) {
      this.inventory[index].name = pastry.name
      this.inventory[index].category = pastry.category
      this.inventory[index].description = pastry.description
      this.inventory[index].price = pastry.price
      this.inventory[index].photo = pastry.photo
    },

    // remove pastry from inventory (dom)
    removeInventory (index) {
      this.inventory.splice(index, 1)
    },

    // add item to cart
    addToCart (pastry, index) {
      if (!this.cart[pastry]) this.cart[pastry] = 0
      this.cart[pastry] += this.inventory[index].quantity
      this.inventory[index].quantity = 0
    },

    // remove item from cart
    removeItem (name) {
      delete this.cart[name]
      console.log(this.cart)
    }
  },

  computed: {
    // cart total quantity
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },

  // getAll data
  mounted () {
    PastryDataService.getAll()
      .then(response => {
        this.inventory = response.data
        console.log(response)
      })
  }

}
</script>
