import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProductItem from '@/components/ProductItem.vue';
import type { productDTO } from "@/types/productDTO"

const product: productDTO = {
  company: {name: 'Jumbo'},
  name: "Bier",
  cheapestAtCompany: {
    name: "Jumbo"
  },
  cheapestAtPrice: 16.49,
  created_on: new Date(),
  last_modified: new Date()
}

describe('ProductItem', () => {
  it('renders properly', () => {
    const wrapper = mount(ProductItem, { props: { product: product } })

    expect(wrapper.text()).toContain('Bier')
    expect(wrapper.text()).toContain('€ 16.49')
    expect(wrapper.text()).toContain('Store: Jumbo')
  })
})
