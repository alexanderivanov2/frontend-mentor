import { Ref, ref } from "vue";
import { BaseInputType, BaseInputConfig, validatorConfig } from "../types/inputTypes";

const useInputHandlers = () => {
    const createBaseInput = () => {
        return ref<BaseInputType>({
            value: '',
            isValid: true,
            errorMessage: '',
        })
    }
    
    const handleInput =
        (input: Ref<BaseInputType>, config?: BaseInputConfig) => (e: Event) => {
            const inputElement = e.currentTarget as HTMLInputElement;
            const value = config?.formatter ? config?.formatter(inputElement.value) : inputElement.value;
            const validator = config?.validator;
            const isValid = validator && value ? validator(value, config?.validatorConfig) : true;
            
            if (config?.strict) {
                if (isValid) {
                    input.value.value = value;
                }
            } else {
                input.value.value = value;
            }

            if (!isValid) {
                input.value.isValid = false;
                if (config?.errorHandling) {
                    input.value.errorMessage = config?.errorHandling.errorMessage;
                }
            } else if (!input.value.isValid) {
                input.value.isValid = true;
                if (config?.errorHandling) {
                    input.value.errorMessage = "";
                }
            }

            inputElement.value = config?.strict ? input.value.value : value;
        };

    const handleRadioInput = (input: Ref<BaseInputType>) => (e: Event) => {
        const target = e.target as HTMLInputElement;
        input.value.value = target.value

        if (input?.value.isValid === false) {
            input.value.isValid = true
            input.value.errorMessage = ''
        }
    }

    const handleFocusInputIntlDeformat = (input: Ref<BaseInputType>) => (e: Event) => {
        const inputElement = e.currentTarget as HTMLInputElement
        if (input.value.isValid) {
            inputElement.value = inputElement.value.replaceAll(',', '')
        }
    };

    const handleBlurInputIntlFormat = (input: Ref<BaseInputType>, validate?: {
        validator?: (value: any, config?: validatorConfig) => boolean,
        validatorConfig?: validatorConfig
    }) => (e: Event) => {
        const inputElement = e.currentTarget as HTMLInputElement
        
        validate?.validator && handleValidation(input, validate)

        if (input.value.isValid) {
            const numberFormat = Intl.NumberFormat("en-US").format(Number(inputElement.value))
            inputElement.value = numberFormat === '0' ? '' : numberFormat
        }
    };

    const handleBlurValidation =  (input: Ref<BaseInputType>, validate?: {
        validator?: (value: any, config?: validatorConfig) => boolean,
        validatorConfig?: validatorConfig
    }) => (e: Event) => {
        validate?.validator && handleValidation(input, validate)

    }

    const handleValidation = (input: Ref<BaseInputType>, validate?: {
        validator?:(value: any, config?: validatorConfig) => boolean, validatorConfig?: validatorConfig}) => {
        if (validate?.validator) {
            const config = validate?.validatorConfig ?? {}
            const isValid = validate?.validator(input.value.value, config)

            if(isValid && !input.value.isValid) {
                input.value.isValid = isValid
                input.value.errorMessage = ''
            }
        }
    }


    const formatNumberCommaSeparated = (value: string) => value.replaceAll(',', '')

    return {
        handleInput,
        handleRadioInput,
        handleFocusInputIntlDeformat,
        handleBlurInputIntlFormat,
        handleBlurValidation,
        createBaseInput,
        formatNumberCommaSeparated,
    };
};

export { useInputHandlers };
