import { describe, expect, test } from 'vitest'
import { useInputHandlers } from '../../composables/useInputHandlers'
import useValidator from '../../composables/useValidator';
const { createBaseInput, handleInput, handleRadioInput, handleBlurInputIntlFormat, handleFocusInputIntlDeformat, formatNumberCommaSeparated } = useInputHandlers()
const { numberValidator } = useValidator();

describe('createBaseInput function', () => {
    test('Should create baseInput ref', () => {
        const baseInput = createBaseInput()
        expect(baseInput.value).toBeTypeOf("object")
        expect(baseInput.value).toHaveProperty('value')
        expect(baseInput.value.value).toBeTypeOf('string')
        expect(baseInput.value).toHaveProperty('isValid')
        expect(baseInput.value.isValid).toBeTypeOf('boolean')
        expect(baseInput.value).toHaveProperty('errorMessage')
        expect(baseInput.value.errorMessage).toBeTypeOf('string')
    })
})

describe('handleInput function', () => {
    const baseInput = createBaseInput()
    const validatorConfigMortgageAmount = {
        min: 1,
        max: 10000000,
    }
    let handleInputFn = handleInput(baseInput, { strict: true, validator: numberValidator, validatorConfig: validatorConfigMortgageAmount })
    const inputElement = document.createElement('input')
    inputElement.addEventListener('input', handleInputFn)
    
    const reuseEventAttachment = (config={}) => {
        inputElement.removeEventListener('input', handleInputFn)
        handleInputFn = handleInput(baseInput, config)
        inputElement.addEventListener('input', handleInputFn)
    }

    test('Should inizializate handleInput', () => {
        expect(handleInputFn).toBeTypeOf('function')
    })

    test('Should handleInput with no restriction to update value with text', () => {
        const expectedResult = 'test'
        inputElement.value = expectedResult
        inputElement.dispatchEvent(new Event('input'))

        expect(inputElement.value).toBe(expectedResult)
        expect(baseInput.value.value).toBe(expectedResult)
    })

    test('Should handleInput with no restriction to update value with numbers', () => {
        const expectedResult = '123'
        inputElement.value = expectedResult
        inputElement.dispatchEvent(new Event('input'))

        expect(inputElement.value).toBe(expectedResult)
        expect(baseInput.value.value).toBe(expectedResult)
    })

    test('Should delete last digit and allow input to be empty', () => {
        const firstResult = '1'
        inputElement.value = firstResult
        inputElement.dispatchEvent(new Event('input'))
   
        expect(inputElement.value).toBe(firstResult)
        expect(baseInput.value.value).toBe(firstResult)

        const expectedResult = ''
        inputElement.value = expectedResult
        inputElement.dispatchEvent(new Event('input'))

        expect(inputElement.value).toBe(expectedResult)
        expect(baseInput.value.value).toBe(expectedResult)
    })

    reuseEventAttachment({validator: numberValidator, validatorConfig: validatorConfigMortgageAmount })

    test('Should set isValid to be false', () => {

        const expectedResult = 'test'
        inputElement.value = expectedResult
        inputElement.dispatchEvent(new Event('input'))

        expect(inputElement.value).toBe(expectedResult)
        expect(baseInput.value.value).toBe(expectedResult)
        expect(baseInput.value.isValid).toBeFalsy()
    })

    test('Should set isValid to be true', () => {
        expect(baseInput.value.isValid).toBeFalsy()
        const expectedResult = '123'
        inputElement.value = expectedResult

        inputElement.dispatchEvent(new Event('input'))

        expect(inputElement.value).toBe(expectedResult)
        expect(baseInput.value.value).toBe(expectedResult)
        expect(baseInput.value.isValid).toBeTruthy()
    })

    reuseEventAttachment({ validator: numberValidator, validatorConfig: validatorConfigMortgageAmount, errorHandling: { errorMessage: 'error'}})
    
    test('Should set errorMessage', () => {
        expect(baseInput.value.isValid).toBeTruthy()
        const errorMessage = 'error'
        const expectedResult = '123e'
        inputElement.value = expectedResult

        inputElement.dispatchEvent(new Event('input'))

        expect(inputElement.value).toBe(expectedResult)
        expect(baseInput.value.value).toBe(expectedResult)
        expect(baseInput.value.isValid).toBeFalsy()
        expect(baseInput.value.errorMessage).toBe(errorMessage)
    })

    test('Should remove errorMessage', () => {
        expect(baseInput.value.isValid).toBeFalsy()
        const errorMessage = ''
        const expectedResult = '123'
        inputElement.value = expectedResult

        inputElement.dispatchEvent(new Event('input'))

        expect(inputElement.value).toBe(expectedResult)
        expect(baseInput.value.value).toBe(expectedResult)
        expect(baseInput.value.isValid).toBeTruthy()
        expect(baseInput.value.errorMessage).toBe(errorMessage)
    })

    test('Should not update value if input is invalid', () => {
        reuseEventAttachment({ strict: true, validator: numberValidator, errorHandling: { errorMessage: 'error'}})
        const expectedResult = '123e'
        inputElement.value = expectedResult

        inputElement.dispatchEvent(new Event('input'))

        expect(inputElement.value).not.toBe(expectedResult)
        expect(baseInput.value.value).not.toBe(expectedResult)
    })

    test('Should not update value and has errorMessage', () => {
        reuseEventAttachment({ strict: true, validator: numberValidator, errorHandling: { errorMessage: 'error'}})
        const expectedResult = '123e'
        const errorMessage = 'error'
        inputElement.value = expectedResult

        inputElement.dispatchEvent(new Event('input'))

        expect(inputElement.value).not.toBe(expectedResult)
        expect(baseInput.value.value).not.toBe(expectedResult)
        expect(baseInput.value.errorMessage).toBe(errorMessage)
    })

    test('Should update value and erase errorMessage', () => {
        reuseEventAttachment({ strict: true, validator: numberValidator, errorHandling: { errorMessage: 'error'}})
        const expectedResult = '123'
        const errorMessage = ''
        inputElement.value = expectedResult

        inputElement.dispatchEvent(new Event('input'))

        expect(inputElement.value).toBe(expectedResult)
        expect(baseInput.value.value).toBe(expectedResult)
        expect(baseInput.value.errorMessage).toBe(errorMessage)
    })
})

