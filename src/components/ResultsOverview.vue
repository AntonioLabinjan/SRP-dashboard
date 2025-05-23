<template>
  <div>
    <label for="territory-select">Odaberi teritorij:</label>
    <select id="territory-select" v-model="selectedTerritory">
      <option disabled value="">-- Odaberi --</option>
      <option v-for="territory in territories" :key="territory" :value="territory">
        {{ territory }}
      </option>
    </select>

    <div v-if="selectedTerritory" style="margin-top: 20px;">
      <img :src="images[selectedTerritory]" 
           :alt="selectedTerritory + ' results'" 
           style="max-width: 100%; height: auto; border: 1px solid #ccc; padding: 10px;" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      territories: [],
      selectedTerritory: '',
      images: {}
    }
  },
  created() {
    // Dinamički uvoz svih slika iz assets/results pomoću require.context
    const imagesContext = require.context('@/assets/election_results_by_territory', false, /\.(png|jpe?g)$/)
    
    this.images = {}
    this.territories = imagesContext.keys().map(key => {
      // key je npr. "./Aveiro.png"
      const territoryName = key.replace(/^.\//, '').replace(/\.(png|jpe?g)$/, '')
      // Uploadaj putanju slike
      this.images[territoryName] = imagesContext(key)
      return territoryName
    })

    // Sortiraj abecedno
    this.territories.sort()
  }
}
</script>

<style scoped>
select {
  padding: 6px 10px;
  font-size: 1rem;
}
</style>
