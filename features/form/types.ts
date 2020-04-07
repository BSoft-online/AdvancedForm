export interface FunctionDictionary {
    [id: string]: Function;
}

export interface StringDictionary {
    [id: string]: string;
}

export interface ValidateFunction {
    name: string;
    text: string;
    limit?: number;
    minValue?: number;
    maxValue?: number;
}

export interface MainValidateFunction extends ValidateFunction {
    validationType?: string;
}

export interface Setters {
    setValues: React.Dispatch<React.SetStateAction<StringDictionary>>;
    setErrors: React.Dispatch<React.SetStateAction<StringDictionary>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setPasswordScore: React.Dispatch<React.SetStateAction<number>>;
}

export interface SubmitArguments {
    setters: Setters;
    values: StringDictionary;
}

export interface ErrorMessages {
    [id: string]: StringDictionary;
}
