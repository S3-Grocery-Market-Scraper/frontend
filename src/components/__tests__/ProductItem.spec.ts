import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProductItem from '@/components/ProductItem.vue';
import type { productDTO } from "@/types/productDTO"

const product: productDTO = {
  name: "test",
  price: 20,
  store: "ah"
}

describe('ProductItem', () => {
  it('renders properly', () => {
    const wrapper = mount(ProductItem, { props: { product: product } })
    expect(wrapper.text()).toContain('test')
  })
})
