const educationalTldSet = new Set(
  require('../assets/educational_tlds_and_slds.json')
);

const hasEducationalTld = (domain) => {
  try {
    const dotSeparated = domain.split('.');
    const tld = dotSeparated[dotSeparated.length - 1];
    const sld = dotSeparated[dotSeparated.length - 2];
    return educationalTldSet.has(tld) || educationalTldSet.has(`${sld}.${tld}`);
  } catch (e) {
    throw new Error(`Couldn't parse ${domain} - probably not a valid domain.`);
  }
};

module.exports = { hasEducationalTld };
