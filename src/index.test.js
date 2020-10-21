const {
  isEducationalEmailDomain,
  hasAdhocEducationalTld,
  hasCommonEducationalTld,
  hasKnownEducationalEmailDomain,
} = require('./');

describe('is-educational-email-domain', () => {
  test('hasCommonEducationalTld', () => {
    expect(hasCommonEducationalTld('stanford.edu')).toBe(true);
    expect(hasCommonEducationalTld('stanford.edu.jp')).toBe(false);

    expect(hasCommonEducationalTld('xyz.edu.ge')).toBe(true);
    expect(hasCommonEducationalTld('xyz.edu.xx')).toBe(false);

    expect(hasCommonEducationalTld('iuj.ac.jp')).toBe(true);
    expect(hasCommonEducationalTld('bla.ac')).toBe(false);
  });

  test('hasAdhocEducationalTld', () => {
    expect(hasAdhocEducationalTld('ifi.uio.no')).toBe(true);
    expect(hasAdhocEducationalTld('ntnu.no')).toBe(true);
    expect(hasAdhocEducationalTld('math.ntnu.no')).toBe(true);

    expect(hasAdhocEducationalTld('stanford.edu')).toBe(false);
    expect(hasAdhocEducationalTld('iuj.ac.jp')).toBe(false);
  });

  test('hasKnownEducationalEmailDomain', () => {
    expect(hasKnownEducationalEmailDomain('vaniercollege.qc.ca')).toBe(true);
    expect(hasKnownEducationalEmailDomain('ifi.uio.no')).toBe(false);
  });
  test('isEducationalEmailDomain', () => {
    expect(isEducationalEmailDomain('iuj.ac.jp')).toBe(true);
    expect(isEducationalEmailDomain('stanford.edu')).toBe(true);
    expect(isEducationalEmailDomain('ifi.uio.no')).toBe(true);
    expect(isEducationalEmailDomain('vaniercollege.qc.ca')).toBe(true);
  });
});
