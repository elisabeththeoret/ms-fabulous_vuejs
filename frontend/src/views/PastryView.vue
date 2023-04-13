<template>
  <!-- Header Page -->
  <header class="flex col">
    <h1>Nos pâtisseries</h1>
    <p>Nous vous proposons une variété de gâteaux, de pâtisseries et de desserts confectionnés avec soin, à partir d’ingrédients de première qualité et sans aucun agent de conservation. Respectant les méthodes traditionnelles, nos artisans savent assembler les saveurs, les textures, pour vous offrir une variété de produits gourmands uniques à Ms. Fabulous.</p>
    <router-link :to="{ name: 'new-pastry' }" class="btn">Nouvelle pâtisserie</router-link>
  </header>
  <!-- List -->
  <section class="app">
    <div class="grille-lg gap-trespetit">
      <article class="boite bg-light_vert border-light_vert" v-for="(pastry, i) in inventory" :key="i">
        <img :src="require(`@/assets/img/${pastry.photo}`)" :alt="pastry.name" style="max-height:25vh;" v-if="pastry.photo">
        <div class="flex col boite-content">
          <h2>{{ pastry.name }}</h2>
          <small><h4>{{ pastry.category }}</h4></small>
          <router-link :to="{ name: 'show-pastry', params: { id: pastry.name } }" class="btn border-marron gap-mini ">
            <i class="bi bi-arrow-right-short" style="font-size:1.25em;"></i>
          </router-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {

  props: ['inventory', 'addToCart']

}
</script>
