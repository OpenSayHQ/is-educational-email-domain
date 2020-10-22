const {
  isEducationalEmailDomain,
  hasAdhocEducationalTld,
  hasCommonEducationalTld,
} = require('./');

describe('is-educational-email-domain', () => {
  test('hasCommonEducationalTld', () => {
    expect(hasCommonEducationalTld('stanford.edu')).toBe(true);
    expect(hasCommonEducationalTld('u-tokyo.ac.jp')).toBe(true);
    expect(hasCommonEducationalTld('xyz.edu.ge')).toBe(true);
    expect(hasCommonEducationalTld('cuhk.edu.cn')).toBe(true);
    expect(hasCommonEducationalTld('technion.ac.il')).toBe(true);

    // .edu.xx doesn't exist
    expect(hasCommonEducationalTld('xyz.edu.xx')).toBe(false);
    // .ac is a ccTLD
    expect(hasCommonEducationalTld('bla.ac')).toBe(false);
  });

  test('hasAdhocEducationalTld', () => {
    expect(hasAdhocEducationalTld('vaniercollege.qc.ca')).toBe(true);
    expect(hasAdhocEducationalTld('phys.ethz.ch')).toBe(true);
    expect(hasAdhocEducationalTld('ntnu.no')).toBe(true);

    // .edu / .edu.cn / ac.il aren't "ad-hoc"
    expect(hasAdhocEducationalTld('standford.edu')).toBe(false);
    expect(hasAdhocEducationalTld('cuhk.edu.cn')).toBe(false);
    expect(hasAdhocEducationalTld('technion.ac.il')).toBe(false);
  });

  test('isEducationalEmailDomain', () => {
    expect(isEducationalEmailDomain('iuj.ac.jp')).toBe(true);
    expect(isEducationalEmailDomain('stanford.edu')).toBe(true);
    expect(isEducationalEmailDomain('ifi.uio.no')).toBe(true);
    expect(isEducationalEmailDomain('vaniercollege.qc.ca')).toBe(true);
  });
});
