import * as uuid from 'uuid';

export const aNumber = (): number => 99 * Math.random();

export const anInteger = (): number => Math.floor(aNumber());

export const aString = (): string => uuid.v4();