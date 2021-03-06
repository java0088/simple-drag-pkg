import { shallowMount } from '@vue/test-utils'
import { Drag } from '../../src'

describe('Drag.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'new message'
    const wrapper = shallowMount(Drag, {
      props: { text },
    })
    expect(wrapper.text()).toMatch('123')
  })
})

describe('Drag.vue', () => {
  it('renders drag html when passed', () => {
    const text = 'new message'
    const wrapper = shallowMount(Drag, {
      props: { text },
    })
    expect(wrapper.html()).toMatch(
      `<div class="sen-drag" draggable="true" style="left: 0px; top: 0px;">${text}</div>`
    )
  })
})
