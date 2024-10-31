
const useValidator = () => {

    const regexValidator = (value: string, regEx: RegExp) => {
        return regEx.test(value)
    }

    const numberValidator = (value: any) => {
        return !isNaN(Number(value))
    }


    return {
        regexValidator,
        numberValidator
    }
}

export default useValidator