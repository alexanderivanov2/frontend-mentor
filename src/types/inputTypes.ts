
interface BaseInputType { 
    value: string;
    isValid: boolean;
    errorMessage: string;
}

interface BaseInputConfig {
    strict?: boolean,
    errorHandling?: {
        errorMessage: string
    },
    validator?: (value: any, regEx?: RegExp) => boolean
}

export type {
    BaseInputType,
    BaseInputConfig, 
}