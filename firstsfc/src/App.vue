<template>
  <div>
    <PersonalProfile />
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </div>
</template>

<script>
import PersonalProfile from './components/PersonalProfile.vue';
import { supabase } from './lib/supabaseClient';

export default {
  components: {
    PersonalProfile
  },
  data() {
    return {
      countries: []
    };
  },
  methods: {
    async getCountries() {
      const { data } = await supabase.from('countries').select();
      this.countries = data || [];
    }
  },
  mounted() {
    this.getCountries();
  }
};
</script>

<style>
/* Your global styles here */
</style>
