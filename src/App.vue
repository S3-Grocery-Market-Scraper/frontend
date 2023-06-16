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
  justify-content: flex-start;
}

body {
  background-color: lightgray;
  font-family: Tahoma, sans-serif;
}

</style>