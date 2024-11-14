import { mount } from '@vue/test-utils'
import { describe, expect, it} from 'vitest'
import BaseInput from '../../../components/Base/BaseInput.vue'
import { useInputHandlers } from '../../../composables/useInputHandlers'

describe('BaseInput', () => {
    let wrapper
    const { createBaseInput } = useInputHandlers()
    beforeEach(() => {
        const baseInputRef = createBaseInput()
        wrapper = mount(BaseInput, {
            props: {
                id: 'test',
                type: 'text',
                modelValue: baseInputRef.value.value
            }
        })
    })

    it('Should render BaseInput component', () => {
        expect(wrapper.find('input').exists()).toBeTruthy()
    })

    it('Should has right props', () => {
        expect(wrapper.props('id')).toBe('test')
        expect(wrapper.props('type')).toBe('text')
        expect(wrapper.props('modelValue')).toBe('')
        expect(wrapper.props('placeholder')).toBe('')
        expect(wrapper.props('useVModel')).toBe(false)
    })

    it('Should not call input event when useVModel is false', async () => {
        await wrapper.trigger('input')

        const inputElement = wrapper.find('input');
        await inputElement.trigger('input');

        const emittedEvents = wrapper.emitted();

        expect(emittedEvents['update:modelValue']).toBeUndefined();
    })

    it('Should emit update:modelValue when handleInput is called directly', async () => {
        const wrapper = mount(BaseInput, {
            props: {
              id: 'test',
              type: 'text',
              modelValue: '',
              useVModel: true,
            },
          });

          const inputElement = wrapper.find('input');
          
          await inputElement.setValue('test value');
      
          const emittedEvents = wrapper.emitted();

          expect(emittedEvents['update:modelValue']).toBeTruthy();
          expect(emittedEvents['update:modelValue'][0]).toEqual(['test value']);
      });
})