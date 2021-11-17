import { isValidEmail, isValidPassword } from '../../src/utils/loginValidator';

describe('loginValidator.js > isValidEmail()', () => {
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

describe('loginValidator.js > isValidPassword()', () => {
    const VALID_PASSWORDS = [
        'Mn1#aa',
        '8Fp$oo',
        ']sTRPLv6',
        'B6,xoo^S',
        '$4BfAm&i',
        'BWxd,9\\4',
        'Jhr4AiJ{',
        '3PV/X(cx',
    ];

    const INVALID_PASSWORDS = [
        'ZGimMtJ7',
        'gqHTmDYj',
        'GVYZSCWD',
        'vgzjizxt',
        '3mk2yhxd',
        '<7v\')e"7',
        '8}6_.&"-',
        '_~^\'/(?#',
        '*~>irs~$',
    ];

    it('given an valid password, isValidPassword should return true', () => {
        VALID_PASSWORDS.forEach((password) => {
            const validation = isValidPassword(password);
            expect(validation).toBe(true);
        });
    });

    it('given invalid passwords, isValidPassword should return false', () => {
        INVALID_PASSWORDS.forEach((password) => {
            const validation = isValidPassword(password);
            expect(validation).toBe(false);
        });
    });
});
