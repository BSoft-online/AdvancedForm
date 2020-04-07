import { validate } from '../../validation';
import { MainValidateFunction } from '../../types';

export const testArray = ({
    testCases,
    params,
    result,
}: {
    testCases: string[];
    params: MainValidateFunction;
    result: string;
}): void => {
    for (const text of testCases) {
        expect(validate({ ...params, text })).toBe(result);
    }
};
