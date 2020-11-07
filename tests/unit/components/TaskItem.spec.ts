import { shallowMount } from '@vue/test-utils'
import TaskItem from '@/components/TaskItem.vue'

describe('TaskItem.vue', () => {
  it('should match element against snapshot', () => {
    const wrapper = shallowMount(TaskItem)
    expect(wrapper.element).toMatchSnapshot()
  })


  it('should render TaskItem.title prop', () => {
    const title = 'Buy rice'
    const wrapper = shallowMount(TaskItem, {
      propsData: {
        title
      }
    })

    expect(wrapper.text()).toContain(title)    
  });

  it('should render TaskItem.completed prop', () => {
    const completed = true
    const wrapper = shallowMount(TaskItem, {
      propsData: {
        completed
      }
    })

    expect(wrapper.classes()).toContain('completed')
  });  

  it('should trigger remove event', async () => {
    const wrapper = shallowMount(TaskItem)

    await wrapper.find('.remove').trigger('click')

    expect(wrapper.emitted('remove')).toHaveLength(1)
  });

  it('should trigger resolved event', async () => {
    const wrapper = shallowMount(TaskItem)

    await wrapper.find('.checkbox').trigger('click')

    expect(wrapper.emitted('resolved')).toHaveLength(1)
  });  
})
