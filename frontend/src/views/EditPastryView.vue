<template>
  <!-- Header Page -->
  <header class="flex col">
    <h1>Mettre à jour</h1>
    <p>Remplissez le formulaire ci-dessous afin de mettre à jour la pâtisserie : {{ pastry.name }}.</p>
  </header>
  <!-- Form -->
  <form class="flex col gap-petit bg-light_marron">
    <div class="boite bg-light_rosemauve border-light_rosemauve" v-show="message" v-if="!submitted">{{ message }}</div>
    <div class="grille-lg gap-moyen">
      <div class="flex col">
        <div class="form-control">
          <label for="name">Nom de la pâtisserie*</label>
          <input type="text" name="name" id="name" v-model="pastry.name" />
        </div>
        <div class="form-control">
          <label for="category">Catégorie</label>
          <input type="text" name="category" id="category" v-model="pastry.category" />
        </div>
        <div class="form-control">
          <label for="price">Prix*</label>
          <div class="flex row gap-mini align-baseline">
            <span>$</span>
            <input type="text" name="price" id="price" placeholder="00.00" v-model="pastry.price" />
          </div>
        </div>
        <div class="form-control">
          <label for="photo">Photo</label>
          <input type="text" name="photo" id="photo" v-model="pastry.photo" />
        </div>
      </div>
      <div class="form-control">
        <label for="description">Description*</label>
        <textarea name="description" id="description" v-model="pastry.description"></textarea>
      </div>
    </div>
    <nav class="flex row align-baseline gap-normal">
      <router-link :to="{ name: 'pastry' }">Annuler</router-link>
      <button class="btn border-marron" @click="deletePastry">Supprimer</button>
      <button class="btn btn-submit" @click="updatePastry">Enregistrer</button>
    </nav>
  </form>
</template>

<script>
import PastryDataService from '@/services/PastryDataService'

export default {

  props: ['inventory', 'updateInv', 'removeInv', 'removeItem'],

  data () {
    return {
      pastry: {},
      id: parseInt(this.$route.params.id),
      submitted: false
      // message: null
    }
  },

  methods: {
    // update
    updatePastry () {
      PastryDataService.update(this.id, this.pastry).then(res => {
        this.updateInv(this.pastryIndex, this.pastry)
        // success message
        this.submitted = true
      })
    },

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
    // find pastry index
    pastryIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.id === this.id
      })
      return index
    }
  },

  // get data by id
  mounted () {
    PastryDataService.get(this.id).then(res => {
      this.pastry = res.data
    })
  }

}
</script>
