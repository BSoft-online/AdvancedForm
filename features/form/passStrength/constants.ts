export const scoreToName = [
    'none', // no password at all
    'short', // password is too short
    'bad', // zxcvbn score === 0
    'weak', // zxcvbn score === 1
    'enough', // zxcvbn score === 2
    'good', // zxcvbn score === 3
    'strong', // zxcvbn score === 4
];

type Dictionary = { [index: string]: string };
export const scoreMessage: Dictionary = {
    none: '',
    short: 'Too short',
    bad: 'Very weak',
    weak: 'Weak',
    enough: 'Good',
    good: 'Strong',
    strong: 'Very strong!',
};

const makeClasses = (c: string): string[] => scoreToName.map((v) => `${c}${v}`);
export const markClasses = makeClasses('mark');
export const infoClasses = makeClasses('info');
