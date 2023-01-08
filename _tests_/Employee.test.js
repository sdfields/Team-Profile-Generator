import { getName } from '../lib/Employee.js';
import { getId } from '../lib/Employee.js';

describe(`getName`, () => {
    it(`should output a string (name)`, () => {
        expect(getName()).toBe('Name');
    });
});