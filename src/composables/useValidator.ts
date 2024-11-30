import { validatorConfig } from "../types/inputTypes"

const useValidator = () => {

    const regexValidator = (value: string, regEx: RegExp) => {
        return regEx.test(value)
    }

    const numberValidator = (value: any, config={} as validatorConfig) => {
        
        if(config?.handleInputRegex) {
            return config.handleInputRegex.test(value.toString())
        }


        const numberValue = Number(value)
        let isValid = !isNaN(numberValue)

        if(isValid && config?.isInteger) {
            isValid = numberValue % 1 === 0;
        }

        if (isValid && config?.min) {
            isValid = numberValue >= config.min
        }
        
        if (isValid && config?.max) {
            isValid = numberValue <= config.max
        }

        if (isValid && config?.maxLength) {
            isValid = String(numberValue).length <= config.maxLength
        }

        if(config?.handleInputRegex) {
            isValid = config.handleInputRegex.test(numberValue.toString())
        }
         

        return isValid
    }


    return {
        regexValidator,
        numberValidator
    }
}

export default useValidator