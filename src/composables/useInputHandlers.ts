import { Ref, ref } from "vue";
import { BaseInputType, BaseInputConfig } from "../types/inputTypes";

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
            const value = inputElement.value;
            const validator = config?.validator;
            const isValid = validator ? validator(value) : true;

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

    const handleBlurInputIntlFormat = (input: Ref<BaseInputType>) => (e: Event) => {
        const inputElement = e.currentTarget as HTMLInputElement
            
        if (input.value.isValid) {
            const numberFormat = Intl.NumberFormat("en-US").format(Number(inputElement.value))
            inputElement.value = numberFormat
        }
    };

    return {
        handleInput,
        handleRadioInput,
        handleFocusInputIntlDeformat,
        handleBlurInputIntlFormat,
        createBaseInput,
    };
};

export { useInputHandlers };
