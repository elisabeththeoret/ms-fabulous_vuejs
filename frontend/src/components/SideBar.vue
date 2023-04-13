<template>
  <aside class="flex col gap-petit cart-container bg-dark_marron texte-white">
    <header class="flex row justify-space-between cart-header">
      <button class="cart-close close-x-icon texte-hover-marron" @click="toggle"><i class="bi bi-x" style="font-size:1em;"></i></button>
      <h2>Panier</h2>
    </header>
    <div class="flex col justify-space-between cart-body">
      <p class="center" v-if="!Object.keys(cart).length"><em>Votre panier est vide...</em></p>
      <div class="cart-content" v-for="(quantity, key, i) in cart" :key="i">
        <article class="flex row align-center gap-petit cart-item">
          <img :src="require(`@/assets/img/${getPhoto(key)}`)" :alt="key" />
          <div class="flex col gap-mini justify-center">
            <h5>Pâtisserie</h5>
            <div class="flex row gap-trespetit">
              <form class="flex row gap-mini align-center cart-qte">
                <button class="btn"><i class="bi bi-dash flex align-center justify-center"></i></button>
                <small>{{ quantity }}</small>
                <button class="btn"><i class="bi bi-plus flex align-center justify-center"></i></button>
              </form>
              <p>{{ (getPrice(key)*quantity).toFixed(2) }} $</p>
            </div>
          </div>
          <button class="cart-remove icon texte-light_marron texte-hover-rosemauve" @click="removeItem(key)"><i class="bi-trash3-fill"></i></button>
        </article>
      </div>
    </div>
    <footer class="flex col align-center justify-space-between cart-footer" v-if="!Object.keys(cart).length">
      <div class="flex row egal align-baseline justify-space-between">
        <p>Total</p>
        <h3 class="text-right">$ {{ calculateTotal() }}</h3>
      </div>
      <button class="btn bg-light_vert texte-marron texte-hover-dark_marron">Checkout</button>
    </footer>
  </aside>
</template>

<script>
export default {

  props: ['toggle', 'cart', 'inventory', 'removeItem'],

  methods: {
    // get pastry price
    getPrice (name) {
      const pastry = this.inventory.find((p) => {
        return p.name === name
      })
      return pastry.price.toFixed(2)
    },

    // get pastry photo
    getPhoto (name) {
      const pastry = this.inventory.find((p) => {
        return p.name === name
      })
      return pastry.photo
    },

    // calculate total cart price
    calculateTotal () {
      const total = Object.entries(this.cart).reduce((acc, curr) => {
        return acc + (curr[1] * this.getPrice(curr[0]))
      }, 0)
      return total.toFixed(2)
    }
  }

}

</script>
