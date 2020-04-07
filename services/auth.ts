type ServiceResult = {
    error?: string;
    result?: string;
};

export const register = async (email: string): Promise<ServiceResult> => {
    await new Promise((res) => {
        setTimeout(() => res(), 1000);
    });

    return { result: email };
};
