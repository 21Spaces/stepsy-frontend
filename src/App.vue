<script setup lang="ts">
import { useQuery } from '@urql/vue'
import { graphql } from './gql/gql'
import { computed } from 'vue'
import HomeView from './views/HomeView.vue'

import { Footer } from './components/Footer'

// postsQueryDocument is now fully typed!
const postsQueryDocument = graphql(`
  query walks {
    walks {
      id
    }
  }
`)

const { data } = useQuery({ query: postsQueryDocument, variables: {} })

const users = computed(() => data.value)
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <HomeView />
    </div>
    <Footer/>
  </div>
</template>
