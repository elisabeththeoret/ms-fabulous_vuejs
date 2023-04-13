<template>
  <!-- Header Page -->
  <header class="flex col">
    <h1>{{ pastry.name }}</h1>
  </header>
  <!-- Section -->
  <section class="flex row gap-normal pastry-view">
    <img :src="require(`@/assets/img/${pastry.photo}`)" :alt="pastry.name">
    <div class="flex col gap-moyen pastry-content">
      <div class="flex col">
        <h3>{{ pastry.category }}</h3>
        <p>{{ pastry.description }}</p>
      </div>
      <div class="flex col gap-petit">
        <div class="flex row gap-trespetit align-baseline">
          <small>Quantité</small>
          <input type="number" min="1" class="text-center" style="max-width:80px;" v-model="pastry.quantity">
        </div>
        <button class="btn" @click="addToCart(pastry.name, i)">Ajouter au panier</button>
      </div>
    </div>
  </section>
  <!-- Administrateur -->
  <section class="flex row gap-large justify-center bg-light_vert">
    <router-link :to="{ name: 'edit-pastry', params: { id: pastry.id } }" class="btn border-marron">Mettre à jour</router-link>
    <button class="btn border-marron" type="button" @click="deletePastry">Supprimer</button>
  </section>
</template>

<script>
import PastryDataService from '@/services/PastryDataService'

export default {

  props: ['inventory', 'addToCart'],

  methods: {
    // delete
    deletePastry () {
      PastryDataService.delete(this.id).then(res => {
        // remove from cart
        this.removeItem(this.pastry.name)
        // delete from dom
        this.removeInv(this.pastryIndex)
        // redirect
        this.$router.push({ name: 'home' })
      })
    }
  },

  computed: {
    // get data by id
    pastry () {
      const pastry = this.inventory.find((p) => {
        return p.name === this.$route.params.id
      })
      return pastry
    },

    // find pastry index
    pastryIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.name === this.$route.params.id
      })
      return index
    }
  }

}
</script>
