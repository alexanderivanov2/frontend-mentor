import { Ref }from 'vue'

function useInputs() {

    const baseUpdateInput = ((inputValue: Ref<string | number>) => {
        return (value: string | number) => {
            inputValue.value = value
        }
    })
    
    const baseUpdateTextNumberInput = ((inputValue: Ref<string | number>, property?: string) => {
        return (value: string) => {

            if (!isNaN(Number(value))) {
                console.log(value);
                inputValue.value = value
            }
        }
    })

    const baseGetErrorMessage = (inputValue: Ref<string | number>, inputValid: Ref<{ message: string, isValid: boolean }>, emptyMessage?: string, invalidMessage?: string) => {
        return (isValid: boolean) => {
            inputValid.value.isValid = isValid && !!inputValue.value

            if(inputValid.value.isValid) {
                inputValid.value.message = ''
            } else if (inputValue.value === '' && emptyMessage) {
                inputValid.value.message = emptyMessage
            } else if (invalidMessage){
                inputValid.value.message = invalidMessage
            } else {
                inputValid.value.isValid = !isValid
            }
        }
    }
    
   return {
        baseUpdateInput,
        baseUpdateTextNumberInput,
        baseGetErrorMessage,
    }
}

export {
    useInputs
}