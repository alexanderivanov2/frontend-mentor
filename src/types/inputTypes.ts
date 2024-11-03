
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
    formatter?: (value: any) => any
}

export type {
    BaseInputType,
    BaseInputConfig, 
}