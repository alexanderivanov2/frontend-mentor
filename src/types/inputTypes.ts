
interface BaseInputType { 
    value: string;
    isValid: boolean;
    errorMessage: string;
}

interface validatorConfig {
    regEx?: RegExp,
    min?: number,
    max?: number,
    minLength?: number
    maxLength?: number,
}

interface BaseInputConfig {
    strict?: boolean,
    errorHandling?: {
        errorMessage: string
    },
    validator?: (value: any, validatorConfig?: {}) => boolean
    validatorConfig?: validatorConfig
    formatter?: (value: any) => any
}

export type {
    BaseInputType,
    BaseInputConfig, 
    validatorConfig,
}