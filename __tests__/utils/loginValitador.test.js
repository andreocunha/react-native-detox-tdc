import { isValidEmail, isValidPassword } from '../../src/utils/loginValidator';

describe('loginValidator.js', () => {
  const VALID_EMAIL = 'valid@email.com';
  const INVALID_EMAILS = [
    '',
    'a',
    '@',
    '@.'
  ];

  it('given an valid email, isValidEmail should return true', () => {
    const validation = isValidEmail(VALID_EMAIL);
    expect(validation).toBe(true);
  });

  it('given invalid emails, isValidEmail should return false', () => {
    INVALID_EMAILS.forEach((email) => {
      const validation = isValidEmail(email);
      expect(validation).toBe(false);
    });
  });
});
