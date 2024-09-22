export namespace Validation {
    export enum ValidationType {
        REQUIRED,
        EMAIL,
        PHONE_NUMBER,
        DATE,
        TRUE
    }

    export interface ValidatorInterface {
        validatorType : ValidationType;
        message : string;
    }

    export interface ValidationResponse {
        valid : boolean;
        errors : ValidatorInterface[];
    }
}