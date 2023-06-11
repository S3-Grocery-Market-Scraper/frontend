import type {productDTO} from "@/types/productDTO";
import { defineStore } from 'pinia'
import {reactive} from "vue";


export const useProductStore = defineStore('product', () => {
  const products = reactive<productDTO[]>([])

  async function readAll() {
    const response = await fetch('http://localhost:8001/api/v1/company/647071173a40f625d7eef24a/product')

    const responseProducts = await response.json() as productDTO[]

    responseProducts.forEach(product => {
      products.push(product)
    })
  }

  return { products, readAll }
})
