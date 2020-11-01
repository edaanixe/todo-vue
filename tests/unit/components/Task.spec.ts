import { shallowMount } from '@vue/test-utils'
import Task from '@/components/Task.vue'

describe('Task.vue', () => {
  it('should match element against snapshot', () => {
    const wrapper = shallowMount(Task)
    expect(wrapper.element).toMatchSnapshot()
  })


  it('should render Task.title prop', () => {
    const title = 'Buy rice'
    const wrapper = shallowMount(Task, {
      propsData: {
        title
      }
    })

    expect(wrapper.text()).toContain(title)    
  });

  it('should render Task.completed prop', () => {
    const completed = true
    const wrapper = shallowMount(Task, {
      propsData: {
        completed
      }
    })

    expect(wrapper.classes()).toContain('completed')
  });  

  it('should trigger remove event', async () => {
    const wrapper = shallowMount(Task)

    await wrapper.find('.remove').trigger('click')

    expect(wrapper.emitted('remove')).toHaveLength(1)
  });

  it('should trigger resolved event', async () => {
    const wrapper = shallowMount(Task)

    await wrapper.find('.checkbox').trigger('click')

    expect(wrapper.emitted('resolved')).toHaveLength(1)
  });  
})
