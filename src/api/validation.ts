import { IncomingDataSchema, IncomingPostResponseSchema, UnvalidatedData , ValidationResult} from './types';
// tslint:disable-next-line:no-var-requires
const Ajv = require('ajv');

export const validateIncomingData = (schema: IncomingDataSchema | IncomingPostResponseSchema, data: UnvalidatedData): ValidationResult => {
    const ajv = new Ajv();
    const isValid = ajv.validate(schema, data) as boolean;
    return isValid ? { isValid } : { isValid, errors: ajv.errorsText(ajv.errors) };

};