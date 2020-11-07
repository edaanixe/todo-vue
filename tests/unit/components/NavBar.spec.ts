import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

describe('NavBar', () => {
    it('should match element against snapshot', () => {
        const wrapper = shallowMount(NavBar)
        expect(wrapper.element).toMatchSnapshot()
    })

    it('should trigger logout event', async () => {
        const wrapper = shallowMount(NavBar)

        await wrapper.find('.btn-logout').trigger('click')

        expect(wrapper.emitted('logout')).toHaveLength(1)
    });
});