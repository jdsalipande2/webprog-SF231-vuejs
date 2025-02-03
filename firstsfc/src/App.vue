<script setup>
import PersonalProfile from './components/PersonalProfile.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
  <h1>Food</h1>
  <PersonalProfile /> <br>
  <FoodItem /> <br>
  <FoodItem2 /> <br>
  <FoodItem /> <br>
  <FoodItem2 /> <br>
</template>

<style></style>
