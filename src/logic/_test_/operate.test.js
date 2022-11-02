import operate from '../operate';

describe('Testing operate.js file', () => {
  it('Test sum 3 + 3 = 6', () => {
    expect(operate('3', '3', '+')).toBe('6');
  });
  it('Test multiply 3 * 3 = 9', () => {
    expect(operate('3', '3', 'x')).toBe('9');
  });
  it('Test divide 5 / 0 = undefined', () => {
    expect(operate('3', '0', '/')).toBe("Can't divide by 0.");
  });
  it('Test minus 6 - 3 = 3', () => {
    expect(operate('6', '3', '-')).toBe('3');
  });
  it('Test modulus 5 / 3 = 2', () => {
    expect(operate('5', '3', '%')).toBe('2');
  });
});
