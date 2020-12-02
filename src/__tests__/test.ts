import { Greeter, Greeter2 } from '../index';
test('My Greeter', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
    expect(Greeter2('Carl')).toBe('Hi Carl');
});
