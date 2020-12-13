// tslint:disable: no-any

export type UnvalidatedData = any;

export interface IncomingDataSchema {
    readonly type: 'array';
    readonly items: any;
}

export type IncomingPostResponseSchema = any;

export interface ValidationResult {
    readonly isValid: boolean;
    readonly errors?: string;
}