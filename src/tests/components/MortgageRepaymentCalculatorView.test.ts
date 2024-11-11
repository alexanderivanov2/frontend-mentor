import MortgageRepaymentCalculatorView from '../../views/JuniorPages/MortgageRepaymentCalculator/MortgageRepaymentCalculatorView.vue'
import { mount } from '@vue/test-utils'

import { describe, it } from 'vitest'


describe('MortgageRepaymentCalculatorView', () => {
    const wrapper = mount(MortgageRepaymentCalculatorView)

    it('Should component be mounted', () => {
        expect(wrapper.find('#mortgageRepaymentCalculator').exists()).toBeTruthy()
    })

    it('Should render mortgage amount input', () => {
        expect(wrapper.find('#mortgageAmount').exists()).toBeTruthy();
    })
})