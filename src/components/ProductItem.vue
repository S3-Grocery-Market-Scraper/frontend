<template>
  <div class="product-wrapper">
    <div class="product-card">
        <img src="https://placehold.co/200" alt="Product Name">
        <h3>{{ product.name }}</h3>
        <p class="price">&euro; {{ product.cheapestAtPrice }}</p>
        <p>
            Store: {{ product.cheapestAtCompany.name }}
        </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {productDTO} from "@/types/productDTO";

defineProps<{
    product: productDTO
}>()
</script>

<style scoped>

.product-wrapper {
  display: inline-block;
}

.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: white;
  margin: 1rem;
}

.product-card img {
  max-width: 100%;
}

.product-card h3 {
  margin-top: 16px;
  font-size: 1.2rem;
}

.product-card .price {
  font-size: 1.4rem;
  font-weight: bold;
  color: #007bff;
  margin-top: 8px;
}

.product-card .btn {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 16px;
  transition: background-color 0.3s ease;
}

.product-card .btn:hover {
  background-color: #0062cc;
}

</style>