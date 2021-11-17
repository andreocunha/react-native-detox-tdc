import { isValidEmail, isValidPassword } from '../../src/utils/loginValidator';

describe('loginValidator.js', () => {
  const VALID_EMAIL = 'valid@email.com';
  const VALID_EMAILS = [
    'email@example.com',
    'firstname.lastname@example.com',
    'email@subdomain.example.com',
    'firstname+lastname@example.com',
    '"email"@example.com',
    '1234567890@example.com',
    'email@example-one.com',
    '_______@example.com',
    'email@example.name',
    'email@example.museum',
    'email@example.co.jp',
    'firstname-lastname@example.com',
  ];

  const INVALID_EMAILS = [
    'plainaddress',
    '@example.com',
    'email.example.com',
    'email@example@example.com',
    '.email@example.com',
    'email.@example.com',
    'email..email@example.com',
    'email@example.com (Joe Smith)',
    'email@example',
    'email@111.222.333.44444',
    'email@example..com',
    'Abc..123@example.com',
  ];

  it('given an valid email, isValidEmail should return true', () => {
    VALID_EMAILS.forEach((email) => {
      const validation = isValidEmail(email);
      expect(validation).toBe(true);
    });
  });

  it('given invalid emails, isValidEmail should return false', () => {
    INVALID_EMAILS.forEach((email) => {
      const validation = isValidEmail(email);
      expect(validation).toBe(false);
    });
  });
});
