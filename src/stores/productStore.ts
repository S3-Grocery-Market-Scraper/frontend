import type {productDTO} from "@/types/productDTO";
import { defineStore } from 'pinia'
import {reactive} from "vue";


export const useProductStore = defineStore('product', () => {
  const products = reactive<productDTO[]>([])

  async function readAll() {
    const response = await fetch('http://localhost:8000/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query readAllProductModels {
            productModels {
              name
              cheapestAtCompany {
                name
              }
              cheapestAtPrice
            }
          }
        `
      })
    })

    const responseProducts = await response.json()
    const productModels = responseProducts['data']['productModels'] as productDTO[]


    productModels.forEach(product => {
      products.push(product)
    })
  }

  return { products, readAll }
})
