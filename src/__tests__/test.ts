import { add, Greeter, Greeter2 } from '../index';

test('Add function', () => {
    expect(add(0.1, 0.2)).toBe(Number(0.3.toPrecision(12)));
});
