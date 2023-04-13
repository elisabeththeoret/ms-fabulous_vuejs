<template>
  <!-- Header Page -->
  <header class="flex col">
    <h1>Nouvelle pâtisserie</h1>
    <p>Remplissez le formulaire ci-dessous afin d'ajouter une nouvelle pâtisserie.</p>
  </header>
  <!-- Form -->
  <form class="flex col gap-petit bg-light_marron" v-if="!submitted">
    <div class="boite bg-light_rosemauve border-light_rosemauve" v-show="message">
      <p>{{ message }}</p>
    </div>
    <div class="grille-lg gap-moyen" novalidate>
      <div class="flex col">
        <div class="form-control">
          <label for="pastryName">Nom de la pâtisserie*</label>
          <input type="text" name="pastryName" id="pastryName" v-model="pastry.name" />
        </div>
        <div class="form-control">
          <label for="pastryCategory">Catégorie</label>
          <input type="text" name="pastryCategory" id="pastryCategory" v-model="pastry.category" />
        </div>
        <div class="form-control">
          <label for="pastryPrice">Prix*</label>
          <div class="flex row gap-mini align-baseline">
            <span>$</span>
            <input type="text" name="pastryPrice" id="pastryPrice" placeholder="00.00" v-model="pastry.price" />
          </div>
        </div>
        <div class="form-control">
          <label for="pastryPhoto">Photo</label>
          <input type="text" name="pastryPhoto" id="pastryPhoto" v-model="pastry.photo" />
        </div>
      </div>
      <div class="form-control">
        <label for="pastryDescription">Description*</label>
        <textarea name="pastryDescription" id="pastryDescription" v-model="pastry.description"></textarea>
      </div>
    </div>
    <nav class="flex row align-baseline gap-normal">
      <router-link :to="{ name: 'pastry' }">Annuler</router-link>
      <button class="btn btn-submit" @click="savePastry">Ajouter</button>
    </nav>
  </form>
  <div class="flex col" v-else>
    <h4>Succès!</h4>
    <p>La nouvelle pâtisserie a été ajoutée!</p>
    <button class="btn" @click="newPastry">Ajouter une autre?</button>
  </div>
</template>

<script>
import PastryDataService from '@/services/PastryDataService'

export default {

  props: ['addInv'],

  data () {
    return {
      pastry: {
        name: '',
        pastryCategory: '',
        description: '',
        price: '',
        photo: ''
      },
      submitted: false,
      message: null
    }
  },

  methods: {
    // create
    savePastry () {
      PastryDataService.create(this.pastry).then(res => {
        this.pastry.id = res.data.id
        this.addInv(this.pastry)
        this.message = null
        this.submitted = true
        // this.$router.push({ name: 'home' })
        // console.log(this.submitted)
      }).catch(err => {
        console.log(err.response.data.message)
        this.message = err.response.data.message
      })
    },

    // reset add form
    newPastry () {
      this.submitted = false
      this.pastry = {}
    }
  }

}
</script>
