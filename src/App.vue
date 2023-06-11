<script setup lang="ts">
import { useProductStore } from "@/stores/productStore";
import ProductItem from "@/components/ProductItem.vue"

const productStore = useProductStore()
productStore.readAll()
</script>

<template>
  <div class="products">
      <ProductItem v-for="product in productStore.products" :product="product" />
  </div>
</template>

<style>
.products {
  display: flex;
  flex-wrap: wrap;
}

body {
  background-color: lightgray;
}

</style>