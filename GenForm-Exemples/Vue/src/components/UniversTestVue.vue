<template>
  <div class="univers-test-vue">
    <h1 class="title">POC GenForm</h1>

    <div class="content">
      <div class="left-section">
        <textarea
          v-model="jsonInput"
          class="json-input"
          placeholder="Enter JSON data here"
          id="changeform"
        />
        <button class="submit-button" @click="jsonSubmit" id="submit">Submit</button>
      </div>

      <div class="split-line" />

      <div class="right-section">
        <!-- <GenFormComponent isFromFile :file=jsonFromFile v-if="showGenForm"/> -->
        <!-- Ici, on affiche le composant GenFormComponent de npm -->
        <GenFormComponent
          v-if="showGenForm"
          :elems="customElems"
          :params="customParams"
          :features="customFeatures"
          key="componentKey"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Récupération du composant GenFormComponent de npm
import GenFormComponent from '@genform/vue'
import { nextTick } from 'vue' // Pour attendre que le DOM soit mis à jour

export default {
  name: 'UniversTestVue',
  components: {
    GenFormComponent
  },
  data() {
    return {
      jsonFromFile: {}, // JSON de test
      jsonInput: '',
      customElems: [],
      customParams: {},
      customFeatures: {},
      showGenForm: false // Pour supprimer le composant GenFormComponent du DOM
    }
  },
  // mounted() {
  //   import('../../Classic.json').then((json) => {
  //     this.jsonFromFile = json.default
  //   }).then(() => {
  //     this.showGenForm = true
  //   })
  // },
  methods: {
    jsonSubmit: async function () {
      try {
        // Récupérer les données JSON entrées par l'utilisateur
        const json = JSON.parse(this.jsonInput)
        this.customElems = json.elems
        this.customParams = json.params
        this.customFeatures = json.features

        // Supprimer mon composant GenFormComponent du DOM
        this.showGenForm = false
        // Attendre que le DOM soit mis à jour
        await nextTick()
        // Remettre mon composant GenFormComponent dans le DOM
        this.showGenForm = true
      } catch (error) {
        console.error('Invalid JSON data', error)
      }
    }
  }
}
</script>

<style scoped>
@import '../assets/univers-test-vue.css';
</style>
