# AdvancedForm

This is a repository created for recruitment purposes. The repository contains a form with a special form of validation. Every error will be displayed in a snackbar in the bottom right corner of the browser view. The form is aligned to the center of the browser view - vertically and horizontally. Every input handles the placeholder with label instead of the HTML5 'placeholder' tag. The password text field includes the password strength checker. On [Register] button click the data from form will be saved in the localStorage. The application includes tests. The validation rules are listed below:

- First name - required, no digits
- Second name - required, no digits
- Textarea 1 - required, 10 characters limit
- Textarea 2 - required, 20 characters limit
- Email - required, must has email format
- Password - required, minimum 8 characters, one digit, one uppercase letter, and one special character
- VID number - required, digits only, 5 characters limit
- Number of tickets - required, digits only, values between 1 and 20

Requirements:

- Node JS
- npm

Installation:

- `npm install`

Tests:

- `npm run test`

ESLint check:

- `npm run lint`

Application start (in development mode):

- `npm run dev` (first make sure you have free 3000 port)
