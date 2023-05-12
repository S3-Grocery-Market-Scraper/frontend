<script setup lang="ts">
import {productStore} from "@/stores/productStore";
import ProductItem from "@/components/ProductItem.vue"

</script>

<template>
  <div class="products">
      <ProductItem v-for="product in productStore" :product="product" />
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