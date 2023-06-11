import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProductItem from '@/components/ProductItem.vue';
import type { productDTO } from "@/types/productDTO"

const product: productDTO = {
  name: "test",
  price: 20,
  company: {name: "ah"},
  created_on: new Date(),
  last_modified: new Date()
}

describe('ProductItem', () => {
  it('renders properly', () => {
    const wrapper = mount(ProductItem, { props: { product: product } })
    expect(wrapper.text()).toContain('test')
  })
})
