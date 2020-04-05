import { randomBool } from 'utils/helpers';

type ServiceResult = {
    error?: string;
    result?: string;
};

export const register = async (email: string): Promise<ServiceResult> => {
    await new Promise((res) => {
        setTimeout(() => res(), 1000);
    });

    return randomBool()
        ? { result: email }
        : { error: 'Server error occured. Please try again later' };
};