describe('handleRadioInput', () => {
    const baseInput = createBaseInput()
    let handleRadioInputFn = handleRadioInput(baseInput)
    const inputElement = document.createElement('input')
    inputElement.addEventListener('click', handleRadioInputFn)

    test('Should change value', () => {
        const expectedResult = 'test'
        inputElement.value = expectedResult

        inputElement.dispatchEvent(new Event('click'))

        expect(baseInput.value.value).toBe(expectedResult)
    })

    
    test('Should reset isValid and errorMessage', () => {
        const expectedResult = 'test'
        baseInput.value.isValid = false
        baseInput.value.errorMessage = 'test'

        expect(baseInput.value.isValid).toBeFalsy()
        expect(baseInput.value.errorMessage).toBe(expectedResult)

        inputElement.value = expectedResult
        inputElement.dispatchEvent(new Event('click'))

        expect(baseInput.value.isValid).toBeTruthy()
        expect(baseInput.value.errorMessage).toBe('')
    })
})

describe('handleFocusInputIntlDeformat', () => {
    const baseInput = createBaseInput()
    let handleFocusInputIntlDeformatFn = handleFocusInputIntlDeformat(baseInput)
    const inputElement = document.createElement('input')
    inputElement.addEventListener('focus', handleFocusInputIntlDeformatFn)

    test('Should empty string stay empty string', () => {
        inputElement.dispatchEvent(new Event('focus'))
        expect(inputElement.value).toBe('')
    })

    test('Should deformat formated number', () => {
        const numberResult = '300,000'
        const expectedResult = '300000'
        baseInput.value.value = expectedResult
        inputElement.value = numberResult
        
        inputElement.dispatchEvent(new Event('focus'))

        expect(inputElement.value).toBe(expectedResult)
        expect(baseInput.value.value).toBe(expectedResult)
    })
})

describe('handleBlurInputIntlFormat', () => {
    const baseInput = createBaseInput()
    let handleBlurInputIntlFormatFn = handleBlurInputIntlFormat(baseInput)
    const inputElement = document.createElement('input')
    inputElement.addEventListener('blur', handleBlurInputIntlFormatFn)

    test('Should work with empty string', () => {
        const expectedResult = ''
        inputElement.dispatchEvent(new Event('blur'))

        expect(inputElement.value).toBe(expectedResult)
    })

    test('Should format input', () => {
        const numberResult = '300000'
        const expectedResult = '300,000'
        inputElement.value = numberResult
        inputElement.dispatchEvent(new Event('blur'))

        expect(inputElement.value).toBe(expectedResult)
        expect(baseInput.value.value).toBe('')
    })
})

describe('formatNumberCommaSeparated', () => {
    test('Should return plain number', () => {  
        const value = '333,000'
        const expectedResult = '333000'

        const result = formatNumberCommaSeparated(value)
        
        expect(result).toBe(expectedResult)
    })
})