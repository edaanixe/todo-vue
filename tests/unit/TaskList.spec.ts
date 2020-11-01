import { shallowMount } from '@vue/test-utils'
import TaskList from '@/components/TaskList.vue'

describe('TaskList', () => {
    it('should match element against snapshot', () => {
        const wrapper = shallowMount(TaskList)
        expect(wrapper.element).toMatchSnapshot()
      })
});