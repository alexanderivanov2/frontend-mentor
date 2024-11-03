import { validatorConfig } from "../types/inputTypes"

const useValidator = () => {

    const regexValidator = (value: string, regEx: RegExp) => {
        return regEx.test(value)
    }

    const numberValidator = (value: any, config={} as validatorConfig) => {
        const numberValue = Number(value)
        let isValid = !isNaN(numberValue)

        if (isValid && config?.min) {
            isValid = numberValue >= config.min
        }
        
        if (isValid && config?.max) {
            isValid = numberValue <= config.max
        }

        if (isValid && config?.maxLength) {
            isValid = String(numberValue).length <= config.maxLength
        }
         

        return isValid
    }


    return {
        regexValidator,
        numberValidator
    }
}

export default useValidator