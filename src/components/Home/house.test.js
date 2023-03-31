import {describe , it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import Aboutview from '@/views/Aboutview.vue'

describe('Aboutview', () => {
    it('should have a header', () => {
        const wrapper = mount(Aboutview)
        expect(wrapper.find('h1').text()).toMatch('About')
    })

    it('should render a description', () => {
        const wrapper = mount(Aboutview)
        expect(wrapper.find('.firsttext').text()).toMatch("Lorem ipsum")
    })

    it('should render a logo', () => {
        const wrapper = mount(Aboutview)
        expect(wrapper.find('img').attributes('src')).toEqual('/src/assets/dtt/logo_dtt.png')
    })

    it('should render a website link', () => {
        const wrapper = mount(Aboutview)
        expect(wrapper.find('a').text()).toEqual('www.d-tt.nl')
    })

    it('should have a valid website link', () => {
        const wrapper = mount(Aboutview)
        expect(wrapper.find('a').attributes('href')).toEqual('https://www.d-tt.nl')
    })
})
