import { shallowMount } from '@vue/test-utils'
import TaskForm from '@/components/TaskForm.vue'

describe('TaskForm', () => {
    it('should match element against snapshot', () => {
        const wrapper = shallowMount(TaskForm)
        expect(wrapper.element).toMatchSnapshot()
    })

    it('should trigger add-task event', async () => {
        const wrapper = shallowMount(TaskForm)

        await wrapper.find('.todo-list-add-btn').trigger('click')

        expect(wrapper.emitted('add-task')).toHaveLength(1)
    });
});