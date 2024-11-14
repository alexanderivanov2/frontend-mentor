import { beforeEach, describe, it } from "vitest";
import { mount } from '@vue/test-utils';
import BaseFormInput from '../../../components/Base/BaseFormInput.vue'
import BaseInput from "../../../components/Base/BaseInput.vue";
import BaseLabel from '../../../components/Base/BaseLabel.vue';
import BaseErrorMessage from '../../../components/Base/BaseErrorMessage.vue';
import { useInputHandlers } from "../../../composables/useInputHandlers";

describe('BaseFormInput', () => {
    let wrapper;
    const { createBaseInput } = useInputHandlers()
    const baseInput = createBaseInput()
    beforeEach(() => {
        wrapper = mount(BaseFormInput, {
            stubs: {
                    BaseLabel,
                    BaseInput,
                    BaseErrorMessage,
            },
            props: {
                inputField: {
                    id: 'testID',
                    label: 'Test Label'
                },
                type: 'text',
                input: baseInput.value,
                handleInput: () => {},
                handleFocus: () => {},
                handleBlur: () => {},
            }
        })

    })

    it('BaseFormInput should render', () => {
        expect(wrapper.find('#testIDInputField').exists()).toBeTruthy()
    })

    it('BaseFormInput should render child components', () => {
        expect(wrapper.find('label[for="testID"]').exists()).toBeTruthy()
        expect(wrapper.find('#testID').exists()).toBeTruthy()
        expect(wrapper.findComponent(BaseErrorMessage).exists()).toBe(false)
    })

    it('BaseFormInput should render right label', () => {
        const expectedResult = wrapper.props('inputField').label
        expect(wrapper.find('label').text()).toBe(expectedResult)
    })

    it('Should render error message when isValid is false', async() => {
        const errorMessage = 'error test'

        baseInput.value.isValid = false;
        baseInput.value.errorMessage = errorMessage;
        await wrapper.vm.$nextTick();

        const errorMessageComponent = wrapper.findComponent({ name: 'BaseErrorMessage'})
        expect(errorMessageComponent.exists()).toBe(true)
        expect(errorMessageComponent.text()).toBe(errorMessage)
    })
})